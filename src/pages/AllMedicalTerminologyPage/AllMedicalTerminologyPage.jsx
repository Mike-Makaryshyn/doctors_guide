import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalTerms } from "../../constants/medicalTerms";
import styles from "./AllMedicalTerminologyPage.module.scss";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import { FaCog } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// Функція для уніфікації регіону
const unifyRegion = (r) => {
  if (r === "Westfalen-Lippe") return "Nordrhein-Westfalen";
  return r;
};

const AllMedicalTerminologyPage = () => {
  // Отримуємо глобальні параметри
  const { selectedRegion, selectedLanguage, languages } = useGetGlobalInfo();

  // Стан регіону (за замовчуванням беремо з global або "Bayern")
  const [region, setRegion] = useState(unifyRegion(selectedRegion || "Bayern"));
  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  // Стан для мови перекладу (за замовчуванням – обрана global або "de")
  const [translationLanguage, setTranslationLanguage] = useState(selectedLanguage || "de");
  useEffect(() => {
    setTranslationLanguage(selectedLanguage || "de");
  }, [selectedLanguage]);

  // Стан модального вікна налаштувань (рег. та мови)
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const settingsModalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsModalRef.current && !settingsModalRef.current.contains(event.target)) {
        setIsSettingsModalOpen(false);
      }
    };
    if (isSettingsModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSettingsModalOpen]);

  // Стан для згортання категорій (якщо знадобиться – хоча тут більше не використовуємо таблицю)
  const [collapsedCategories, setCollapsedCategories] = useState({});

  // Інші стани для роботи зі списком термінів
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDefinitions, setSelectedDefinitions] = useState([]);
  const [showDefinitions, setShowDefinitions] = useState(true);
  const [showSaveModal, setShowSaveModal] = useState(false);

  // Визначення, чи мобільний пристрій (ширина <= 768px)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Отримуємо унікальний набір регіонів (якщо term.regions існує)
  const uniqueRegions = Array.from(
    new Set(
      medicalTerms.flatMap((term) =>
        (term.regions || []).map((r) => unifyRegion(r))
      )
    )
  );
  const regionOptions = ["Усі", ...uniqueRegions];

  // Для вибору мов із глобального стану – якщо є відповідні опції
  const localLangOptions =
    languages[selectedLanguage]?.options || languages["de"].options;

  // Фільтрація термінів за пошуком, категоріями і регіоном
  const filteredTerms = medicalTerms.filter((term) => {
    const matchesSearch =
      term.lat.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.de.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.deExplanation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) => term.categories.includes(cat));
    const matchesRegion =
      region === "Усі" ||
      (term.regions || []).some((r) => unifyRegion(r) === region);
    return matchesSearch && matchesCategory && matchesRegion;
  });

  // Обробники подій
  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleDefinitionSelect = (id) => {
    setSelectedDefinitions((prev) =>
      prev.includes(id)
        ? prev.filter((defId) => defId !== id)
        : [...prev, id]
    );
  };

  const handleRegionChange = (e) => {
    setRegion(unifyRegion(e.target.value));
  };

  const handleTranslationChange = (e) => {
    setTranslationLanguage(e.target.value);
  };

  // Збереження у PDF та особистий кабінет (залишається без змін)
  const saveToPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Вибрані медичні терміни", 10, 10);
    const tableData = selectedDefinitions.map((termId) => {
      const term = medicalTerms.find((term) => term.id === termId);
      return [term.lat, term.de, term.deExplanation];
    });
    doc.autoTable({
      head: [["Латинська назва", "Німецька назва", "Означення"]],
      body: tableData,
      startY: 20,
      styles: { font: "Helvetica", fontSize: 10, cellPadding: 5 },
      headStyles: { fillColor: [52, 152, 219], textColor: 255, halign: "center" },
      bodyStyles: { textColor: [33, 33, 33] },
      alternateRowStyles: { fillColor: [245, 245, 245] },
    });
    doc.save("selected_terms.pdf");
    setShowSaveModal(false);
  };

  const saveToPersonalAccount = async () => {
    if (!user) {
      alert("Будь ласка, увійдіть у систему, щоб зберегти дані!");
      return;
    }
    try {
      const termsCollection = collection(db, `users/${user.uid}/savedTerms`);
      for (const termId of selectedDefinitions) {
        const termDoc = doc(termsCollection, termId.toString());
        await setDoc(termDoc, { id: termId });
      }
      alert("Вибрані терміни успішно збережені у вашому особистому кабінеті!");
    } catch (error) {
      console.error("Помилка при збереженні:", error);
      alert("Сталася помилка. Спробуйте пізніше.");
    }
    setShowSaveModal(false);
  };

  const deleteTermById = async (termId) => {
    if (!user) {
      alert("Ви повинні бути авторизовані для видалення терміна.");
      return;
    }
    try {
      const termDoc = doc(db, `users/${user.uid}/savedTerms`, termId.toString());
      await deleteDoc(termDoc);
      alert(`Термін із ID ${termId} успішно видалено.`);
    } catch (error) {
      console.error("Помилка при видаленні:", error);
    }
  };

  const handleSaveDefinitions = () => {
    if (selectedDefinitions.length === 0) {
      alert("Оберіть хоча б один термін!");
      return;
    }
    setShowSaveModal(true);
  };

  return (
    <MainLayout>
      <div className={styles.allMedicalTerminologyPage}>
        <h1>Уся медична термінологія</h1>

        {/* Верхні кнопки дій */}
        <div className={styles.topButtons}>
          <button onClick={handleSaveDefinitions} className={styles.actionButton}>
            Зберегти вибрані визначення
          </button>
          <button
            onClick={() => setShowDefinitions((prev) => !prev)}
            className={styles.actionButton}
          >
            {showDefinitions ? "Приховати означення" : "Показати означення"}
          </button>
        </div>

        {/* Пошук */}
        <input
          type="text"
          placeholder="Пошук..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

        {/* Фільтри категорій (якщо необхідно) */}
        <div className={styles.categoryFilter}>
          <div className={styles.categoryButtonContainer}>
            {Object.keys(filteredTerms).length > 0 &&
              // Якщо потрібно групувати за категоріями, можна це реалізувати
              // або просто відобразити плитки з усіма термінами.
              filteredTerms.map((term) => (
                <div key={term.id}></div>
              ))}
          </div>
        </div>

        {/* Відображення термінів у плитковому форматі */}
        <div className={styles.tilesContainer}>
          {filteredTerms.map((term) => (
            <div key={term.id} className={styles.tile}>
              <h3 className={styles.tileHeader}>{term.lat}</h3>
              <p className={styles.tileDescription}>
                {translationLanguage !== "de" ? (
                  <Tippy
                    content={term[translationLanguage] || "Немає перекладу"}
                    trigger="click"
                    interactive={true}
                    placement="bottom"
                  >
                    <span className={styles.clickableCell}>{term.de}</span>
                  </Tippy>
                ) : (
                  term.de
                )}
              </p>
              {showDefinitions && (
                <p className={styles.tileExplanation}>
                  {translationLanguage !== "de" ? (
                    <Tippy
                      content={
                        term[translationLanguage + "Explanation"] ||
                        "Немає перекладу"
                      }
                      trigger="click"
                      interactive={true}
                      placement="bottom"
                    >
                      <span className={styles.clickableCell}>
                        {term.deExplanation}
                      </span>
                    </Tippy>
                  ) : (
                    term.deExplanation
                  )}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Модальне вікно для збереження визначень */}
        {showSaveModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>Куди зберегти?</h2>
              <p>Оберіть, як зберегти вибрані терміни:</p>
              <div className={styles.modalActions}>
                <button className={styles.actionButton} onClick={saveToPersonalAccount}>
                  Особистий кабінет
                </button>
                <button className={styles.actionButton} onClick={saveToPDF}>
                  Зберегти у PDF
                </button>
              </div>
              <button className={styles.closeButton} onClick={() => setShowSaveModal(false)}>
                Закрити
              </button>
            </div>
          </div>
        )}

        {/* Кнопка шестерні для відкриття модального вікна налаштувань */}
        <div className={styles.bottomRightSettings}>
          <button className={styles.settingsButton} onClick={() => setIsSettingsModalOpen(true)}>
            <FaCog />
          </button>
        </div>

        {/* Модальне вікно налаштувань (рег. та мови) */}
        {isSettingsModalOpen && (
          <div
            className={
              window.innerWidth > 768
                ? styles.popupContainerDesktop
                : styles.popupContainerMobile
            }
          >
            <div className={styles.popup} ref={settingsModalRef}>
              <button className={styles.modalCloseButton} onClick={() => setIsSettingsModalOpen(false)}>
                <AiOutlineClose />
              </button>
              <h2 className={styles.modalTitle}>Налаштування</h2>
              <p className={styles.modalSubtitle}>
                Оберіть регіон та мову перекладу:
              </p>
              <div>
                <label className={styles.modalLabel}>Регіон:</label>
                <select value={region} onChange={handleRegionChange} className={styles.modalSelect}>
                  {Object.keys(medicalTerms.reduce((acc, term) => {
                    (term.regions || []).forEach((r) => {
                      acc[unifyRegion(r)] = true;
                    });
                    return acc;
                  }, {})).map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                  <option value="Усі">Усі</option>
                </select>
              </div>
              <div>
                <label className={styles.modalLabel}>Мова:</label>
                <select
                  value={translationLanguage}
                  onChange={handleTranslationChange}
                  className={styles.modalSelect}
                >
                  {localLangOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default AllMedicalTerminologyPage;