import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { medicalAbbreviations } from "./medicalAbbreviations";
import styles from "./AllMedicalAbbreviationsPage.module.scss";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { FaCog } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

// Функція для уніфікації регіону – замінюємо "Westfalen-Lippe" на "Nordrhein-Westfalen"
const unifyRegion = (r) => {
  if (r === "Westfalen-Lippe") return "Nordrhein-Westfalen";
  return r;
};

const AllMedicalAbbreviationsPage = () => {
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

  // Стан для показу пояснень – true означає, що пояснення відображаються
  const [showDefinitions, setShowDefinitions] = useState(true);

  // Стан пошукового запиту
  const [searchTerm, setSearchTerm] = useState("");

  // Стан для збереження вибраних елементів (якщо знадобиться)
  const [selectedDefinitions, setSelectedDefinitions] = useState([]);
  const [showSaveModal, setShowSaveModal] = useState(false);

  // Стан модального вікна налаштувань
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

  // Отримуємо унікальні регіони із даних
  const uniqueRegions = Array.from(
    new Set(
      medicalAbbreviations.flatMap((abbr) =>
        (abbr.regions || []).map((r) => unifyRegion(r))
      )
    )
  );
  const regionOptions = ["Усі", ...uniqueRegions];

  // Опції для мов із глобального стану
  const localLangOptions = (languages[selectedLanguage]?.options) || languages["de"].options;

  // Фільтрація скорочень за пошуком та регіоном
  const filteredAbbreviations = medicalAbbreviations.filter((abbr) => {
    const matchesSearch =
      abbr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      abbr.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      abbr.explanation.de.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion =
      region === "Усі" ||
      !(abbr.regions && abbr.regions.length) ||
      (abbr.regions || []).some((r) => unifyRegion(r) === region);
    return matchesSearch && matchesRegion;
  });

  // Функція збереження у PDF
  const saveToPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Вибрані медичні скорочення", 10, 10);
    const tableData = selectedDefinitions.map((abbrId) => {
      const abbr = medicalAbbreviations.find((item) => item.id === abbrId);
      const explanation =
        translationLanguage !== "de"
          ? abbr.explanation[translationLanguage] || "Немає перекладу"
          : abbr.explanation.de;
      return [abbr.abbreviation, abbr.name, explanation];
    });
    doc.autoTable({
      head: [["Скорочення", "Назва", "Пояснення"]],
      body: tableData,
      startY: 20,
      styles: { font: "Helvetica", fontSize: 10, cellPadding: 5 },
      headStyles: { fillColor: [52, 152, 219], textColor: 255, halign: "center" },
      bodyStyles: { textColor: [33, 33, 33] },
      alternateRowStyles: { fillColor: [245, 245, 245] },
    });
    doc.save("selected_abbreviations.pdf");
    setShowSaveModal(false);
  };

  // Функція збереження у особистий кабінет (поки що не реалізована)
  const saveToPersonalAccount = async () => {
    alert("Функція збереження поки що не реалізована");
    setShowSaveModal(false);
  };

  // Обробники для зміни регіону та мови у налаштуваннях
  const handleRegionChange = (e) => {
    setRegion(unifyRegion(e.target.value));
  };

  const handleTranslationChange = (e) => {
    setTranslationLanguage(e.target.value);
  };

  return (
    <MainLayout>
      <div className={styles.allMedicalAbbreviationsPage}>
        <h1>Медичні скорочення</h1>

        {/* Пошук */}
        <input
          type="text"
          placeholder="Пошук..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

        {/* Відображення скорочень */}
        {isMobile ? (
          <div className={styles.tilesContainer}>
            {filteredAbbreviations.map((abbr) => (
              <div key={abbr.id} className={styles.tile}>
                <h3 className={styles.tileHeader}>
                  {translationLanguage !== "de" ? (
                    <Tippy
                      content={abbr[translationLanguage] || "Немає перекладу"}
                      trigger="click"
                      interactive={true}
                      placement="bottom"
                    >
                      <span className={styles.clickableCell}>{abbr.abbreviation}</span>
                    </Tippy>
                  ) : (
                    abbr.abbreviation
                  )}
                </h3>
                <p className={styles.tileDescription}>
                  {translationLanguage !== "de" ? (
                    <Tippy
                      content={abbr.name || "Немає перекладу"}
                      trigger="click"
                      interactive={true}
                      placement="bottom"
                    >
                      <span className={styles.clickableCell}>{abbr.name}</span>
                    </Tippy>
                  ) : (
                    abbr.name
                  )}
                </p>
                {showDefinitions && (
                  <p className={styles.tileExplanation}>
                    {translationLanguage !== "de" ? (
                      <Tippy
                        content={abbr.explanation[translationLanguage] || "Немає перекладу"}
                        trigger="click"
                        interactive={true}
                        placement="bottom"
                      >
                        <span className={styles.clickableCell}>{abbr.explanation.de}</span>
                      </Tippy>
                    ) : (
                      abbr.explanation.de
                    )}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <table className={styles.terminologyTable}>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>Скорочення</th>
                <th style={{ width: "30%" }}>Назва</th>
                {showDefinitions && <th>Пояснення</th>}
              </tr>
            </thead>
            <tbody>
              {filteredAbbreviations.map((abbr) => (
                <tr key={abbr.id}>
                  <td>
                    {translationLanguage !== "de" ? (
                      <Tippy
                        content={abbr[translationLanguage] || "Немає перекладу"}
                        trigger="click"
                        interactive={true}
                        placement="right"
                      >
                        <span className={styles.clickableCell}>{abbr.abbreviation}</span>
                      </Tippy>
                    ) : (
                      abbr.abbreviation
                    )}
                  </td>
                  <td>
                    {translationLanguage !== "de" ? (
                      <Tippy
                        content={abbr.name || "Немає перекладу"}
                        trigger="click"
                        interactive={true}
                        placement="right"
                      >
                        <span className={styles.clickableCell}>{abbr.name}</span>
                      </Tippy>
                    ) : (
                      abbr.name
                    )}
                  </td>
                  {showDefinitions && (
                    <td>
                      {translationLanguage !== "de" ? (
                        <Tippy
                          content={abbr.explanation[translationLanguage] || "Немає перекладу"}
                          trigger="click"
                          interactive={true}
                          placement="right"
                        >
                          <span className={styles.clickableCell}>{abbr.explanation.de}</span>
                        </Tippy>
                      ) : (
                        abbr.explanation.de
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Модальне вікно збереження */}
        {showSaveModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>Куди зберегти?</h2>
              <p>Оберіть, як зберегти скорочення:</p>
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

        {/* Кнопка налаштувань */}
        <div className={styles.bottomRightSettings}>
          <button className={styles.settingsButton} onClick={() => setIsSettingsModalOpen(true)}>
            <FaCog />
          </button>
        </div>

        {/* Модальне вікно налаштувань */}
        {isSettingsModalOpen && (
          <div className={window.innerWidth > 768 ? styles.popupContainerDesktop : styles.popupContainerMobile}>
            <div className={styles.popup} ref={settingsModalRef}>
              <button className={styles.modalCloseButton} onClick={() => setIsSettingsModalOpen(false)}>
                <AiOutlineClose />
              </button>
              <h2 className={styles.modalTitle}>Налаштування</h2>
              <p className={styles.modalSubtitle}>
                Оберіть регіон та мову (наразі категорії не використовуються):
              </p>
              <div>
                <label className={styles.modalLabel}>Регіон:</label>
                <select value={region} onChange={handleRegionChange} className={styles.modalSelect}>
                  {Object.keys(
                    medicalAbbreviations.reduce((acc, abbr) => {
                      (abbr.regions || []).forEach((r) => {
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
                <select value={translationLanguage} onChange={handleTranslationChange} className={styles.modalSelect}>
                  {localLangOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={styles.modalLabel}>Показувати пояснення:</label>
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

export default AllMedicalAbbreviationsPage;