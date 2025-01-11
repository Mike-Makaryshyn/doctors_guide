// src/components/SavedCasesWidget.jsx

import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Додано для повідомлень
import styles from "./SavedCasesWidget.module.scss";

const SavedCasesWidget = () => {
  const [myCases, setMyCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyCases = async () => {
      setLoading(true);
      const user = auth.currentUser;
      if (!user) {
        setLoading(false);
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
        console.error("Error fetching user cases:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyCases();
  }, []);

  const handleEdit = (myCase) => {
    navigate(`/edit-case`, { state: { myCase } });
  };

  const handleDelete = async (myCase) => {
    const confirmDelete = window.confirm(
      `Ви дійсно хочете видалити випадок "${myCase.fullName}"?`
    );
    if (!confirmDelete) return;

    try {
      const regionDocRef = doc(db, "cases", myCase.region);
      const regionDocSnap = await getDoc(regionDocRef);
      if (!regionDocSnap.exists()) {
        throw new Error("Регіон не знайдено.");
      }

      const regionData = regionDocSnap.data();
      if (!regionData.cases || !Array.isArray(regionData.cases)) {
        throw new Error("Невірна структура даних.");
      }

      // Видалення випадку з масиву
      const updatedCases = regionData.cases.filter(
        (caseItem) => caseItem.id !== myCase.id
      );

      // Оновлення документа Firestore
      await updateDoc(regionDocRef, {
        cases: updatedCases,
      });

      // Оновлення стану компонента
      setMyCases((prevCases) =>
        prevCases.filter((caseItem) => caseItem.id !== myCase.id)
      );

      toast.success("Випадок успішно видалено!");
    } catch (error) {
      console.error("Error deleting case:", error);
      toast.error(error.message || "Помилка при видаленні випадку.");
    }
  };

  if (loading) {
    return <div className={styles.loading}>Завантаження...</div>;
  }

  return (
    <div className={styles.widgetContainer}>
      <h2>Додані випадки</h2>
      {myCases.length === 0 ? (
        <p>Немає збережених випадків.</p>
      ) : (
        <div className={styles.casesGrid}>
          {myCases.slice(0, 4).map((myCase) => ( // Відображаємо максимум 4 випадки
            <div key={myCase.id} className={styles.caseTile}>
              <h3>{myCase.fullName}</h3> {/* Відображаємо FullName */}
              <div className={styles.tileActions}>
                <button
                  className={styles.editButton}
                  onClick={() => handleEdit(myCase)}
                  title="Редагувати"
                >
                  ⚙
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(myCase)}
                  title="Видалити"
                >
                  ✖
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedCasesWidget;