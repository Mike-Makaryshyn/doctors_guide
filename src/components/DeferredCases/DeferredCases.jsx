// src/components/DeferredCases/DeferredCases.jsx

import React, { useState, useEffect, useContext } from "react";
import { DataSourceContext } from "../../contexts/DataSourceContext";
import { db, auth } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import DeferredCasesCard from "./DeferredCasesCard.jsx"; // Імпорт нового компонента
import "./DeferredCases.scss"; // Стилі для компонента

const DeferredCases = () => {
  const { dataSources } = useContext(DataSourceContext);
  const [deferredCases, setDeferredCases] = useState([]);
  const [localRegion, setLocalRegion] = useState("");
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
          // Вибір регіону користувача
          const userRegion = Object.keys(dataSources).find((region) =>
            dataSources[region].files.some(
              (file) => String(file.id) === userData[`selectedCase_${region}`]
            )
          );
          setLocalRegion(userRegion || "");

          // Отримання відкладених випадків для регіону
          const deferred = userData[`deferredCases_${userRegion}`] || [];
          setDeferredCases(deferred);
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

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Сталася помилка: {error.message}</p>;

  return (
    <div className="deferred-cases">
      <h3>Відкладені Випадки</h3>
      {deferredCases.length === 0 ? (
        <p>У вас немає відкладених випадків.</p>
      ) : (
        <div className="deferred-cases-list">
          {deferredCases.map((caseId) => {
            const caseData = dataSources[localRegion]?.files.find(
              (file) => String(file.id) === caseId
            );
            return (
              <DeferredCasesCard
                key={caseId}
                caseId={caseId}
                caseData={caseData}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DeferredCases;