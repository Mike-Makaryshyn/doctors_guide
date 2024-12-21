// HeaderSection.jsx
import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import styles from "./HeaderSection.module.css"; // Імпорт CSS модуля
import { db, auth } from "../../firebase"; // Імпорт Firebase конфігурації
import { doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
// Видалено: import { toast } from "react-toastify"; // Імпорт react-toastify для сповіщень
// Видалено: import "react-toastify/dist/ReactToastify.css";

const HeaderSection = forwardRef((props, ref) => { // Використання forwardRef
  const [header, setHeader] = useState({
    vorname: "",
    nachname: "",
    geburtsdatum: "",
    nationalitaet: "",
    adresse: "",
    email: "",
    handynummer: "",
    fachrichtung: "",
  });

  const [userId, setUserId] = useState(null); // Стан для зберігання UID користувача

  // Слідкуємо за станом автентифікації
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        fetchHeaderData(user.uid); // Завантажуємо дані при вході
      } else {
        setUserId(null);
      }
    });

    // Очистка підписки при розмонтуванні компонента
    return () => unsubscribe();
  }, []);

  // Функція для отримання даних з Firestore
  const fetchHeaderData = async (uid) => {
    try {
      const headerDocRef = doc(db, "users", uid, "resume", "header");
      const headerDoc = await getDoc(headerDocRef);
      if (headerDoc.exists()) {
        setHeader(headerDoc.data());
      }
    } catch (error) {
      console.error("Помилка отримання даних заголовка:", error);
      // Якщо ви все ж хочете відображати помилки, можна використовувати інший механізм
      // Наприклад, створити локальний стан для повідомлень про помилки
    }
  };

  // Функція для збереження даних у Firestore
  const saveHeaderData = async () => {
    if (!userId) {
      console.error("Користувач не автентифікований");
      // Можливо, ви хочете показати повідомлення про помилку іншим способом
      return;
    }

    try {
      const headerDocRef = doc(db, "users", userId, "resume", "header");
      await setDoc(headerDocRef, header, { merge: true }); // Використовуємо merge для оновлення полів
      console.log("Дані заголовка успішно збережено");
      // Можливо, ви хочете показати повідомлення про успіх іншим способом
    } catch (error) {
      console.error("Помилка збереження даних заголовка:", error);
      // Можливо, ви хочете показати повідомлення про помилку іншим способом
    }
  };

  // Використання useImperativeHandle для надання функції saveHeaderData зовні
  useImperativeHandle(ref, () => ({
    saveData: saveHeaderData,
  }));

  // Функція для обробки зміни в полях форми
  const handleHeaderChange = (field, value) => {
    const updatedHeader = {
      ...header,
      [field]: value,
    };
    setHeader(updatedHeader);
  };

  // Функція для обробки події onBlur (коли користувач покидає поле вводу)
  const handleBlur = () => {
    saveHeaderData();
  };

  // Функція для обробки переходу до наступної секції
  const handleNext = () => {
    // Перевірка, чи всі поля заповнені (можна покращити за потребою)
    const allFieldsFilled = Object.values(header).every((value) => value.trim() !== "");
    if (allFieldsFilled) {
      saveHeaderData().then(() => {
        if (props.onNext) props.onNext(); // Викликаємо функцію переходу, якщо вона передана через пропс
      });
    } else {
      // Можливо, ви хочете показати повідомлення про помилку іншим способом
      console.error("Будь ласка, заповніть всі поля перед переходом.");
    }
  };

  return (
    <section className={styles.headerSection}>
      <h3 className={styles.subheader}>Kopfzeile</h3>
      <form className={styles.entriesContainer}>
        {/* Ряд 1: Vorname, Nachname */}
        <div className={styles.entryRow}>
          <div className={styles.descriptionCell}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Vorname"
              value={header.vorname}
              onChange={(e) => handleHeaderChange("vorname", e.target.value)}
              onBlur={handleBlur}
            />
          </div>
          <div className={styles.descriptionCell}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Nachname"
              value={header.nachname}
              onChange={(e) => handleHeaderChange("nachname", e.target.value)}
              onBlur={handleBlur}
            />
          </div>
        </div>

        {/* Ряд 2: Geburtsdatum, Nationalität */}
        <div className={styles.entryRow}>
          <div className={styles.descriptionCell}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Geburtsdatum"
              value={header.geburtsdatum}
              onChange={(e) => handleHeaderChange("geburtsdatum", e.target.value)}
              onBlur={handleBlur}
            />
          </div>
          <div className={styles.descriptionCell}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Nationalität"
              value={header.nationalitaet}
              onChange={(e) => handleHeaderChange("nationalitaet", e.target.value)}
              onBlur={handleBlur}
            />
          </div>
        </div>

        {/* Ряд 3: Adresse */}
        <div className={styles.entryRow}>
          <div className={styles.fullWidthCell}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Adresse"
              value={header.adresse}
              onChange={(e) => handleHeaderChange("adresse", e.target.value)}
              onBlur={handleBlur}
            />
          </div>
        </div>

        {/* Ряд 4: Email, Handynummer */}
        <div className={styles.entryRow}>
          <div className={styles.descriptionCell}>
            <input
              type="email"
              className={styles.inputField}
              placeholder="Email"
              value={header.email}
              onChange={(e) => handleHeaderChange("email", e.target.value)}
              onBlur={handleBlur}
            />
          </div>
          <div className={styles.descriptionCell}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Handynummer"
              value={header.handynummer}
              onChange={(e) => handleHeaderChange("handynummer", e.target.value)}
              onBlur={handleBlur}
            />
          </div>
        </div>

        {/* Ряд 5: Fachrichtung */}
        <div className={styles.entryRow}>
          <div className={styles.fullWidthCell}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Fachrichtung"
              value={header.fachrichtung}
              onChange={(e) => handleHeaderChange("fachrichtung", e.target.value)}
              onBlur={handleBlur}
            />
          </div>
        </div>

        {/* Кнопка "Далі" для переходу до наступної секції */}
        <button type="button" onClick={handleNext}>
          Далі
        </button>
      </form>
    </section>
  );
});

HeaderSection.propTypes = {
  onNext: PropTypes.func, // Пропс для функції переходу до наступної секції
};

export default HeaderSection;