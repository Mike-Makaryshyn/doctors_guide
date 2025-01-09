import React, { useState, useEffect, useContext } from "react";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { DataSourceContext } from "../../contexts/DataSourceContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import useRegionData from "../../hooks/useRegionData"; // Кастомний хук для роботи з регіонами
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo"; // Для отримання глобального регіону
import styles from "./OrganizationalDataSection.module.scss"; 

const regionDisplayNames = {
  Thueringen: "Тюрінгія",
  Bayern: "Баварія",
  "Baden-Württemberg": "Баден-Вюртемберг",
  Berlin: "Берлін",
  Brandenburg: "Бранденбург",
  Hamburg: "Гамбург",
  Hessen: "Гессен",
  Saarland: "Саар",
  "Schleswig-Holstein": "Шлезвіг-Гольштейн",
  "Nordrhein-Westfalen": "Північний Рейн-Вестфалія",
};

const OrganizationalDataSection = React.forwardRef((_, ref) => {
  const { dataSources } = useContext(DataSourceContext);
  const [data, setData] = useState({
    examLocation: "",
    examinerNames: "",
    examDate: "",
    examResult: "",
    subject: "",
  });
  const [user] = useAuthState(auth);

  // Отримуємо глобальний регіон
  const { selectedRegion: globalSelectedRegion } = useGetGlobalInfo();
  
  // Використовуємо кастомний хук для роботи з регіонами
  const { localRegion, setLocalRegion } = useRegionData(globalSelectedRegion || "", "local");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const fetchOrganizationalData = async () => {
    console.log("Fetching organizational data for region:", localRegion);
    if (!localRegion || !user) return;

    const docRef = doc(db, "users", user.uid, "cases", "organizationalData");
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      const fetchedData = snapshot.data();
      setData(fetchedData);
    }
  };

  const saveData = async () => {
    if (!localRegion || !user) {
      console.warn("Регіон не обрано або користувач не автентифікований. Дані не збережені.");
      return;
    }

    const docRef = doc(db, "users", user.uid, "cases", "organizationalData");
    const { examLocation, examinerNames, examDate, examResult, subject } = data;
    const isAnyFieldFilled = [
      examLocation, examinerNames, examDate, examResult, subject,
    ].some((val) => val.trim() !== "");

    if (isAnyFieldFilled) {
      await setDoc(docRef, { ...data, region: localRegion }, { merge: true });
      console.log("Організаційні дані успішно збережено.");
    } else {
      await deleteDoc(docRef);
      console.log("Організаційні дані видалено через відсутність заповнених полів.");
    }
  };

  useEffect(() => {
    fetchOrganizationalData();
  }, [localRegion, user]);

  // Ініціалізація локального регіону з глобального
  useEffect(() => {
    console.log("Глобальний регіон:", globalSelectedRegion);
    console.log("Локальний регіон перед оновленням:", localRegion);
    if (!localRegion && globalSelectedRegion) {
      setLocalRegion(globalSelectedRegion, false);
      console.log("Локальний регіон встановлено з глобального:", globalSelectedRegion);
    }
  }, [localRegion, globalSelectedRegion, setLocalRegion]);

  React.useImperativeHandle(ref, () => ({ saveData }));

  return (
    <div className={styles.organizationalDataSection}>
      <h2 className={styles.subheader}>Організаційні дані</h2>

      {/* Місце проведення екзамену */}
      <div className={styles.entryRow}>
        <label className={styles.label}>Місце проведення екзамену:</label>
        <select
          name="examLocation"
          value={data.examLocation}
          onChange={handleChange}
          className={styles.selectField}
        >
          <option value="">Оберіть місце</option>
          {Object.keys(dataSources).map((region) => (
            <option key={region} value={region}>
              {regionDisplayNames[region] || region}
            </option>
          ))}
        </select>
      </div>

      {/* Вибір регіону */}
      <div className={styles.entryRow}>
        <label className={styles.label}>Вибір регіону:</label>
        <select
          value={localRegion}
          onChange={(e) => setLocalRegion(e.target.value, false)}
          className={styles.selectField}
        >
          <option value="">-- Оберіть регіон --</option>
          {Object.keys(dataSources).map((region) => (
            <option key={region} value={region}>
              {regionDisplayNames[region] || region}
            </option>
          ))}
        </select>
      </div>

      {/* Інші поля... */}
      <div className={styles.entryRow}>
        <label className={styles.label}>Імена екзаменаторів:</label>
        <input
          type="text"
          name="examinerNames"
          placeholder="Імена екзаменаторів через кому"
          value={data.examinerNames}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>

      <div className={styles.entryRow}>
        <label className={styles.label}>Дата екзамену:</label>
        <input
          type="date"
          name="examDate"
          value={data.examDate}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>

      <div className={styles.entryRow}>
        <label className={styles.label}>Результат екзамену:</label>
        <select
          name="examResult"
          value={data.examResult}
          onChange={handleChange}
          className={styles.selectField}
        >
          <option value="">Оберіть результат</option>
          <option value="Успішно">Успішно</option>
          <option value="Неуспішно">Неуспішно</option>
        </select>
      </div>

      <div className={styles.entryRow}>
        <label className={styles.label}>Тема:</label>
        <input
          type="text"
          name="subject"
          placeholder="Введіть тему"
          value={data.subject}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.saveButton} onClick={saveData}>
          Зберегти
        </button>
      </div>
    </div>
  );
});

export default OrganizationalDataSection;