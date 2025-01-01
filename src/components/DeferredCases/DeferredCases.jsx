// src/components/DeferredCases/DeferredCases.jsx

import React, { useState, useEffect, useContext } from "react";
import { DataSourceContext } from "../../contexts/DataSourceContext";
import { db, auth } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import DeferredCasesCard from "./DeferredCasesCard.jsx"; // Імпорт нового компонента
import styles from "./DeferredCases.module.scss"; // Імпорт стилів через CSS Modules

const DeferredCases = () => {
  const { dataSources } = useContext(DataSourceContext);
  const [deferredCases, setDeferredCases] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const fetchDeferredCases = async () => {
      if (loading) return;
      if (!user) {
        toast.error("Користувач не автентифікований.");
        return;
      }

      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();

          // Отримання всіх відкладених випадків для всіх регіонів
          const allDeferredCases = Object.keys(dataSources)
            .filter((region) => dataSources[region].type === "local") // Виключаємо Firebase Source та інші типи, якщо є
            .reduce((acc, region) => {
              const deferred = userData[`deferredCases_${region}`] || [];
              return acc.concat(deferred.map((caseId) => ({ caseId, region })));
            }, []);

          setDeferredCases(allDeferredCases);
        } else {
          toast.error("Дані користувача не знайдено.");
        }
      } catch (err) {
        console.error("Error fetching deferred cases:", err);
        toast.error("Сталася помилка при завантаженні відкладених випадків.");
      }
    };

    fetchDeferredCases();
  }, [user, loading, dataSources]);

  if (loading) return <p className={styles.loading}>Завантаження...</p>;
  if (error) return <p className={styles.error}>Сталася помилка: {error.message}</p>;

  return (
    <div className={styles.deferredCasesWindow}>
      <h3 className={styles.title}>Відкладені Випадки</h3>
      {deferredCases.length === 0 ? (
        <p className={styles.noCases}>У вас немає відкладених випадків.</p>
      ) : (
        <div className={styles.casesList}>
          {deferredCases.map(({ caseId, region }) => {
            const caseData = dataSources[region]?.files.find(
              (file) => String(file.id) === String(caseId)
            );
            return (
              <DeferredCasesCard
                key={`${region}-${caseId}`} // Унікальний ключ
                caseId={caseId}
                caseData={caseData}
                regionId={region} // Передача правильного regionId
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DeferredCases;