// src/pages/MyCasesPage/MyCasesPage.jsx

import React, { useEffect, useState, useContext, useCallback } from "react";
import { db, auth } from "../../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./MyCasesPage.module.scss";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { FaCog, FaTimes, FaPlus } from "react-icons/fa"; // Іконка "+" від react-icons
import { DataSourceContext } from "../../contexts/DataSourceContext"; // Імпорт контексту

const MyCasesPage = () => {
  const [myCases, setMyCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { dataSources, fetchFirebaseCases } = useContext(DataSourceContext); // Використання контексту

  // Функція для завантаження випадків користувача
  const fetchMyCases = useCallback(async () => {
    setLoading(true);
    const user = auth.currentUser;
    if (!user) {
      setLoading(false);
      toast.error("Користувач не автентифікований.");
      return;
    }

    try {
      const casesCollection = collection(db, "cases");
      const casesSnapshot = await getDocs(casesCollection);
      const userCases = [];

      casesSnapshot.forEach((docSnap) => {
        const region = docSnap.id;
        const data = docSnap.data();
        if (data.cases && Array.isArray(data.cases)) {
          data.cases.forEach((caseItem, index) => {
            if (caseItem.authorId === user.uid) {
              userCases.push({
                ...caseItem,
                region,
                caseIndex: index,
              });
            }
          });
        }
      });

      setMyCases(userCases);
    } catch (error) {
      console.error("Помилка при завантаженні випадків користувача:", error);
      toast.error("Помилка при завантаженні ваших випадків.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMyCases();
  }, [fetchMyCases]);

  // Функція для додавання нового випадку
  const handleAddNewCase = () => {
    navigate("/data-collection"); // Перенаправлення до DataCollectionPage
  };

  // Функція для обробки кліку на випадок
  const handleCaseClick = async (caseId, sourceType = "firebase", region) => {
    try {
      console.log(`Вибраний випадок: ${caseId}, Регіон: ${region}`); // Лог для перевірки

      // Перевірка наявності випадку у dataSources
      const caseExists =
        dataSources[region]?.sources?.[sourceType]?.some(
          (myCase) => String(myCase.id) === String(caseId)
        );

      if (!caseExists) {
        toast.info(`Завантаження випадків для регіону ${region}...`);

        // Завантаження випадків для обраного регіону
        await fetchFirebaseCases(region);

        // Перевірка, чи випадок тепер існує
        const updatedCaseExists =
          dataSources[region]?.sources?.[sourceType]?.some(
            (myCase) => String(myCase.id) === String(caseId)
          );

        if (!updatedCaseExists) {
          console.error("Випадок все ще не завантажено.");
          toast.error("Помилка при завантаженні даних випадку.");
          return;
        }
      }

      // Перехід до FSP Formular Page
      const targetPath = `/information-sources/${sourceType}/${caseId}`;
      navigate(targetPath);
    } catch (error) {
      console.error("Помилка при переході до сторінки випадку:", error);
      toast.error("Помилка при завантаженні даних випадку.");
    }
  };

  // Функція для редагування випадку
  const handleEdit = (myCase) => {
    navigate(`/edit-case`, { state: { myCase } });
  };

  // Функція для видалення випадку
  const handleDelete = async (myCase) => {
    const confirmDelete = window.confirm(
      `Ви дійсно хочете видалити випадок "${myCase.fullName}"?`
    );
    if (!confirmDelete) return;

    try {
      const docRef = doc(db, "cases", myCase.region);
      const casesSnapshot = await getDocs(collection(db, "cases"));
      const regionDoc = casesSnapshot.docs.find((doc) => doc.id === myCase.region);

      if (regionDoc) {
        const regionData = regionDoc.data();
        if (regionData.cases && Array.isArray(regionData.cases)) {
          const updatedCases = regionData.cases.filter(
            (caseItem) => String(caseItem.id) !== String(myCase.id)
          );

          // Оновлення документу в Firestore
          await updateDoc(docRef, { cases: updatedCases });

          // Оновлення локального стану
          setMyCases((prevCases) =>
            prevCases.filter(
              (caseItem) => String(caseItem.id) !== String(myCase.id)
            )
          );

          toast.success("Випадок успішно видалено.");
        }
      } else {
        console.warn(`Регіон ${myCase.region} не знайдено.`);
        toast.error("Помилка при видаленні випадку.");
      }
    } catch (error) {
      console.error("Помилка при видаленні випадку:", error);
      toast.error("Помилка при видаленні випадку.");
    }
  };

  if (loading) {
    return <div className={styles.loading}>Завантаження...</div>;
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Мої Випадки</h1>
        <div className={styles.tilesContainer}>
          {myCases.length > 0 ? (
            myCases.map((myCase) => (
              <div
                key={myCase.id}
                className={styles.tile}
                onClick={() => handleCaseClick(myCase.id, "firebase", myCase.region)} // Передача параметрів
              >
                <div className={styles.actions}>
                  <button
                    className={`${styles.button} ${styles.editButton}`}
                    onClick={(e) => {
                      e.stopPropagation(); // Запобігаємо виклику handleCaseClick
                      handleEdit(myCase);
                    }}
                    aria-label="Редагувати випадок"
                  >
                    <FaCog />
                  </button>
                  <button
                    className={`${styles.button} ${styles.deleteButton}`}
                    onClick={(e) => {
                      e.stopPropagation(); // Запобігаємо виклику handleCaseClick
                      handleDelete(myCase);
                    }}
                    aria-label="Видалити випадок"
                  >
                    <FaTimes />
                  </button>
                </div>
                <h3 className={styles.tileHeader}>{myCase.fullName}</h3>
                <p className={styles.tileContent}>Тема: {myCase.theme}</p>
                <p className={styles.tileContent}>Регіон: {myCase.region}</p>
              </div>
            ))
          ) : (
            <p>Випадки відсутні.</p>
          )}

          {/* Прозора плитка з "+" */}
          <div
            className={styles.addTile}
            onClick={handleAddNewCase}
            aria-label="Додати новий випадок"
          >
            <FaPlus className={styles.plusIcon} />
          </div>
        </div>
        <ToastContainer />
      </div>
    </MainLayout>
  );
};

export default MyCasesPage;