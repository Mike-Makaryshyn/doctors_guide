// src/pages/FSPFormularPage/pdfFSPFormular.js

import jsPDF from "jspdf";
import "jspdf-autotable";

/**
 * Головна функція формування PDF
 */
function createFSPPDFDocument(parsedData) {
  // Ініціалізуємо jsPDF
  const doc = new jsPDF({
    // При потребі: format: "a4", orientation: "p"
  });

  let yPos = 10; // Відлік вертикальної позиції
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  const pageWidth = doc.internal.pageSize.getWidth();

  // (A) Якщо є fullName, друкуємо праворуч угорі
  if (parsedData.fullName) {
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(parsedData.fullName, pageWidth - 10, yPos, {
      align: "right",
    });
    yPos += 8;
  }

  // (B) Якщо є поле T, виводимо теж праворуч
  if (parsedData.T) {
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`T: ${parsedData.T}`, pageWidth - 10, yPos, { align: "right" });
    yPos += 6;
  }

  // (C) РОЗДІЛ «Persönliche Daten»
  yPos = addTileSection(doc, yPos, "Persönliche Daten", [
    {
      label: "Vornamen",
      value: parsedData.name,
    },
    {
      label: "Namen",
      value: parsedData.surname,
    },
    {
      label: "Geburtsdatum/Alter",
      value: parsedData.birthdate
        ? `${parsedData.birthdate}${
            parsedData.age ? " / " + parsedData.age : ""
          }`
        : "",
    },
    {
      label: "Größe",
      value: parsedData.height,
    },
    {
      label: "Gewicht",
      value: parsedData.weight,
    },
    {
      label: "Geschlecht",
      value: parsedData.gender,
    },
    {
      label: "Hausarzt",
      value: parsedData.hausarzt,
    },
  ]);

  // (D) РОЗДІЛ «Aktuelle Anamnese»
  yPos = addTileSection(doc, yPos, "Aktuelle Anamnese", [
    {
      label: "Besuchsgrund",
      value: parsedData.visitReason,
    },
    {
      label: "Schmerzlokalisierung",
      value: parsedData.painLocalization,
    },
    {
      label: "Zeitverlauf",
      value: parsedData.timeCourse,
    },
    {
      label: "Symptombeschreibung",
      value: parsedData.symptomDescription,
    },
    {
      label: "Schmerzausstrahlung",
      value: parsedData.painRadiation,
    },
    {
      label: "Schmerzverlauf",
      value: parsedData.painProgression,
    },
    {
      label: "Auslöser",
      value: parsedData.triggers,
    },
    {
      label: "Schmerzintensität",
      value: parsedData.painIntensity,
    },
    {
      label: "Schmerzlinderung",
      value: parsedData.painRelief,
    },
    {
      label: "Schmerzverstärkung",
      value: parsedData.painAggravation,
    },
    {
      label: "Vorherige medizinische Betreuung",
      value: parsedData.previousMedicalCare,
    },
    {
      label: "Probleme mit Funktionalität",
      value: parsedData.functionalIssues,
    },
    {
      label: "Andere begleitende Symptome",
      value: parsedData.additionalSymptoms,
    },
  ]);

  // (E) РОЗДІЛ «Reise- und Impfstatus»
  yPos = addTileSection(doc, yPos, "Reise- und Impfstatus", [
    {
      label: "Impfung",
      value: parsedData.vaccination,
    },
    {
      label: "Reise",
      value: parsedData.travelHistory,
    },
  ]);

  // (F) РОЗДІЛ «Vegetative Anamnese»
  yPos = addTileSection(doc, yPos, "Vegetative Anamnese", [
    {
      label: "Allgemeiner Zustand",
      value: parsedData.generalCondition,
    },
    {
      label: "Appetit",
      value: parsedData.appetite,
    },
    {
      label: "Gewicht",
      value: parsedData.weightLoss, // У компоненті викор. weightLoss
    },
    {
      label: "Durstgefühl",
      value: parsedData.thirst,
    },
    {
      label: "Übelkeit",
      value: parsedData.nausea,
    },
    {
      label: "Erbrechen",
      value: parsedData.vomiting,
    },
    {
      label: "Stuhlgang",
      value: parsedData.bowelMovement,
    },
    {
      label: "Wasserlassen",
      value: parsedData.urination,
    },
    {
      label: "Schwitzen",
      value: parsedData.sweating,
    },
    {
      label: "Schwindel",
      value: parsedData.vertigo,
    },
    {
      label: "Bewusstsein",
      value: parsedData.consciousness,
    },
    {
      label: "Herzklopfen",
      value: parsedData.palpitations,
    },
    {
      label: "Atemnot",
      value: parsedData.shortnessOfBreath,
    },
    {
      label: "Hitzewallungen",
      value: parsedData.hotFlashes,
    },
    {
      label: "Kältegefühl",
      value: parsedData.coldFeeling,
    },
    {
      label: "Schlafen",
      value: parsedData.sleep,
    },
    {
      label: "Sexualanamnese",
      value: parsedData.sexualHistory,
    },
    {
      label: "Sonstiges",
      value: parsedData.others,
    },
    {
      label: "Gynäkologische Anamnese",
      value: parsedData.gynecologicalHistory,
    },
  ]);

  // (G) РОЗДІЛ «Zusammenfassung»
  // Якщо треба просто один ключ "summary"
  yPos = addTileSection(doc, yPos, "Zusammenfassung", [
    {
      label: "Zusammenfassung",
      value: parsedData.summary,
    },
  ]);

  return doc;
}

