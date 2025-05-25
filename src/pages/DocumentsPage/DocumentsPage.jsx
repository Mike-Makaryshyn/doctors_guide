// src/pages/DocumentsPage/DocumentsPage.jsx

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useDocumentsProgress } from "../../contexts/DocumentsProgressContext";
import { supabase } from "../../supabaseClient";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./DocumentsPage.module.scss";
import { AiOutlineClose } from "react-icons/ai"; // Імпортуємо іконку хрестика
import { FaPrint } from "react-icons/fa"; // Іконка друку
import { useNavigate } from "react-router-dom";
// Імпортуємо колонки (приклад)
import { columnsFirst } from "../../constants/translation/columnsFirst";
import { columnsSecond } from "../../constants/translation/columnsSecond";
import Tile from "../../components/Table/Tile";
import DocumentTutorial from "../../components/Table/DocumentTutorial";
// Імпортуємо документи
import {
  documentsNonEU,
  documentsEU,
  documentsOptional,
  messages,
  titles,
} from "../../constants/translation/documents";
import { documentsSecond } from "../../constants/translation/documentsSecond";
import { notNeededText } from "../../constants/translation/documents";
import ResponsiveTable from "../../components/Table/ResponsiveTable";
import useIsMobile from "../../hooks/useIsMobile";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Modal from "react-modal"; // Для PDF модального вікна залишаємо
import PDFTable from "../../components/Table/PDFTable"; // Імпорт нового компонента PDFTable
// Імпортуємо оновлений AuthModal
import AuthModal from "../../pages/AuthPage/AuthModal";
import { useSubscription } from "../../contexts/SubscriptionContext";
import SubscriptionModal from "../../pages/AuthPage/SubscriptionModal";

// Ініціалізуємо модальне вікно (для тих компонентів, де використовується react-modal, наприклад PDFTable)
Modal.setAppElement("#root");

