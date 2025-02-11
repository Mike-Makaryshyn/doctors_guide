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

// Функція для уніфікації регіону – замінюємо "Westfalen-Lippe" на "Nordrhein-Westfalen"
const unifyRegion = (r) => {
  if (r === "Westfalen-Lippe") return "Nordrhein-Westfalen";
  return r;
};

const AllMedicalTerminologyPage = () => {
  // Отримуємо глобальні параметри
  const { selectedRegion, selectedLanguage, languages } = useGetGlobalInfo();

  // Стан регіону (за замовчуванням із global або "Bayern")
  const [region, setRegion] = useState(unifyRegion(selectedRegion || "Bayern"));
  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  // Стан мови перекладу (за замовчуванням із global або "de")
  const [translationLanguage, setTranslationLanguage] = useState(selectedLanguage || "de");
  useEffect(() => {
    setTranslationLanguage(selectedLanguage || "de");
  }, [selectedLanguage]);

  // Стан для вибору категорії через випадаючий список (початкове значення – "Всі")
  const [selectedCategory, setSelectedCategory] = useState("Всі");

  // Стан для показу означень (керується через модальне вікно)
  const [showDefinitions, setShowDefinitions] = useState(true);

  // Стан пошукового запиту
  const [searchTerm, setSearchTerm] = useState("");

  // Стан для збереження визначень (збереження залишено, хоча чекбокси видалені)
  const [selectedDefinitions, setSelectedDefinitions] = useState([]);
  const [showSaveModal, setShowSaveModal] = useState(false);

  // Стан для керування згортанням категорій
  const [collapsedCategories, setCollapsedCategories] = useState({});

  // Стан модального вікна налаштувань (фільтри)
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

  // Визначення, чи мобільний пристрій (ширина <= 768px)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Унікальні регіони з даних
  const uniqueRegions = Array.from(
    new Set(
      medicalTerms.flatMap((term) =>
        (term.regions || []).map((r) => unifyRegion(r))
      )
    )
  );
  const regionOptions = ["Усі", ...uniqueRegions];

  // Унікальні категорії з даних
  const uniqueCategories = Array.from(
    new Set(medicalTerms.flatMap((term) => term.categories || []))
  );

  // Опції для мов із глобального стану
  const localLangOptions = (languages[selectedLanguage]?.options) || languages["de"].options;

  // Фільтрація термінів: за пошуком, вибраною категорією та регіоном
  const filteredTerms = medicalTerms.filter((term) => {
    const matchesSearch =
      term.lat.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.de.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.deExplanation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Всі" ||
      (term.categories || []).includes(selectedCategory);
    const matchesRegion =
      region === "Усі" ||
      (term.regions || []).some((r) => unifyRegion(r) === region);
    return matchesSearch && matchesCategory && matchesRegion;
  });

  // Групування термінів за категоріями
  const termsByCategory = {};
  filteredTerms.forEach((term) => {
    (term.categories || []).forEach((category) => {
      if (!termsByCategory[category]) {
        termsByCategory[category] = [];
      }
      termsByCategory[category].push(term);
    });
  });

  // Обробники у модальному вікні
  const handleRegionChange = (e) => {
    setRegion(unifyRegion(e.target.value));
  };
  const handleTranslationChange = (e) => {
    setTranslationLanguage(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Функції збереження (якщо знадобиться)
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
    if (!auth.currentUser) {
      alert("Будь ласка, увійдіть у систему, щоб зберегти дані!");
      return;
    }
    try {
      const termsCollection = collection(db, `users/${auth.currentUser.uid}/savedTerms`);
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

  return (
    <MainLayout>
      <div className={styles.allMedicalTerminologyPage}>
        <h1>Уся медична термінологія</h1>

        {/* Пошук */}
        <input
          type="text"
          placeholder="Пошук..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

        {/* Відображення визначень за категоріями */}
        {isMobile ? (
          // Мобільний режим – плитки (карточки)
          <div className={styles.tilesContainer}>
            {Object.keys(termsByCategory).map((category) => (
              <div key={category} className={styles.categorySection}>
                <h2
                  onClick={() =>
                    setCollapsedCategories((prev) => ({
                      ...prev,
                      [category]: !prev[category],
                    }))
                  }
                  className={styles.categoryHeader}
                >
                  {category}
                  <span className={styles.collapseIcon}>
                    {collapsedCategories[category] ? "▼" : "▲"}
                  </span>
                </h2>
                {!collapsedCategories[category] &&
                  termsByCategory[category].map((term) => (
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
                              content={term[translationLanguage + "Explanation"] || "Немає перекладу"}
                              trigger="click"
                              interactive={true}
                              placement="bottom"
                            >
                              <span className={styles.clickableCell}>{term.deExplanation}</span>
                            </Tippy>
                          ) : (
                            term.deExplanation
                          )}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ) : (
          // Десктопний режим – таблиця
          Object.keys(termsByCategory).map((category) => (
            <div key={category} className={styles.categorySection}>
              <h2
                onClick={() =>
                  setCollapsedCategories((prev) => ({
                    ...prev,
                    [category]: !prev[category],
                  }))
                }
                className={styles.categoryHeader}
              >
                {category}
                <span className={styles.collapseIcon}>
                  {collapsedCategories[category] ? "▼" : "▲"}
                </span>
              </h2>
              {!collapsedCategories[category] && (
                <table className={styles.terminologyTable}>
                  <thead>
                    <tr>
                      <th>Латинська назва</th>
                      <th>Німецька назва</th>
                      {showDefinitions && <th>Означення</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {termsByCategory[category].map((term) => (
                      <tr key={term.id}>
                        <td>{term.lat}</td>
                        <td>
                          {translationLanguage !== "de" ? (
                            <Tippy
                              content={term[translationLanguage] || "Немає перекладу"}
                              trigger="click"
                              interactive={true}
                              placement="right"
                            >
                              <span className={styles.clickableCell}>{term.de}</span>
                            </Tippy>
                          ) : (
                            term.de
                          )}
                        </td>
                        {showDefinitions && (
                          <td>
                            {translationLanguage !== "de" ? (
                              <Tippy
                                content={term[translationLanguage + "Explanation"] || "Немає перекладу"}
                                trigger="click"
                                interactive={true}
                                placement="right"
                              >
                                <span className={styles.clickableCell}>{term.deExplanation}</span>
                              </Tippy>
                            ) : (
                              term.deExplanation
                            )}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))
        )}

        {/* Модальне вікно для збереження (якщо потрібно) */}
        {showSaveModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>Куди зберегти?</h2>
              <p>Оберіть, як зберегти визначення:</p>
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

        {/* Кнопка шестерні для відкриття модального вікна фільтрів */}
        <div className={styles.bottomRightSettings}>
          <button className={styles.settingsButton} onClick={() => setIsSettingsModalOpen(true)}>
            <FaCog />
          </button>
        </div>

        {/* Модальне вікно фільтрів */}
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
                Оберіть регіон, мову та категорію, а також налаштуйте показ означень:
              </p>
              <div>
                <label className={styles.modalLabel}>Регіон:</label>
                <select value={region} onChange={handleRegionChange} className={styles.modalSelect}>
                  {Object.keys(
                    medicalTerms.reduce((acc, term) => {
                      (term.regions || []).forEach((r) => {
                        acc[unifyRegion(r)] = true;
                      });
                      return acc;
                    }, {})
                  ).map((r) => (
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
              <div>
                <label className={styles.modalLabel}>Категорія:</label>
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className={styles.modalSelect}
                >
                  <option value="Всі">Всі</option>
                  {uniqueCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={styles.modalLabel}>Показувати означення:</label>
                <input
                  type="checkbox"
                  checked={showDefinitions}
                  onChange={() => setShowDefinitions((prev) => !prev)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default AllMedicalTerminologyPage;