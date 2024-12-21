// LanguageSkillsSection.jsx
import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types"; // Імпорт PropTypes
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import resumeFormTexts from "../../constants/translation/ResumeForm"; // Імпорт підказок
import styles from "./LanguageSkillsSection.module.css";
import { db, auth } from "../../firebase"; // Імпорт Firebase конфігурації
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore"; // Додано deleteDoc
import { toast } from "react-toastify"; // Імпорт react-toastify для сповіщень
import "react-toastify/dist/ReactToastify.css";
import debounce from "lodash.debounce"; // Імпорт debounce

// Функція для перевірки валідності мови (можна додати власну логіку)
const validateLanguage = (language) => {
  if (!language.trim()) {
    throw new Error("Мова не може бути порожньою.");
  }
  // Додайте додаткову валідацію за потребою
};

// Функція для перевірки валідності рівня (можна додати власну логіку)
const validateLevel = (level) => {
  if (!level.trim()) {
    throw new Error("Рівень не може бути порожнім.");
  }
  // Додайте додаткову валідацію за потребою
};

// Використання forwardRef для доступу до методів з батьківського компонента
const LanguageSkillsSection = forwardRef(({ title = "Language Skills" }, ref) => {
  const [entries, setEntries] = useState([{ language: "", level: "" }]);
  const [languageSuggestionsState, setLanguageSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const [levelSuggestionsState, setLevelSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });

  const languageSuggestionsRef = useRef(null);
  const levelSuggestionsRef = useRef(null);

  const languageSuggestionsList = resumeFormTexts.languageSkillsSuggestions;
  const levelSuggestionsList = resumeFormTexts.levelSuggestions;

  const [isLoading, setIsLoading] = useState(false); // Стан для індикатора завантаження

  // Функція для отримання даних з Firestore
  const fetchLanguagesData = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.error("Користувач не автентифікований");
      toast.error("Користувач не автентифікований");
      return;
    }

    try {
      const languagesDocRef = doc(db, "users", user.uid, "resume", "languages");
      const languagesDoc = await getDoc(languagesDocRef);
      if (languagesDoc.exists()) {
        const data = languagesDoc.data();
        console.log("Отримані дані Language Skills:", data);
        if (data.languages && Array.isArray(data.languages)) {
          setEntries(data.languages);
        }
      } else {
        console.log("Документ Language Skills не знайдено");
      }
    } catch (error) {
      console.error("Помилка отримання даних Language Skills:", error);
      toast.error("Помилка отримання даних Language Skills");
    }
  };

  // Функція для збереження даних у Firestore з дебаунсом
  const saveLanguagesData = async () => {
    setIsLoading(true); // Початок завантаження
    const user = auth.currentUser;
    if (!user) {
      console.error("Користувач не автентифікований");
      toast.error("Користувач не автентифікований");
      setIsLoading(false);
      return;
    }

    try {
      // Фільтруємо записи, де обидва поля порожні
      const nonEmptyEntries = entries.filter(
        (entry) => entry.language.trim() !== "" || entry.level.trim() !== ""
      );

      if (nonEmptyEntries.length === 0) {
        // Якщо немає записів, видаляємо документ
        const languagesDocRef = doc(db, "users", user.uid, "resume", "languages");
        await deleteDoc(languagesDocRef);
        console.log("Документ Language Skills видалено успішно");
        // Якщо не хочете відображати повідомлення, видаліть наступний рядок:
        // toast.success("Документ Language Skills видалено успішно!");
      } else {
        // Валідація лише непорожніх записів
        nonEmptyEntries.forEach((entry, index) => {
          if (entry.language.trim() !== "") validateLanguage(entry.language);
          if (entry.level.trim() !== "") validateLevel(entry.level);
        });

        const languagesDocRef = doc(db, "users", user.uid, "resume", "languages");
        await setDoc(languagesDocRef, { languages: nonEmptyEntries }, { merge: true });
        console.log("Дані Language Skills успішно збережено");
        // Якщо не хочете відображати повідомлення, видаліть наступний рядок:
        // toast.success("Дані Language Skills успішно збережено!");
      }
    } catch (error) {
      console.error("Помилка збереження даних Language Skills:", error);
      toast.error(`Помилка збереження даних Language Skills: ${error.message}`);
    } finally {
      setIsLoading(false); // Завершення завантаження
    }
  };

  // Дебаунс для збереження даних
  const debouncedSave = useRef(
    debounce(() => {
      saveLanguagesData();
    }, 500)
  ).current;

  // Надання методу saveLanguagesData зовні через ref
  useImperativeHandle(ref, () => ({
    saveData: saveLanguagesData,
  }));

  // Завантаження даних при монтуванні компонента
  useEffect(() => {
    fetchLanguagesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageSuggestionsRef.current &&
        !languageSuggestionsRef.current.contains(event.target) &&
        levelSuggestionsRef.current &&
        !levelSuggestionsRef.current.contains(event.target)
      ) {
        setLanguageSuggestionsState({
          activeRow: null,
          filteredSuggestions: [],
        });
        setLevelSuggestionsState({
          activeRow: null,
          filteredSuggestions: [],
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const addNewRow = () => {
    setEntries([...entries, { language: "", level: "" }]);
  };

  const removeRow = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  const handleInputChange = (index, field, value) => {
    const updatedEntries = [...entries];
    updatedEntries[index][field] = value;
    setEntries(updatedEntries);
  };

  const handleSuggestionSelect = (index, field, suggestion) => {
    const updatedEntries = [...entries];
    updatedEntries[index][field] = suggestion; // Оновлення відповідного поля
    setEntries(updatedEntries);

    // Скидання підказок
    if (field === "language") {
      setLanguageSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    } else if (field === "level") {
      setLevelSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    }
  };

  const handleInfoClick = (index, field) => {
    const isOpen =
      (field === "language" && languageSuggestionsState.activeRow === index) ||
      (field === "level" && levelSuggestionsState.activeRow === index);

    if (field === "language") {
      setLanguageSuggestionsState({
        activeRow: isOpen ? null : index,
        filteredSuggestions: isOpen
          ? []
          : languageSuggestionsList.filter((suggestion) =>
              suggestion
                .toLowerCase()
                .includes(entries[index]?.language?.toLowerCase() || "")
            ),
      });
    } else if (field === "level") {
      setLevelSuggestionsState({
        activeRow: isOpen ? null : index,
        filteredSuggestions: isOpen
          ? []
          : levelSuggestionsList.filter((suggestion) =>
              suggestion
                .toLowerCase()
                .includes(entries[index]?.level?.toLowerCase() || "")
            ),
      });
    }
  };

  return (
    <section className={styles.languageSkillsSection}>
      <h3 className={styles.subheader}>{title}</h3>
      <div className={styles.entriesContainer}>
        {entries.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле для мови */}
            <div className={styles.descriptionCell}>
              <Input
                placeholder="Enter language"
                value={entry.language || ""}
                onChange={(e) => handleInputChange(index, "language", e.target.value)}
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Show suggestions"
                      onClick={() => handleInfoClick(index, "language")}
                      size="small"
                      className={styles.infoButton}
                    >
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                }
                className={styles.inputField}
                onBlur={debouncedSave} // Збереження при покиданні поля з дебаунсом
              />
              <div
                className={`${styles.dropdown} ${
                  languageSuggestionsState.activeRow === index ? styles.open : ""
                }`}
                ref={languageSuggestionsRef}
              >
                <ul className={styles.dropdown__items}>
                  {languageSuggestionsState.filteredSuggestions.map((suggestion, i) => (
                    <li
                      key={i}
                      onClick={() => handleSuggestionSelect(index, "language", suggestion)}
                      className={styles.dropdown__item}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Поле для рівня */}
            <div className={styles.descriptionCell}>
              <Input
                placeholder="Enter level"
                value={entry.level || ""}
                onChange={(e) => handleInputChange(index, "level", e.target.value)}
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Show suggestions"
                      onClick={() => handleInfoClick(index, "level")}
                      size="small"
                      className={styles.infoButton}
                    >
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                }
                className={styles.inputField}
                onBlur={debouncedSave} // Збереження при покиданні поля з дебаунсом
              />
              <div
                className={`${styles.dropdown} ${
                  levelSuggestionsState.activeRow === index ? styles.open : ""
                }`}
                ref={levelSuggestionsRef}
              >
                <ul className={styles.dropdown__items}>
                  {levelSuggestionsState.filteredSuggestions.map((suggestion, i) => (
                    <li
                      key={i}
                      onClick={() => handleSuggestionSelect(index, "level", suggestion)}
                      className={styles.dropdown__item}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Кнопка видалення */}
            <div className={styles.buttonContainer}>
              <IconButton onClick={() => removeRow(index)}>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопка "Додати" по центру під усіма рядками */}
      <div className={styles.addButtonContainer}>
        <IconButton onClick={addNewRow}>
          <AddIcon />
        </IconButton>
      </div>

      {/* Відображення індикатора завантаження */}
      {isLoading && <div className={styles.loading}>Завантаження...</div>}
    </section>
  );
});

LanguageSkillsSection.propTypes = {
  title: PropTypes.string,
  onNext: PropTypes.func, // Пропс для функції переходу до наступної секції, якщо потрібен
};

export default LanguageSkillsSection;