// TechnicalSkillsSection.jsx
import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types"; // Імпорт PropTypes
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import resumeFormTexts from "../../constants/translation/ResumeForm"; // Імпорт підказок
import styles from "./TechnicalSkillsSection.module.css";
import { db, auth } from "../../firebase"; // Імпорт Firebase конфігурації
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore"; // Додано deleteDoc
import { toast } from "react-toastify"; // Імпорт react-toastify для сповіщень
import "react-toastify/dist/ReactToastify.css";

// Функція для перевірки валідності навички (можна додати власну логіку)
const validateSkill = (skill) => {
  if (!skill.trim()) {
    throw new Error("Навичка не може бути порожньою.");
  }
  // Додайте додаткову валідацію за потребою
};

// Функція для перевірки валідності рівня (можна додати власну логіку)
const validateTechnicalLevel = (level) => {
  if (!level.trim()) {
    throw new Error("Рівень не може бути порожнім.");
  }
  // Додайте додаткову валідацію за потребою
};

// Використання forwardRef для доступу до методів з батьківського компонента
const TechnicalSkillsSection = forwardRef(({ title = "Technical Skills" }, ref) => {
  const [entries, setEntries] = useState([{ skill: "", technicalLevel: "" }]);
  const [skillSuggestionsState, setSkillSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });
  const [levelSuggestionsState, setLevelSuggestionsState] = useState({
    activeRow: null,
    filteredSuggestions: [],
  });

  const skillSuggestionsRef = useRef(null);
  const levelSuggestionsRef = useRef(null);

  const skillSuggestionsList = resumeFormTexts.technicalSkillsSuggestions; // Підказки для навичок
  const levelSuggestionsList = resumeFormTexts.levelSuggestions; // Підказки для рівнів

  // Функція для отримання даних з Firestore
  const fetchTechnicalSkillsData = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.error("Користувач не автентифікований");
      toast.error("Користувач не автентифікований");
      return;
    }

    try {
      const technicalSkillsDocRef = doc(db, "users", user.uid, "resume", "technicalSkills");
      const technicalSkillsDoc = await getDoc(technicalSkillsDocRef);
      if (technicalSkillsDoc.exists()) {
        const data = technicalSkillsDoc.data();
        console.log("Отримані дані Technical Skills:", data);
        if (data.technicalSkills && Array.isArray(data.technicalSkills)) {
          setEntries(data.technicalSkills);
        }
      } else {
        console.log("Документ Technical Skills не знайдено");
      }
    } catch (error) {
      console.error("Помилка отримання даних Technical Skills:", error);
      toast.error("Помилка отримання даних Technical Skills");
    }
  };

  // Функція для збереження даних у Firestore
  const saveTechnicalSkillsData = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.error("Користувач не автентифікований");
      toast.error("Користувач не автентифікований");
      return;
    }

    try {
      // Фільтруємо записи, де обидва поля порожні
      const nonEmptyEntries = entries.filter(
        (entry) => entry.skill.trim() !== "" || entry.technicalLevel.trim() !== ""
      );

      if (nonEmptyEntries.length === 0) {
        // Якщо немає записів, видаляємо документ
        const technicalSkillsDocRef = doc(db, "users", user.uid, "resume", "technicalSkills");
        await deleteDoc(technicalSkillsDocRef);
        console.log("Документ Technical Skills видалено успішно");
        // Якщо не хочете відображати повідомлення, видаліть наступний рядок:
        // toast.success("Документ Technical Skills видалено успішно!");
      } else {
        // Валідація лише непорожніх записів
        nonEmptyEntries.forEach((entry, index) => {
          if (entry.skill.trim() !== "") validateSkill(entry.skill);
          if (entry.technicalLevel.trim() !== "") validateTechnicalLevel(entry.technicalLevel);
        });

        const technicalSkillsDocRef = doc(db, "users", user.uid, "resume", "technicalSkills");
        await setDoc(technicalSkillsDocRef, { technicalSkills: nonEmptyEntries }, { merge: true });
        console.log("Дані Technical Skills успішно збережено");
        // Якщо не хочете відображати повідомлення, видаліть наступний рядок:
        // toast.success("Дані Technical Skills успішно збережено!");
      }
    } catch (error) {
      console.error("Помилка збереження даних Technical Skills:", error);
      toast.error(`Помилка збереження даних Technical Skills: ${error.message}`);
    }
  };

  // Надання методу saveTechnicalSkillsData зовні через ref
  useImperativeHandle(ref, () => ({
    saveData: saveTechnicalSkillsData,
  }));

  // Завантаження даних при монтуванні компонента
  useEffect(() => {
    fetchTechnicalSkillsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        skillSuggestionsRef.current &&
        !skillSuggestionsRef.current.contains(event.target) &&
        levelSuggestionsRef.current &&
        !levelSuggestionsRef.current.contains(event.target)
      ) {
        setSkillSuggestionsState({
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
    setEntries([...entries, { skill: "", technicalLevel: "" }]);
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
    updatedEntries[index][field] = suggestion;
    setEntries(updatedEntries);

    // Скидання підказок
    if (field === "skill") {
      setSkillSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    } else if (field === "technicalLevel") {
      setLevelSuggestionsState({
        activeRow: null,
        filteredSuggestions: [],
      });
    }
  };

  const handleInfoClick = (index, field) => {
    const isOpen =
      (field === "skill" && skillSuggestionsState.activeRow === index) ||
      (field === "technicalLevel" && levelSuggestionsState.activeRow === index);

    if (field === "skill") {
      setSkillSuggestionsState({
        activeRow: isOpen ? null : index,
        filteredSuggestions: isOpen
          ? []
          : skillSuggestionsList.filter((suggestion) =>
              suggestion
                .toLowerCase()
                .includes(entries[index]?.skill?.toLowerCase() || "")
            ),
      });
    } else if (field === "technicalLevel") {
      setLevelSuggestionsState({
        activeRow: isOpen ? null : index,
        filteredSuggestions: isOpen
          ? []
          : levelSuggestionsList.filter((suggestion) =>
              suggestion
                .toLowerCase()
                .includes(entries[index]?.technicalLevel?.toLowerCase() || "")
            ),
      });
    }
  };

  return (
    <section className={styles.technicalSkillsSection}>
      <h3 className={styles.subheader}>{title}</h3>
      <div className={styles.entriesContainer}>
        {entries.map((entry, index) => (
          <div key={index} className={styles.entryRow}>
            {/* Поле для навички */}
            <div className={styles.descriptionCell}>
              <Input
                placeholder="Enter skill"
                value={entry.skill || ""}
                onChange={(e) => handleInputChange(index, "skill", e.target.value)}
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Show suggestions"
                      onClick={() => handleInfoClick(index, "skill")}
                      size="small"
                      className={styles.infoButton}
                    >
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                }
                className={styles.inputField}
                onBlur={saveTechnicalSkillsData} // Збереження при покиданні поля
              />
              <div
                className={`${styles.dropdown} ${
                  skillSuggestionsState.activeRow === index ? styles.open : ""
                }`}
                ref={skillSuggestionsRef}
              >
                <ul className={styles.dropdown__items}>
                  {skillSuggestionsState.filteredSuggestions.map((suggestion, i) => (
                    <li
                      key={i}
                      onClick={() => handleSuggestionSelect(index, "skill", suggestion)}
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
                value={entry.technicalLevel || ""}
                onChange={(e) => handleInputChange(index, "technicalLevel", e.target.value)}
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Show suggestions"
                      onClick={() => handleInfoClick(index, "technicalLevel")}
                      size="small"
                      className={styles.infoButton}
                    >
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                }
                className={styles.inputField}
                onBlur={saveTechnicalSkillsData} // Збереження при покиданні поля
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
                      onClick={() =>
                        handleSuggestionSelect(index, "technicalLevel", suggestion)
                      }
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

      {/* Кнопка "Додати" по центру під усіма введеннями */}
      <div className={styles.addButtonContainer}>
        <IconButton onClick={addNewRow}>
          <AddIcon />
        </IconButton>
      </div>
    </section>
  );
});

TechnicalSkillsSection.propTypes = {
  title: PropTypes.string,
  onNext: PropTypes.func, // Пропс для функції переходу до наступної секції, якщо потрібен
};

export default TechnicalSkillsSection;