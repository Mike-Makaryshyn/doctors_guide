import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Для створення таблиць у PDF

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  const [savedDefinitions, setSavedDefinitions] = useState([]);
  const [savedDocuments, setSavedDocuments] = useState([]);
  const [availableDocs, setAvailableDocs] = useState([]);
  const [neededDocs, setNeededDocs] = useState([]);
  const [verifiedDocs, setVerifiedDocs] = useState([]);
  const [notSentDocs, setNotSentDocs] = useState([]);
  const [definitionsExpanded, setDefinitionsExpanded] = useState(false);
  const [documentsExpanded, setDocumentsExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Отримання даних користувача з Firestore
    const fetchUserData = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserData(data);
          setSavedDefinitions(data.savedDefinitions || []);
        }
      }
    };

    // Отримання вибраних документів із localStorage
    const fetchSavedDocuments = () => {
      const savedDocs = JSON.parse(localStorage.getItem("selected_documents"));
      if (savedDocs) {
        setSavedDocuments(savedDocs);

        // Розподіл документів за статусами
        const available = savedDocs.filter((doc) => doc.is_exist === "check");
        const needed = savedDocs.filter((doc) => doc.is_exist !== "check");
        const verified = savedDocs.filter((doc) => doc.is_verified === true);
        const notSent = savedDocs.filter((doc) => doc.is_sent !== true);

        setAvailableDocs(available);
        setNeededDocs(needed);
        setVerifiedDocs(verified);
        setNotSentDocs(notSent);
      }
    };

    fetchUserData();
    fetchSavedDocuments();
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    alert("Ви вийшли з системи!");
    navigate("/auth");
  };

  const downloadPDF = (data, title) => {
    const doc = new jsPDF();

    // Заголовок
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.text(title, 10, 10);

    // Таблиця
    const tableData = data.map((item) => [
      item.name,
      item.is_exist ? "Наявний" : "Потрібний",
      item.is_verified ? "Завірено" : "Не завірено",
      item.is_sent ? "Надіслано" : "Не надіслано",
    ]);

    doc.autoTable({
      head: [["Назва", "Статус", "Завірення", "Надсилання"]],
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
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
    });

    // Завантаження файлу
    doc.save(`${title}.pdf`);
  };

  const updateDocumentStatus = (id, statusKey) => {
    const updatedDocs = savedDocuments.map((doc) => {
      if (doc.id === id) {
        return { ...doc, [statusKey]: true };
      }
      return doc;
    });

    setSavedDocuments(updatedDocs);
    localStorage.setItem("selected_documents", JSON.stringify(updatedDocs));

    // Оновлення списків
    const available = updatedDocs.filter((doc) => doc.is_exist === "check");
    const needed = updatedDocs.filter((doc) => doc.is_exist !== "check");
    const verified = updatedDocs.filter((doc) => doc.is_verified === true);
    const notSent = updatedDocs.filter((doc) => doc.is_sent !== true);

    setAvailableDocs(available);
    setNeededDocs(needed);
    setVerifiedDocs(verified);
    setNotSentDocs(notSent);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Особистий кабінет</h1>

      {/* Основна інформація */}
      {userData && (
        <section style={{ marginBottom: "20px" }}>
          <h2>Основна інформація</h2>
          <p>
            <strong>Ім'я:</strong> {userData.firstName} {userData.lastName}
          </p>
          <p>
            <strong>Спеціальність:</strong> {userData.specialty || "Не вказано"}
          </p>
          <p>
            <strong>Статус визнання:</strong>{" "}
            {userData.recognitionStatus || "Не вказано"}
          </p>
        </section>
      )}

      {/* Збережені визначення */}
      <section>
        <h2
          onClick={() => setDefinitionsExpanded((prev) => !prev)}
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Збережені визначення
          <span>{definitionsExpanded ? "▲" : "▼"}</span>
        </h2>
        {definitionsExpanded && (
          <ul>
            {savedDefinitions.map((definition, index) => (
              <li key={index}>
                <strong>{definition.latin}</strong>:{" "}
                {definition.germanDefinition}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Наявні документи */}
      <section>
        <h2>Наявні документи</h2>
        <ul>
          {availableDocs.map((doc, index) => (
            <li key={index}>
              <strong>{doc.name}</strong>
              <button
                onClick={() => updateDocumentStatus(doc.id, "is_verified")}
              >
                Завірено
              </button>
              <button
                onClick={() => updateDocumentStatus(doc.id, "is_sent")}
              >
                Надіслано
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;