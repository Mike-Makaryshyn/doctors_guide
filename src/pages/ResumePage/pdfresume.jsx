// src/pages/ResumePage/pdfresume.jsx

import jsPDF from "jspdf";
import "jspdf-autotable";
import { auth, db } from "../../firebase"; // Імпорт Firebase конфігурації
import { getDoc, doc } from "firebase/firestore";
import roboto from "./Roboto-Regular.ttf"; // Імпорт звичайного стилю шрифту
import robotoBold from "./Roboto-Bold.ttf"; // Імпорт жирного стилю шрифту
import styles from "./pdfresume.module.css";

// Функція для отримання даних користувача з Firestore
const getUserResume = async () => {
  const user = auth.currentUser;
  if (!user) {
    console.error("Der Benutzer ist nicht angemeldet.");
    return null;
  }

  try {
    const profileRef = doc(db, "users", user.uid, "resume", "profile");
    const profileSnapshot = await getDoc(profileRef);
    const profileData = profileSnapshot.exists() ? profileSnapshot.data() : null;

    if (!profileData) {
      console.warn("Es gibt keine Profildaten für diesen Benutzer.");
      return null;
    }

    return {
      header: profileData.header || {},
      aktuell: profileData.aktuell || [],
      berufserfahrungen: profileData.berufserfahrungen || [],
      ausbildung: profileData.ausbildung || [],
      languages: profileData.languageSkills || [],
      technicalSkills: profileData.technicalSkills || [],
    };
  } catch (error) {
    console.error("Fehler beim Abrufen der Daten aus Firestore:", error);
    return null;
  }
};

// Функція для додавання таблиць у PDF
const addTable = (title, data, columns, doc, startY) => {
  if (data && data.length > 0) {
    doc.setFont("Roboto", "bold");
    doc.text(title, 10, startY);
    doc.setFont("Roboto", "normal");

    doc.autoTable({
      startY: startY + 10,
      head: [columns],
      body: data,
      theme: "grid",
      pageBreak: 'auto',
      styles: { font: "Roboto", fontSize: 10, lineHeight: 1.2 },
      headStyles: { 
        fillColor: [240, 240, 240],
        fontStyle: "bold",
        lineWidth: 0.2,
        lineColor: [200, 200, 200],
        textColor: [0, 0, 0]
      },
      columnStyles: {
        0: { cellWidth: 35, halign: "center" },
        1: { cellWidth: "auto", halign: "left" },
      },
      margin: { left: 10, right: 10 },
      bodyStyles: { cellPadding: 2 },
    });
    return doc.previousAutoTable.finalY + 10;
  }
  return startY;
};

// Функція, що створює PDF-документ на основі даних резюме
const createPDFDocument = (resume) => {
  const doc = new jsPDF();

  // Додавання шрифтів
  doc.addFont(roboto, "Roboto", "normal");
  doc.addFont(robotoBold, "Roboto", "bold");
  doc.setFont("Roboto");

  let yPosition = 10;

  // Розділ "Persönliche Daten"
  doc.setFontSize(14);
  doc.setFont("Roboto", "bold");
  doc.text("Persönliche Daten", 10, yPosition);
  yPosition += 10;

  doc.setFontSize(10);
  doc.setFont("Roboto", "normal");
  const headerOrder = [
    "vorname",
    "nachname",
    "geburtsdatum",
    "nationalitaet",
    "adresse",
    "email",
    "handynummer",
    "fachrichtung",
  ];
  headerOrder.forEach((key) => {
    if (resume.header[key]) {
      const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
      doc.text(`${formattedKey}: ${resume.header[key]}`, 10, yPosition);
      yPosition += 7;
    }
  });
  yPosition += 10;

  // Таблиця "Aktuell"
  const aktuellData = resume.aktuell
    .filter(entry => entry.date && entry.description)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((entry) => [entry.date, entry.description]);
  if (aktuellData.length > 0) {
    yPosition = addTable("Aktuell", aktuellData, ["Datum", "Beschreibung"], doc, yPosition);
  }

  // Таблиця "Berufserfahrungen"
  const berufserfahrungenData = resume.berufserfahrungen
    .filter(entry => entry.date && entry.description && entry.place)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((entry) => [entry.date, `${entry.description}, ${entry.place}`]);
  if (berufserfahrungenData.length > 0) {
    yPosition = addTable("Berufserfahrungen", berufserfahrungenData, ["Datum", "Beschreibung"], doc, yPosition);
  }

  // Таблиця "Ausbildung"
  const ausbildungData = resume.ausbildung
    .filter(entry => entry.date && entry.description && entry.place)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((entry) => [entry.date, `${entry.description}, ${entry.place}`]);
  if (ausbildungData.length > 0) {
    yPosition = addTable("Ausbildung", ausbildungData, ["Datum", "Beschreibung"], doc, yPosition);
  }

  // Таблиця "Sprachen"
  const languagesData = resume.languages
    .filter(entry => entry.language && entry.level)
    .map((entry) => [entry.language, entry.level]);
  if (languagesData.length > 0) {
    yPosition = addTable("Sprachen", languagesData, ["Sprache", "Niveau"], doc, yPosition);
  }

  // Таблиця "Technische Fähigkeiten"
  const technicalSkillsData = resume.technicalSkills
    .filter(entry => entry.skill && entry.technicalLevel)
    .map((entry) => [entry.skill, entry.technicalLevel]);
  if (technicalSkillsData.length > 0) {
    yPosition = addTable("Technische Fähigkeiten", technicalSkillsData, ["Fähigkeit", "Niveau"], doc, yPosition);
  }

  return doc;
};

// Функція для завантаження PDF (завантаження файлу)
export const downloadResumePDF = async () => {
  const resume = await getUserResume();
  if (resume) {
    const doc = createPDFDocument(resume);
    doc.save("lebenslauf.pdf");
  } else {
    alert("Die Daten des Lebenslaufs konnten nicht abgerufen werden.");
  }
};

// Функція для попереднього перегляду PDF (відкриває у новій вкладці)
export const previewResumePDF = async () => {
  const resume = await getUserResume();
  if (resume) {
    const doc = createPDFDocument(resume);
    const pdfBlobUrl = doc.output("bloburl");
    window.open(pdfBlobUrl, "_blank");
  } else {
    alert("Die Daten des Lebenslaufs konnten nicht abgerufen werden.");
  }
};

// Функція для додавання кнопки завантаження (якщо потрібно вставити її у DOM)
export const addDownloadButton = (containerId) => {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Der Container mit der ID "${containerId}" wurde nicht gefunden!`);
    return;
  }

  container.innerHTML = "";

  const button = document.createElement("button");
  button.textContent = "Lebenslauf herunterladen";
  button.style.padding = "10px 20px";
  button.style.fontSize = "16px";

  button.addEventListener("click", downloadResumePDF);

  container.appendChild(button);
};