/**
 * Відкрити PDF у новій вкладці (Preview)
 */
export const previewFSPPDF = (parsedData) => {
  if (!parsedData) {
    alert("parsedData is empty or undefined!");
    return;
  }
  const doc = createFSPPDFDocument(parsedData);
  const pdfBlobUrl = doc.output("bloburl");
  window.open(pdfBlobUrl, "_blank");
};

/**
 * Завантажити PDF (Download)
 */
export const downloadFSPPDF = (parsedData) => {
  if (!parsedData) {
    alert("parsedData is empty or undefined!");
    return;
  }
  const doc = createFSPPDFDocument(parsedData);
  doc.save("FSPFormular.pdf");
};

/**
 * Допоміжна функція відтворення розділу PDF
 * - Друкує лише ті поля, де є текст (value.trim() !== "")
 * - Заголовок розділу більший і жирний (14)
 * - Кожен label друкується ЖИРНИМ (10), value — нормальним
 * - Якщо текст довгий, виконується автоперенос
 */
function addTileSection(doc, yPos, sectionTitle, fields) {
  // Фільтруємо лише непорожні поля
  const nonEmptyFields = fields.filter(
    (f) => f.value && String(f.value).trim() !== ""
  );

  if (nonEmptyFields.length === 0) {
    // Якщо розділ порожній, пропускаємо
    return yPos;
  }

  // 1) Заголовок секції
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text(sectionTitle, 10, yPos);
  yPos += 8;

  // 2) Перемикаємося на стандартний розмір,
  // але label друкуватимемо жирним
  const maxWidth = 180;

  nonEmptyFields.forEach((field) => {
    // label:
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    const labelStr = `${field.label}: `;
    const labelWidth = doc.getTextWidth(labelStr);

    // value (автоперенос):
    doc.setFont("helvetica", "normal");
    const splittedValue = doc.splitTextToSize(String(field.value), maxWidth - labelWidth - 2);

    // Друкуємо label + перший ряд value на одному рядку
    doc.text(labelStr, 10, yPos);

    if (splittedValue.length > 0) {
      doc.text(splittedValue[0], 10 + labelWidth, yPos);
    }

    // Якщо лишились інші рядки value, друкуємо нижче
    for (let i = 1; i < splittedValue.length; i++) {
      yPos += 5;
      doc.text(splittedValue[i], 10, yPos);
    }

    // Відступ після поля
    yPos += 7;
  });

  // Відступ після секції
  yPos += 5;
  return yPos;
}