const ProgressBarWithTooltip = ({ progress, getMessage }) => {
  const displayProgress = progress === 0 ? 5 : progress; // Мінімальна ширина при 0%

  return (
    <div className={styles.progressContainer} data-tutorial="progressBar">
      <Tippy
        content={getMessage(progress)}
        animation="scale"
        arrow={true}
        theme="custom"
        trigger="click"
        interactive={true}
        hideOnClick={true}
        placement="top"
        flip={true}
        popperOptions={{
          modifiers: [
            {
              name: "preventOverflow",
              options: {
                boundary: "window",
              },
            },
            {
              name: "flip",
              options: {
                fallbackPlacements: ["bottom", "right", "left"],
              },
            },
          ],
        }}
      >
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${displayProgress}%` }}
            data-tutorial="progressFill"
          >
            <span className={styles.progressText}>
              {progress === 0 ? "0%" : `${progress}%`}
            </span>
          </div>
        </div>
      </Tippy>
    </div>
  );
};

const DocumentsPage = () => {
  const {
    selectedLanguage: language = "de", // Встановлюємо мову на німецьку за замовчуванням
    selectedRegion,
    handleChangePage,
    user,
  } = useGetGlobalInfo();

  const navigate = useNavigate(); // Використовуємо useNavigate

  const combinedRef = useRef();
  const mainTableRef = useRef(); // Реф для першої таблиці
  const secondTableRef = useRef(); // Реф для другої таблиці

  const [category, setCategory] = useState(null); // Ініціалізуємо як null
  const [dynamicData, setDynamicData] = useState({
    checkboxes: {},
    progress: 0,
  });
  const [progress, setProgress] = useState(0);
  const [displayedProgress, setDisplayedProgress] = useState(0); // Новий стан
  const isMobile = useIsMobile();

  const [lastSavedData, setLastSavedData] = useState({
    checkboxes: {},
    progress: 0,
  });

  const isInitialLoad = useRef(true); // Додано флаг

  // Таймер для дебаунсингу
  const debounceTimer = useRef(null);

  // Стан для модального вікна авторизації
  const [showAuthModal, setShowAuthModal] = useState(false);

  const { setProgress: setGlobalProgress } = useDocumentsProgress();

  const { status: subscriptionStatus } = useSubscription();
  const isSubscribed = subscriptionStatus === "active";

  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const handleShowSubscriptionModal = () => setShowSubscriptionModal(true);
  const handleCloseSubscriptionModal = () => setShowSubscriptionModal(false);

  // Стан для модального вікна PDF генерації
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

  // Функції для відкриття та закриття модальних вікон
  const handleShowAuthModal = () => setShowAuthModal(true);
  const handleCloseAuthModal = () => setShowAuthModal(false);

  const handleOpenPDFModal = () => setIsPDFModalOpen(true);
  const handleClosePDFModal = () => setIsPDFModalOpen(false);

  // Прикладання функції handleCheckboxChange з useCallback
  const handleCheckboxChange = useCallback((documentId, fieldName) => {
    setDynamicData((prevData) => {
      const updatedCheckboxes = {
        ...prevData.checkboxes,
        [documentId]: {
          ...prevData.checkboxes[documentId],
          [fieldName]: !prevData.checkboxes[documentId]?.[fieldName],
        },
      };

      console.log(
        `Тогл документа ${documentId}, поле: ${fieldName}, новий стан:`,
        updatedCheckboxes[documentId]
      );

      return {
        ...prevData,
        checkboxes: updatedCheckboxes,
      };
    });
  }, []);

  // Завантаження selectionData з Supabase та підписка на зміни (оновлено: auth metadata)
  const fetchSelectionDataFromSupabase = useCallback(() => {
    let isMounted = true;

    supabase.auth.getUser().then(({ data: { user: sessionUser } }) => {
      if (!sessionUser) return;
      const metadata = sessionUser.user_metadata || {};
      const sel = metadata.selectionData || { checkboxes: {}, progress: 0 };
      if (isMounted) setDynamicData(sel);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const metadata = session?.user?.user_metadata || {};
      const sel = metadata.selectionData || { checkboxes: {}, progress: 0 };
      setDynamicData(sel);
    });

    return () => {
      isMounted = false;
      subscription?.unsubscribe();
    };
  }, []);

  // Завантаження educationRegion з Supabase та підписка на зміни (оновлено: auth metadata)
  const fetchEducationRegionFromSupabase = useCallback(() => {
    let isMounted = true;

    supabase.auth.getUser().then(({ data: { user: sessionUser } }) => {
      if (!sessionUser) return;
      const region = sessionUser.user_metadata?.educationRegion;
      if (isMounted) setCategory(region === "EU" || region === "Non-EU" ? region : "Non-EU");
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const region = session?.user?.user_metadata?.educationRegion;
      setCategory(region === "EU" || region === "Non-EU" ? region : "Non-EU");
    });

    return () => {
      isMounted = false;
      subscription?.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribeSelection = fetchSelectionDataFromSupabase();
    const unsubscribeData = fetchEducationRegionFromSupabase();
    return () => {
      if (typeof unsubscribeSelection === "function") {
        unsubscribeSelection();
      }
      if (typeof unsubscribeData === "function") {
        unsubscribeData();
      }
    };
  }, [fetchSelectionDataFromSupabase, fetchEducationRegionFromSupabase]);

  // Рахуємо прогрес
  const calculateProgress = useCallback(
    (checkboxes, language) => {
      let totalCheckboxes = 0;
      let checkedCheckboxes = 0;

      // Отримуємо список документів, включаючи включені опціональні
      const combinedData = [
        ...(category === "Non-EU" ? documentsNonEU : documentsEU),
        ...documentsSecond,
        ...documentsOptional.filter((doc) => {
          const docState = checkboxes[doc.id.toString()];
          return !(docState && docState.hide);
        }),
      ];

      combinedData.forEach((item) => {
        const documentId = item.id.toString();
        const docState = checkboxes[documentId] || {};

        let fieldsToCheck = [
          "is_exist",
          "notary",
          "translation",
          "ready_copies",
          "sent",
          ...(category === "EU" ? [] : ["apostile"]),
        ];

        // Якщо документ має особливі умови (наприклад, два чекбокси), визначте це тут
        const isSpecialDocument = item.id === 17; // ROV-17 має id 17
        if (isSpecialDocument) {
          // Визначаємо окремі поля для ROV-17
          fieldsToCheck = ["is_exist", "sent"]; // Замініть на реальні назви полів для ROV-17
        }

        fieldsToCheck.forEach((field) => {
          let fieldValue = item[field];

          // Якщо fieldValue є об'єктом, витягуємо значення для поточної мови
          if (typeof fieldValue === "object" && fieldValue !== null) {
            fieldValue = fieldValue[language] || fieldValue["de"] || "";
          }

          // Перевіряємо, чи поле має значення "не потрібно" для поточної мови
          const notNeeded =
            notNeededText[language] || notNeededText["de"] || "";

          if (fieldValue !== undefined && fieldValue !== notNeeded) {
            totalCheckboxes++;
            if (docState[field] === true) {
              // Якщо поле потрібно і чекбокс відмічений
              checkedCheckboxes++;
              console.log(`Field ${field} is needed and checked.`);
            } else {
              console.log(`Field ${field} is needed but not checked.`);
            }
          } else if (fieldValue === notNeeded) {
            console.log(
              `Field ${field} is marked as not needed and excluded from progress.`
            );
          }
        });

        // Якщо документ має спеціальні умови для прогресу
        if (isSpecialDocument) {
          // Немає додаткових полів для ROV-17, тому можна залишити порожнім або додати специфічну логіку
        }
      });

      console.log(
        `Total Checkboxes: ${totalCheckboxes}, Checked Checkboxes: ${checkedCheckboxes}`
      );

      return totalCheckboxes === 0
        ? 0
        : Math.round((checkedCheckboxes / totalCheckboxes) * 100);
    },
    [category]
  );

  useEffect(() => {
    if (category) {
      const newProgress = calculateProgress(dynamicData.checkboxes, language);
      setProgress(newProgress);
      setGlobalProgress(newProgress);
    }
  }, [dynamicData.checkboxes, category, language, calculateProgress, setGlobalProgress]);

  // Оновлюємо Supabase user metadata з checkboxes та progress (оновлено)
  const updateFirestoreData = useCallback(
    async (updatedData) => {
      if (!user) return;
      if (JSON.stringify(lastSavedData) === JSON.stringify(updatedData)) return;

      try {
        await supabase.auth.updateUser({ data: { selectionData: updatedData } });
        setLastSavedData(updatedData);
        console.log("Supabase dynamic data updated:", updatedData);
      } catch (error) {
        console.error("Error updating dynamic data in Supabase:", error);
      }
    },
    [user, lastSavedData]
  );

  // Дебаунсинг оновлень до Firebase
  useEffect(() => {
    // Очистити попередній таймер
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Встановити новий таймер
    debounceTimer.current = setTimeout(() => {
      const updatedData = {
        checkboxes: dynamicData.checkboxes,
        progress: progress,
        // educationRegion: category, // Видалено: не записуємо educationRegion назад до Firestore
      };
      updateFirestoreData(updatedData);
    }, 1000); // 1000 мс = 1 секунда

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [dynamicData.checkboxes, progress, updateFirestoreData]);

  // Додати обробник beforeunload для збереження даних при виході
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const hasUnsavedChanges = Object.keys(dynamicData.checkboxes).some(
        (docId) => {
          return (
            JSON.stringify(dynamicData.checkboxes[docId]) !==
            JSON.stringify(lastSavedData.checkboxes[docId])
          );
        }
      );

      if (hasUnsavedChanges) {
        // Очистити таймер та зберегти дані негайно
        if (debounceTimer.current) {
          clearTimeout(debounceTimer.current);
        }

        const updatedData = {
          checkboxes: dynamicData.checkboxes,
          progress: progress,
          // educationRegion: category, // Видалено: не записуємо educationRegion назад до Firestore
        };
        updateFirestoreData(updatedData);

        // Стандартний попереджувальний вміст
        event.preventDefault();
        event.returnValue = ""; // Для деяких браузерів
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [
    dynamicData.checkboxes,
    progress,
    updateFirestoreData,
    category,
    lastSavedData.checkboxes,
  ]);

  // Управління displayedProgress з флагом
  useEffect(() => {
    if (isInitialLoad.current) {
      // Початкове завантаження: анімуємо від 0 до фактичного прогресу
      setDisplayedProgress(0);
      const timer = setTimeout(() => {
        setDisplayedProgress(progress);
        isInitialLoad.current = false; // Встановлюємо флаг після першої анімації
      }, 500); // Затримка 500 мс, можна змінити за потребою

      return () => clearTimeout(timer);
    } else {
      // Після початкового завантаження: анімуємо від попереднього до нового значення
      setDisplayedProgress(progress);
    }
  }, [progress]);

  const getMessage = (progressValue) => {
    let message = "";
    if (progressValue < 20) {
      message = messages[language]?.lessThan20 || "Progress is less than 20%";
    } else if (progressValue < 50) {
      message = messages[language]?.between20And50 || "Progress is between 20% and 50%";
    } else if (progressValue < 80) {
      message = messages[language]?.between50And80 || "Progress is between 50% and 80%";
    } else {
      message = messages[language]?.greaterThan80 || "Progress is greater than 80%";
    }
    console.log(`Progress Value: ${progressValue}, Message: ${message}`);
    return <div>{message}</div>;
  };

  const mainTitle = titles?.main?.[language] || "Main Documents";
  const optionalTitle = titles?.optional?.[language] || "Optional Documents";

  // Фільтрація колонок для опціональної таблиці
  const getOptionalColumns = useCallback(() => {
    // Визначте список колонок, які не повинні відображатися в опціональній таблиці
    const excludedColumns = ["is_exist", "apostile"]; // Додайте інші, якщо потрібно

    return columnsFirst.filter((col) => !excludedColumns.includes(col.name));
  }, [columnsFirst]);

  // Функція для отримання включених опціональних документів
  const includedOptionalDocuments = useMemo(() => {
    return documentsOptional.filter((doc) => {
      return !dynamicData.checkboxes[doc.id.toString()]?.hide;
    });
  }, [documentsOptional, dynamicData.checkboxes]);

  // Функція для отримання виключених опціональних документів
  const excludedOptionalDocuments = useMemo(() => {
    return documentsOptional.filter((doc) => {
      return dynamicData.checkboxes[doc.id.toString()]?.hide;
    });
  }, [documentsOptional, dynamicData.checkboxes]);

  // Обгортка для handleCheckboxChange з перевіркою підписки
  const handleCheckboxChangeWrapper = useCallback(
    (documentId, fieldName) => {
      if (!user) {
        handleShowAuthModal();
      } else if (!isSubscribed) {
        handleShowSubscriptionModal();
      } else {
        handleCheckboxChange(documentId, fieldName);
      }
    },
    [user, handleCheckboxChange, isSubscribed]
  );

  return (
    <MainLayout>
      <DocumentTutorial category={category} />
      <div className="page page1 containerBigger mt-20">
        <div className="page page1 containerBigger mt-20">
          <div className="main_menu__content">
            <div className={styles.table_wrapper}>
              {/* Прогрес-бар */}
              <ProgressBarWithTooltip
                progress={displayedProgress} // Використовуйте displayedProgress
                getMessage={getMessage}
                
              />

              <div ref={combinedRef}>
                {selectedRegion && category ? (
                  <>
                    {/* Основні документи + Включені опціональні документи */}
                    <ResponsiveTable
                      columns={columnsFirst}
                      data={[
                        ...(category === "Non-EU"
                          ? documentsNonEU
                          : documentsEU),
                        ...includedOptionalDocuments, // Додаємо включені опціональні документи
                      ]}
                      setTableData={() => {}}
                      selectedLanguage={language}
                      selectedRegion={selectedRegion}
                      category={category}
                      tableFor="main"
                      disableCheckboxBasedOnName={!user} // Відключаємо чекбокси для неавторизованих
                      checkboxes={dynamicData.checkboxes}
                      handleCheckboxChange={handleCheckboxChangeWrapper}
                      customClass={
                        category === "Non-EU"
                          ? styles.mainTable
                          : styles.euTable
                      }
                      isMobile={isMobile} // Передаємо isMobile
                      title={titles.main[language] || "Main Documents"}
                      data-tutorial="mainTable" // Додаємо атрибут туторіалу
                    />

                    {/* Друга таблиця */}
                    {user && (
                      <ResponsiveTable
                        columns={columnsSecond}
                        data={documentsSecond}
                        setTableData={() => {}}
                        selectedLanguage={language}
                        selectedRegion={selectedRegion}
                        category={category}
                        tableFor="second"
                        disableCheckboxBasedOnName={!user} // Відключаємо чекбокси для неавторизованих
                        checkboxes={dynamicData.checkboxes}
                        handleCheckboxChange={handleCheckboxChangeWrapper}
                        customClass={styles.secondTable}
                        isMobile={isMobile} // Передаємо isMobile
                        data-tutorial="secondTable" // Додаємо атрибут туторіалу
                      />
                    )}

                    {/* Відображення виключених опціональних документів як плиток */}
                    {user && (
                      <div className={styles.tileSection} data-tutorial="optionalDocumentsSection">
                        <h2 className={styles.optionalTitleHeader} data-tutorial="optionalDocumentsTitle">
                          {optionalTitle}
                        </h2>
                        <div className={styles.tileContainer}>
                          {excludedOptionalDocuments.map((row) => (
                            <Tile
                              key={`tile-${row.id}`}
                              row={row}
                              columns={getOptionalColumns()}
                              category={category}
                              selectedLanguage={language}
                              selectedRegion={selectedRegion}
                              tableFor="optional"
                              checkboxes={dynamicData.checkboxes}
                              handleCheckboxChange={handleCheckboxChangeWrapper}
                              disableCheckboxBasedOnName={!user} // Відключаємо чекбокси для неавторизованих
                              isMobile={isMobile}
                              showCheckboxOnMobile={
                                isMobile &&
                                row.optional &&
                                !dynamicData.checkboxes[row.id.toString()]?.hide
                              }
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : !user ? (
                  <>
                    {/* Проста таблиця для неавторизованих користувачів */}
                    <ResponsiveTable
                      columns={columnsFirst}
                      data={documentsNonEU}
                      setTableData={() => {}}
                      selectedLanguage={language}
                      selectedRegion={selectedRegion}
                      category={"Non-EU"}
                      tableFor="main"
                      disableCheckboxBasedOnName={!user}
                      checkboxes={dynamicData.checkboxes}
                      handleCheckboxChange={handleCheckboxChangeWrapper}
                      customClass={styles.mainTable}
                      isMobile={isMobile}
                      title="Подача заяв" // Встановлюємо заголовок
                      data-tutorial="mainTable" // Додаємо атрибут туторіалу
                    />
                  </>
                ) : (
                  <div className={styles.loadingMessage} data-tutorial="loadingMessage">
                    Daten werden geladen...
                  </div>
                )}
              </div>
            </div>

            {/* Приховані або відключені лінки для неавторизованих користувачів */}
            {user && (
              <>
                {/* Додати кнопку друку */}
                <button
                  className={styles.printButton}
                  onClick={() => {
                    if (!isSubscribed) {
                      handleShowSubscriptionModal();
                    } else {
                      handleOpenPDFModal();
                    }
                  }}
                  title="Друкувати PDF"
                  data-tutorial="printButton"
                >
                  <FaPrint />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Заміна вбудованого модального вікна авторизації на компонент AuthModal */}
        <AuthModal isOpen={showAuthModal} onClose={handleCloseAuthModal} />

        {/* Модальне вікно для генерації PDF */}
        {isPDFModalOpen && (
          <PDFTable
            onClose={handleClosePDFModal}
            language={language}
            category={category}
            checkboxes={dynamicData.checkboxes}
            columnsFirst={columnsFirst}
            columnsSecond={columnsSecond}
            documents={{
              mainEU: documentsEU,
              mainNonEU: documentsNonEU,
              second: documentsSecond,
              optional: documentsOptional,
            }}
            data-tutorial="pdfModal" // Додаємо атрибут туторіалу
          />
        )}
        <SubscriptionModal
          isOpen={showSubscriptionModal}
          onClose={handleCloseSubscriptionModal}
        />
      </div>
    </MainLayout>
  );
};

DocumentsPage.propTypes = {
  // Якщо DocumentsPage має пропси, додайте їх тут
};

export default DocumentsPage;