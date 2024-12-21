import jsPDF from "jspdf";
import "jspdf-autotable";
import { auth, db } from "../../firebase"; // Імпорт Firebase конфігурації
import { getDoc, doc } from "firebase/firestore";
import roboto from "./Roboto-Regular.ttf"; // Імпорт звичайного стилю шрифту
import robotoBold from "./Roboto-Bold.ttf"; // Імпорт жирного стилю шрифту

// Функція для отримання даних користувача
const getUserResume = async () => {
    const user = auth.currentUser;
    if (!user) {
        console.error("Der Benutzer ist nicht angemeldet.");
        return null;
    }

    try {
        const headerRef = doc(db, "users", user.uid, "resume", "header");
        const headerSnapshot = await getDoc(headerRef);
        const headerData = headerSnapshot.exists() ? headerSnapshot.data() : null;

        const aktuellRef = doc(db, "users", user.uid, "resume", "aktuell");
        const aktuellSnapshot = await getDoc(aktuellRef);
        const aktuellData = aktuellSnapshot.exists() ? aktuellSnapshot.data() : null;

        const berufserfahrungenRef = doc(db, "users", user.uid, "resume", "berufserfahrungen");
        const berufserfahrungenSnapshot = await getDoc(berufserfahrungenRef);
        const berufserfahrungenData = berufserfahrungenSnapshot.exists() ? berufserfahrungenSnapshot.data() : null;

        const ausbildungRef = doc(db, "users", user.uid, "resume", "ausbildung");
        const ausbildungSnapshot = await getDoc(ausbildungRef);
        const ausbildungData = ausbildungSnapshot.exists() ? ausbildungSnapshot.data() : null;

        const languagesRef = doc(db, "users", user.uid, "resume", "languages");
        const languagesSnapshot = await getDoc(languagesRef);
        const languagesData = languagesSnapshot.exists() ? languagesSnapshot.data() : null;

        const technicalSkillsRef = doc(db, "users", user.uid, "resume", "technicalSkills");
        const technicalSkillsSnapshot = await getDoc(technicalSkillsRef);
        const technicalSkillsData = technicalSkillsSnapshot.exists() ? technicalSkillsSnapshot.data() : null;

        return {
            header: headerData,
            aktuell: aktuellData,
            berufserfahrungen: berufserfahrungenData,
            ausbildung: ausbildungData,
            languages: languagesData,
            technicalSkills: technicalSkillsData,
        };
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten aus Firestore:", error);
        return null;
    }
};

// Функція для додавання таблиць в PDF
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
            styles: { font: "Roboto", fontSize: 8, lineHeight: 1 },
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

// Функція для генерації PDF
const generatePDF = (resume) => {
    const doc = new jsPDF();

    // Додавання шрифтів
    doc.addFont(roboto, "Roboto", "normal");
    doc.addFont(robotoBold, "Roboto", "bold");
    doc.setFont("Roboto");

    let yPosition = 5;

    // Відображення особистих даних
    doc.setFontSize(8);
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

    if (resume.header) {
        headerOrder.forEach((key) => {
            if (resume.header[key]) {
                const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
                doc.text(`${formattedKey}: ${resume.header[key]}`, 10, yPosition);
                yPosition += 4;
            }
        });
    }
    yPosition += 10;

    // Таблиця "Aktuell"
    const aktuellData = resume.aktuell?.entries
        ?.sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((entry) => [entry.date, entry.description]);

    if (aktuellData && aktuellData.length > 0) {
        yPosition = addTable("Aktuell", aktuellData, ["Datum", "Beschreibung"], doc, yPosition);
    }

    // Таблиця "Berufserfahrungen"
    const berufserfahrungenData = resume.berufserfahrungen?.entries
        ?.sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((entry) => [entry.date, `${entry.description}, ${entry.place}`]);

    if (berufserfahrungenData && berufserfahrungenData.length > 0) {
        yPosition = addTable("Berufserfahrungen", berufserfahrungenData, ["Datum", "Beschreibung"], doc, yPosition);
    }

    // Таблиця "Ausbildung"
    const ausbildungData = resume.ausbildung?.entries
        ?.sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((entry) => [entry.date, `${entry.description}, ${entry.place}`]);

    if (ausbildungData && ausbildungData.length > 0) {
        yPosition = addTable("Ausbildung", ausbildungData, ["Datum", "Beschreibung"], doc, yPosition);
    }

    // Таблиця "Sprachen"
    const languagesData = resume.languages?.languages
        ?.map((entry) => [entry.language, entry.level]);

    if (languagesData && languagesData.length > 0) {
        yPosition = addTable("Sprachen", languagesData, ["Sprache", "Niveau"], doc, yPosition);
    }

    // Таблиця "Technische Fähigkeiten"
    const technicalSkillsData = resume.technicalSkills?.technicalSkills
        ?.map((entry) => [entry.skill, entry.technicalLevel]);

    if (technicalSkillsData && technicalSkillsData.length > 0) {
        yPosition = addTable("Technische Fähigkeiten", technicalSkillsData, ["Fähigkeit", "Niveau"], doc, yPosition);
    }

    doc.save("lebenslauf.pdf");
};

// Генерація резюме
const generateResumePDF = async () => {
    const resume = await getUserResume();
    if (resume) {
        generatePDF(resume);
    } else {
        alert("Die Daten des Lebenslaufs konnten nicht abgerufen werden.");
    }
};

// Функція для додавання кнопки завантаження
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

    button.addEventListener("click", generateResumePDF);

    container.appendChild(button);
};