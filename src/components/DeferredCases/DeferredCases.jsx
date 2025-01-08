// src/components/DeferredCases/DeferredCases.jsx

import React, { useState, useEffect, useContext } from "react";
import { DataSourceContext } from "../../contexts/DataSourceContext";
import { db, auth } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import DeferredCasesCard from "./DeferredCasesCard.jsx";
import styles from "./DeferredCases.module.scss";

const DeferredCases = () => {
  const { dataSources, fetchFirebaseCases } = useContext(DataSourceContext);
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
            .filter((region) => dataSources[region].type === "dynamic")
            .reduce((acc, region) => {
              const deferred = userData[`deferredCases_${region}`] || [];
              // Переконайтесь, що всі caseId є рядками
              const processedDeferred = deferred.map((caseId) => ({
                caseId: String(caseId),
                region,
              }));
              return acc.concat(processedDeferred);
            }, []);

          setDeferredCases(allDeferredCases);

          // Завантажуємо Firebase дані для регіонів, які мають відкладені випадки
          const regionsToFetch = [...new Set(allDeferredCases.map((item) => item.region))];
          regionsToFetch.forEach((region) => {
            if (dataSources[region]?.sources?.firebase.length === 0) {
              fetchFirebaseCases(region);
            }
          });
        } else {
          toast.error("Дані користувача не знайдено.");
        }
      } catch (err) {
        console.error("Error fetching deferred cases:", err);
        toast.error("Сталася помилка при завантаженні відкладених випадків.");
      }
    };

    fetchDeferredCases();
  }, [user, loading, dataSources, fetchFirebaseCases]);

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
              (file) => String(file.id) === caseId
            );
            if (!caseData) {
              console.warn(`Випадок з ID ${caseId} у регіоні ${region} не знайдено у dataSources.`);
              return null; // Або показати повідомлення про помилку
            }
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