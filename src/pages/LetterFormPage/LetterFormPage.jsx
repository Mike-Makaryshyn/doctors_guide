import React, { useState, useEffect, useCallback } from "react";
import { doc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

// Імпортуємо документи
import {
  documentsEU,
  documentsNonEU,
  documentsOptional,
} from "../../constants/translation/documents";
import { documentsSecond } from "../../constants/translation/documentsSecond";

// Імпортуємо адреси
import approbationAddresses from "../../constants/translation/approbationAddressesNoPhone";

// Підвантажуємо глобальний стан
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";

// Функція для уніфікації регіону (наприклад, "Westfalen-Lippe" перетворюється на "Nordrhein-Westfalen")
const unifyRegion = (r) => {
  if (r === "Westfalen-Lippe") return "Nordrhein-Westfalen";
  return r;
};

const LetterFormPage = () => {
  // Витягуємо глобальний стан
  const { user, selectedRegion } = useGetGlobalInfo();

  // Стан для чекбоксів, категорії (EU / Non-EU) і згенерованого листа
  const [checkboxes, setCheckboxes] = useState({});
  const [category, setCategory] = useState(null);
  const [letterText, setLetterText] = useState("");

  // Локальний стан для регіону, ініціалізований глобальним значенням
  const [region, setRegion] = useState(unifyRegion(selectedRegion || "Bayern"));

  // Використовуємо useEffect для оновлення локального регіону при зміні глобального selectedRegion
  useEffect(() => {
    setRegion(unifyRegion(selectedRegion || "Bayern"));
  }, [selectedRegion]);

  // 1. Завантаження даних із Firestore
  const fetchData = useCallback(() => {
    if (!user) return;

    const selectionDocRef = doc(
      collection(doc(collection(db, "users"), user.uid), "userData"),
      "selectionData"
    );
    const unsubscribeSelection = onSnapshot(selectionDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Fetched checkboxes:", data.checkboxes);
        setCheckboxes(data.checkboxes || {});
      }
    });

    const dataDocRef = doc(
      collection(doc(collection(db, "users"), user.uid), "userData"),
      "data"
    );
    const unsubscribeData = onSnapshot(dataDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Fetched educationRegion:", data.educationRegion);
        if (data.educationRegion === "EU" || data.educationRegion === "Non-EU") {
          setCategory(data.educationRegion);
        } else {
          setCategory("Non-EU");
        }
      }
    });

    return () => {
      unsubscribeSelection();
      unsubscribeData();
    };
  }, [user]);

  useEffect(() => {
    const unsubscribe = fetchData();
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [fetchData]);

  // 2. Генерація тексту листа (назви документів беремо з docItem.category.de)
  const generateLetterText = useCallback(() => {
    if (!category) return;

    const mainDocs = category === "Non-EU" ? documentsNonEU : documentsEU;
    const secondDocs = documentsSecond;
    const optionalDocs = documentsOptional;

    console.log("mainDocs (до фільтра):", mainDocs);
    console.log("secondDocs (до фільтра):", secondDocs);
    console.log("optionalDocs (до фільтра):", optionalDocs);

    const filteredMainDocs = mainDocs.filter((doc) => {
      const docState = checkboxes[doc.id?.toString()] || {};
      return !docState.hide && docState.is_exist;
    });
    const filteredSecondDocs = secondDocs.filter((doc) => {
      const docState = checkboxes[doc.id?.toString()] || {};
      return !docState.hide && docState.is_exist;
    });
    const filteredOptionalDocs = optionalDocs.filter((doc) => {
      const docState = checkboxes[doc.id?.toString()] || {};
      return !docState.hide && docState.is_exist;
    });

    console.log("filteredMainDocs:", filteredMainDocs);
    console.log("filteredSecondDocs:", filteredSecondDocs);
    console.log("filteredOptionalDocs:", filteredOptionalDocs);

    const allDocs = [...filteredMainDocs, ...filteredSecondDocs, ...filteredOptionalDocs];

    let text = "Sehr geehrte Damen und Herren,\n\n";
    text += "Ich übersende Ihnen die folgenden Dokumente:\n\n";

    allDocs.forEach((docItem) => {
      console.log("Current docItem:", docItem);
      const docState = checkboxes[docItem.id?.toString()] || {};

      // Беремо назву з docItem.category.de, оскільки вона містить німецький переклад
      const docName =
        docItem.category && typeof docItem.category === "object"
          ? docItem.category.de || "N/A"
          : "N/A";

      const statusParts = [];
      if (docState.notary) statusParts.push("notariell beglaubigt");
      if (docState.translation) statusParts.push("übersetzt");
      if (category === "Non-EU" && docState.apostile) statusParts.push("mit Apostille");

      const statusText = statusParts.length > 0 ? statusParts.join(", ") : "ohne zusätzliche Angaben";
      const copyType = docState.ready_copies ? "beglaubigte Kopie" : "Original";

      text += `• ${docName} (${statusText}) – ich übersende Ihnen ${copyType}.\n`;
    });

    text += "\nMit freundlichen Grüßen,\nIhr Name\n";
    setLetterText(text);
  }, [checkboxes, category]);

  // 3. Отримання даних адреси за поточним локальним регіоном
  const addressData = approbationAddresses.find(
    (item) => item.region === region
  );

  return (
    <MainLayout>
      <div style={{ padding: "20px" }}>
        <h1>Begleitschreiben mit Dokumenten</h1>

        {/* Dropdown для локальної зміни регіону */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ marginRight: "10px" }}>Region auswählen:</label>
          <select value={region} onChange={(e) => setRegion(e.target.value)}>
            {approbationAddresses.map((addr) => (
              <option key={addr.region} value={addr.region}>
                {addr.region}
              </option>
            ))}
          </select>
        </div>

        {/* Блок для відображення адреси */}
        <div style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <h2>Adresse für {region}</h2>
          {addressData ? (
            <div>
              <p><strong>{addressData.office}</strong></p>
              {addressData.department && <p>{addressData.department}</p>}
              <p>{addressData.address}</p>
              {addressData.email && (
                <p>
                  E-Mail:{" "}
                  {typeof addressData.email === "object"
                    ? JSON.stringify(addressData.email, null, 2)
                    : addressData.email}
                </p>
              )}
            </div>
          ) : (
            <p style={{ color: "red" }}>Keine Adresse für diesen Region gefunden.</p>
          )}
        </div>

        {/* Кнопка для генерації листа */}
        <button onClick={generateLetterText}>
          Daten abrufen und Schreiben generieren
        </button>

        {/* Текстове поле для відображення згенерованого листа */}
        <div style={{ marginTop: "20px" }}>
          <textarea
            value={letterText}
            onChange={(e) => setLetterText(e.target.value)}
            rows={15}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default LetterFormPage;