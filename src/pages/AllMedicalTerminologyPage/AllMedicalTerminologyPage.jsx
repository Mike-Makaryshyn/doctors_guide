import React, { useState } from "react";
import { medicalTerms } from "../../constants/medicalTerms";
import styles from "./AllMedicalTerminologyPage.module.scss";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Додано плагін для роботи з таблицями
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { collection, doc, setDoc, deleteDoc, getDocs } from "firebase/firestore";

const AllMedicalTerminologyPage = () => {
  const [user] = useAuthState(auth); // Користувач
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDefinitions, setSelectedDefinitions] = useState([]);
  const [showDefinitions, setShowDefinitions] = useState(true);
  const [collapsedCategories, setCollapsedCategories] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Унікальні категорії
  const allCategories = Array.from(
    new Set(medicalTerms.flatMap((term) => term.categories))
  );

  // Фільтр термінів
  const filteredTerms = medicalTerms.filter((term) => {
    const matchesSearch =
      term.latin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.germanDefinition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) => term.categories.includes(category));
    return matchesSearch && matchesCategory;
  });

  const termsByCategory = {};
  filteredTerms.forEach((term) => {
    term.categories.forEach((category) => {
      if (!termsByCategory[category]) {
        termsByCategory[category] = [];
      }
      termsByCategory[category].push(term);
    });
  });

  // Обробка вибору категорій
  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // Обробка вибору термінів
  const handleDefinitionSelect = (id) => {
    setSelectedDefinitions((prev) =>
      prev.includes(id)
        ? prev.filter((defId) => defId !== id)
        : [...prev, id]
    );
  };

  // Обробка згортання таблиць
  const toggleCollapseCategory = (category) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Збереження у PDF з таблицею
  const saveToPDF = () => {
    const doc = new jsPDF();

    // Заголовок
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Вибрані медичні терміни", 10, 10);

    // Дані для таблиці
    const tableData = selectedDefinitions.map((termId) => {
      const term = medicalTerms.find((term) => term.id === termId);
      return [term.latin, term.german, term.germanDefinition];
    });

    // Структура таблиці
    doc.autoTable({
      head: [["Латинська назва", "Німецька назва", "Означення"]],
      body: tableData,
      startY: 20,
      styles: {
        font: "Helvetica",
        fontSize: 10,
        cellPadding: 5,
      },
      headStyles: {
        fillColor: [52, 152, 219],
        textColor: 255,
        halign: "center",
      },
      bodyStyles: {
        textColor: [33, 33, 33],
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
    });

    // Завантаження PDF
    doc.save("selected_terms.pdf");
    setShowModal(false);
  };

  // Збереження лише `id` у Firestore
  const saveToPersonalAccount = async () => {
    if (!user) {
      alert("Будь ласка, увійдіть у систему, щоб зберегти дані!");
      return;
    }

    try {
      const termsCollection = collection(db, `users/${user.uid}/savedTerms`);

      // Додаємо кожен ID як окремий документ
      for (const termId of selectedDefinitions) {
        const termDoc = doc(termsCollection, termId.toString());
        await setDoc(termDoc, { id: termId });
      }

      alert("Вибрані терміни успішно збережені у вашому особистому кабінеті!");
    } catch (error) {
      console.error("Помилка при збереженні визначень:", error);
      alert("Сталася помилка при збереженні. Спробуйте пізніше.");
    }

    setShowModal(false);
  };

  // Видалення збереженого терміна за `id`
  const deleteTermById = async (termId) => {
    if (!user) {
      alert("Ви повинні бути авторизовані для видалення терміна.");
      return;
    }

    try {
      const termDoc = doc(db, `users/${user.uid}/savedTerms`, termId.toString());
      await deleteDoc(termDoc);
      alert(`Термін із ID ${termId} успішно видалено.`);
    } catch (error) {
      console.error("Помилка при видаленні терміна:", error);
    }
  };

  // Показати модальне вікно
  const handleSaveDefinitions = () => {
    if (selectedDefinitions.length === 0) {
      alert("Оберіть хоча б один термін!");
      return;
    }
    setShowModal(true);
  };

  return (
    <div className={styles.allMedicalTerminologyPage}>
      <h1>Уся медична термінологія</h1>

      {/* Кнопки дій */}
      <div className={styles.topButtons}>
        <button
          onClick={handleSaveDefinitions}
          className={styles.actionButton}
        >
          Зберегти вибрані визначення
        </button>

        <button
          onClick={() => setShowDefinitions((prev) => !prev)}
          className={styles.actionButton}
        >
          {showDefinitions ? "Приховати означення" : "Показати означення"}
        </button>
      </div>

      {/* Пошук */}
      <input
        type="text"
        placeholder="Пошук..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />

      {/* Фільтри категорій */}
      <div className={styles.categoryFilter}>
        <div className={styles.categoryButtonContainer}>
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryToggle(category)}
              className={`${styles.categoryButton} ${
                selectedCategories.includes(category) ? styles.active : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Відображення даних по категоріях */}
      {Object.keys(termsByCategory).map((category) => (
        <div key={category} className={styles.categorySection}>
          <h2
            onClick={() => toggleCollapseCategory(category)}
            className={styles.categoryHeader}
          >
            {category}
            <span
              className={`${styles.collapseIcon} ${
                collapsedCategories[category] ? styles.collapsed : ""
              }`}
            >
              {collapsedCategories[category] ? "▼" : "▲"}
            </span>
          </h2>
          {!collapsedCategories[category] && (
            <table className={styles.terminologyTable}>
              <thead>
                <tr>
                  <th>Вибір</th>
                  <th>Латинська назва</th>
                  <th>Німецька назва</th>
                  {showDefinitions && <th>Означення</th>}
                </tr>
              </thead>
              <tbody>
                {termsByCategory[category].map((term) => (
                  <tr key={term.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedDefinitions.includes(term.id)}
                        onChange={() => handleDefinitionSelect(term.id)}
                      />
                    </td>
                    <td>{term.latin}</td>
                    <td>{term.german}</td>
                    {showDefinitions && <td>{term.germanDefinition}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}

      {/* Модальне вікно */}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Куди зберегти?</h2>
            <p>Оберіть, як зберегти вибрані терміни:</p>
            <div className={styles.modalActions}>
              <button
                className={styles.actionButton}
                onClick={saveToPersonalAccount}
              >
                Особистий кабінет
              </button>
              <button className={styles.actionButton} onClick={saveToPDF}>
                Зберегти у PDF
              </button>
            </div>
            <button
              className={styles.closeButton}
              onClick={() => setShowModal(false)}
            >
              Закрити
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllMedicalTerminologyPage;