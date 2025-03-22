// src/pages/FSPFormularPage/pdfFSPFormular.js

import jsPDF from "jspdf";
import "jspdf-autotable";

/**
 * (A) Спрощена функція для очищення Markdown,
 *     але лишаємо '**' для жирного.
 *     Прибираємо інші символи: `_ # >` і блоки ```...```.
 *     Також зводимо 3+ зірочки до 2.
 */
function stripMarkdownExceptBold(text) {
  if (!text) return "";
  let result = text;
  // Видаляємо блоки ```...```
  result = result.replace(/```[^```]*```/gs, "");
  // Перетворимо *** або більше на **
  result = result.replace(/\*{3,}/g, "**");
  // Знімаємо _ (але не чіпаємо **)
  result = result.replace(/\_/g, "");
  // Прибираємо # і > (початок рядка)
  result = result.replace(/^#+\s?/gm, "");
  result = result.replace(/^>\s?/gm, "");
  // Якщо треба, можна видалити одинарні `*`
  // result = result.replace(/\*(?!\*)/g, "");
  return result.trim();
}

/**
 * (B) Розбиває рядок на сегменти з урахуванням '**'.
 */
function splitBoldSegments(line) {
  if (!line.includes("**")) {
    return [{ text: line, isBold: false }];
  }
  const segments = [];
  let startIndex = 0;
  let isBold = false;

  const pattern = /\*\*/g;
  let match;
  while ((match = pattern.exec(line)) !== null) {
    const idx = match.index;
    if (idx > startIndex) {
      segments.push({
        text: line.slice(startIndex, idx),
        isBold,
      });
    }
    isBold = !isBold;
    startIndex = idx + 2; // пропускаємо **
  }
  if (startIndex < line.length) {
    segments.push({ text: line.slice(startIndex), isBold });
  }
  return segments;
}

/**
 * (C) Малює колонтитул (footer) на поточній сторінці:
 *     зліва жирний, праворуч normal.
 */
function drawFooter(doc) {
  const pageHeight = doc.internal.pageSize.getHeight();
  const pageWidth = doc.internal.pageSize.getWidth();

  // Ліворуч жирний
  doc.setFont("arial", "bold");
  doc.setFontSize(9);
  doc.text("GermanMove jour provide to Germany Approbation", 10, pageHeight - 5);

  // Праворуч normal
  doc.setFont("arial", "normal");
  doc.text(
    "deutsche-approbation.com",
    pageWidth - 10,
    pageHeight - 5,
    { align: "right" }
  );
}

/**
 * (D) Головна функція створення PDF-документа
 */
function createFSPPDFDocument(parsedData, regionName = "") {
  const doc = new jsPDF({
    format: "a4",
    orientation: "p",
    unit: "mm", // або "pt"
  });

  let yPos = 10;

  // Використовуємо Arial, збільшимо розмір шрифту
  doc.setFont("arial", "normal");
  doc.setFontSize(12);

  // Ще більший міжрядковий інтервал
  doc.setLineHeightFactor(1.3);

  const pageHeight = doc.internal.pageSize.getHeight();
  const pageWidth = doc.internal.pageSize.getWidth();
  const bottomMargin = 15;

  /**
   * Функція-хелпер для «переносу сторінки»:
   * 1) Малюємо footer на поточній сторінці
   * 2) doc.addPage()
   * 3) Повертаємо 10 (початок yPos)
   */
  function doPageBreak() {
    drawFooter(doc); // Спочатку футер на поточній
    doc.addPage();
    return 10; // Тепер починаємо нову сторінку з y=10
  }

  // (Приклад) Якщо є fullName або regionName, друкуємо праворуч угорі
  if (parsedData.fullName || regionName) {
    doc.setFontSize(14);
    doc.setFont("arial", "bold");

    const textToPrint = regionName
      ? `${parsedData.fullName || ""} (${regionName})`
      : parsedData.fullName;

    doc.text(textToPrint.trim(), pageWidth - 10, yPos, { align: "right" });
    yPos += 8;
  }

  // Якщо є поле T
  if (parsedData.T) {
    doc.setFontSize(12);
    doc.setFont("arial", "normal");
    doc.text(`T: ${parsedData.T}`, pageWidth - 10, yPos, { align: "right" });
    yPos += 6;
  }

  // (1) Persönliche Daten
  yPos = addTileSection(doc, yPos, "Persönliche Daten", [
    { label: "Vornamen", value: parsedData.name },
    { label: "Namen", value: parsedData.surname },
    {
      label: "Geburtsdatum/Alter",
      value: parsedData.birthdate
        ? `${parsedData.birthdate}${parsedData.age ? " / " + parsedData.age : ""}`
        : "",
    },
    { label: "Größe", value: parsedData.height },
    { label: "Gewicht", value: parsedData.weight },
    { label: "Geschlecht", value: parsedData.gender },
    { label: "Hausarzt", value: parsedData.hausarzt },
  ]);

  // (2) Aktuelle Anamnese
  yPos = addTileSection(doc, yPos, "Aktuelle Anamnese", [
    { label: "Besuchsgrund", value: parsedData.visitReason },
    { label: "Schmerzlokalisierung", value: parsedData.painLocalization },
    { label: "Zeitverlauf", value: parsedData.timeCourse },
    { label: "Symptombeschreibung", value: parsedData.symptomDescription },
    { label: "Schmerzausstrahlung", value: parsedData.painRadiation },
    { label: "Schmerzverlauf", value: parsedData.painProgression },
    { label: "Auslöser", value: parsedData.triggers },
    { label: "Schmerzintensität", value: parsedData.painIntensity },
    { label: "Schmerzlinderung", value: parsedData.painRelief },
    { label: "Schmerzverstärkung", value: parsedData.painAggravation },
    { label: "Vorherige medizinische Betreuung", value: parsedData.previousMedicalCare },
    { label: "Probleme mit Funktionalität", value: parsedData.functionalIssues },
    { label: "Andere begleitende Symptome", value: parsedData.additionalSymptoms },
  ]);

  // (3) Reise- und Impfstatus
  yPos = addTileSection(doc, yPos, "Reise- und Impfstatus", [
    { label: "Impfung", value: parsedData.vaccination },
    { label: "Reise", value: parsedData.travelHistory },
  ]);

  // (4) Vegetative Anamnese
  yPos = addTileSection(doc, yPos, "Vegetative Anamnese", [
    { label: "Allgemeiner Zustand", value: parsedData.generalCondition },
    { label: "Appetit", value: parsedData.appetite },
    { label: "Gewicht", value: parsedData.weightLoss },
    { label: "Durstgefühl", value: parsedData.thirst },
    { label: "Übelkeit", value: parsedData.nausea },
    { label: "Erbrechen", value: parsedData.vomiting },
    { label: "Stuhlgang", value: parsedData.bowelMovement },
    { label: "Wasserlassen", value: parsedData.urination },
    { label: "Schwitzen", value: parsedData.sweating },
    { label: "Schwindel", value: parsedData.vertigo },
    { label: "Bewusstsein", value: parsedData.consciousness },
    { label: "Herzklopfen", value: parsedData.palpitations },
    { label: "Atemnot", value: parsedData.shortnessOfBreath },
    { label: "Hitzewallungen", value: parsedData.hotFlashes },
    { label: "Kältegefühl", value: parsedData.coldFeeling },
    { label: "Schlafen", value: parsedData.sleep },
    { label: "Sexualanamnese", value: parsedData.sexualHistory },
    { label: "Sonstiges", value: parsedData.others },
    { label: "Gynäkologische Anamnese", value: parsedData.gynecologicalHistory },
  ]);

  // (5) Zusammenfassung
  // !!! Переконайтеся, що ви викликаєте stripMarkdownExceptBold
  const summaryClean = stripMarkdownExceptBold(parsedData.summary);
  yPos = addTileSection(doc, yPos, "Zusammenfassung", [
    { label: "", value: summaryClean },
  ]);

  // (6) Familienanamnese
  yPos = addTileSection(doc, yPos, "Familienanamnese", [
    { label: "Genetische Erkrankungen", value: parsedData.geneticDiseases },
    { label: "Eltern", value: parsedData.parents },
    { label: "Geschwister", value: parsedData.siblings },
  ]);

  // (7) Sozialanamnese
  yPos = addTileSection(doc, yPos, "Sozialanamnese", [
    { label: "Beruf", value: parsedData.profession },
    { label: "Familienstand", value: parsedData.maritalStatus },
    { label: "Kinder", value: parsedData.children },
    { label: "Wohnsituation", value: parsedData.livingConditions },
    { label: "Psychosomatische Anamnese/Stress", value: parsedData.psychosomaticHistory },
    { label: "Körperliche Aktivität", value: parsedData.physicalActivity },
    { label: "Ernährungsgewohnheiten", value: parsedData.dietaryHabits },
  ]);

  // (8) Vorerkrankungen
  yPos = addTileSection(doc, yPos, "Vorerkrankungen", [
    { label: "Infektionskrankheiten", value: parsedData.infectiousDiseases },
    { label: "Chronische Erkrankungen", value: parsedData.chronicDiseases },
    { label: "Weitere relevante Erkrankungen", value: parsedData.otherRelevantDiseases },
  ]);

  // (9) Frühere Operationen
  yPos = addTileSection(doc, yPos, "Frühere Operationen", [
    { label: "Frühere Operationen", value: parsedData.pastOperations },
    { label: "Operationsverlauf und Komplikationen", value: parsedData.operationCourseComplications },
    { label: "Dauer des Krankenhausaufenthalts", value: parsedData.hospitalStayDuration },
  ]);

  // (10) Medikamentenanamnese
  yPos = addTileSection(doc, yPos, "Medikamentenanamnese", [
    { label: "Medikamenteneinnahme", value: parsedData.allgemeineMedikamenteneinnahme },
    { label: "Medikamenteninformationen", value: parsedData.detaillierteMedikamenteninformationen },
  ]);

  // (11) Allergien und Unverträglichkeiten
  yPos = addTileSection(doc, yPos, "Allergien und Unverträglichkeiten", [
    { label: "Medikamentenallergien", value: parsedData.specificMedicationAllergies },
    { label: "Symptomatik allergischer Reaktionen", value: parsedData.allergicReactionSymptoms },
    { label: "Allergieauslöser", value: parsedData.allergyTriggers },
    { label: "Haushaltsallergene", value: parsedData.householdAllergens },
    { label: "Unverträglichkeiten", value: parsedData.specificIntolerances },
  ]);

  // (12) Noxen
  yPos = addTileSection(doc, yPos, "Noxen", [
    { label: "Rauchverhalten", value: parsedData.rauchverhalten },
    { label: "Alkoholkonsum", value: parsedData.alkoholkonsum },
    { label: "Drogengebrauch", value: parsedData.drogengebrauch },
  ]);

  // (13) Differentialdiagnose
  yPos = addTileSection(doc, yPos, "Differentialdiagnose", [
    { label: "Differentiale Diagnosen", value: parsedData.possibleDiagnoses },
    { label: "Abgrenzung", value: parsedData.differentiation },
  ]);

  // (14) Vorläufige Diagnose
  yPos = addTileSection(doc, yPos, "Vorläufige Diagnose", [
    { label: "Vermutete Diagnose", value: parsedData.suspectedDiagnosis },
    { label: "Begründung", value: parsedData.justification },
  ]);

  // (15) Diagnostische Empfehlungen
  yPos = addTileSection(doc, yPos, "Diagnostische Empfehlungen", [
    { label: "Körperliche Untersuchung", value: parsedData.physicalExamination },
    { label: "Laboruntersuchung", value: parsedData.laboratoryTests },
    { label: "Apparative Untersuchung", value: parsedData.instrumentalExamination },
  ]);

  // (16) Patientenfragen
  const patientQClean = stripMarkdownExceptBold(parsedData.patientQuestions);
  yPos = addTileSection(doc, yPos, "Patientenfragen", [
    { label: "", value: patientQClean },
  ], true);

  // (17) Fragen des Prüfers
  const examinerQClean = stripMarkdownExceptBold(parsedData.examinerQuestions);
  yPos = addTileSection(doc, yPos, "Fragen des Prüfers", [
    { label: "", value: examinerQClean },
  ], true);

  // Наприкінці — футер, щоб з'явився на останній сторінці
  drawFooter(doc);

  return doc;
}

/**
 * (E) Перегляд PDF у новій вкладці
 */
export const previewFSPPDF = (parsedData, regionName = "") => {
  if (!parsedData) {
    alert("parsedData is empty or undefined!");
    return;
  }
  const doc = createFSPPDFDocument(parsedData, regionName);
  const pdfBlobUrl = doc.output("bloburl");
  window.open(pdfBlobUrl, "_blank");
};

/**
 * (F) Завантаження PDF
 */
export const downloadFSPPDF = (parsedData, regionName = "") => {
  if (!parsedData) {
    alert("parsedData is empty or undefined!");
    return;
  }
  const doc = createFSPPDFDocument(parsedData, regionName);
  doc.save("FSPFormular.pdf");
};

/**
 * (G) Допоміжна функція виводу розділу
 */
function addTileSection(doc, startY, sectionTitle, fields, preserveBold = false) {
  let yPos = startY;
  const pageHeight = doc.internal.pageSize.getHeight();
  const bottomMargin = 15;
  const leftMargin = 10;
  const maxWidth = 180; // Ширина для тексту

  // Фільтруємо порожні
  const nonEmptyFields = fields.filter(
    (f) => f.value && String(f.value).trim() !== ""
  );
  if (nonEmptyFields.length === 0) return yPos;

  // Перевіряємо, чи є місце для заголовка
  if (yPos > pageHeight - bottomMargin - 10) {
    yPos = doPageBreak();
  }

  // Заголовок
  doc.setFont("arial", "bold");
  doc.setFontSize(14);
  doc.text(sectionTitle, leftMargin, yPos);
  yPos += 10;

  // Кожне поле
  nonEmptyFields.forEach((field) => {
    if (yPos > pageHeight - bottomMargin - 10) {
      yPos = doPageBreak();
    }

    // (A) label
    doc.setFont("arial", "bold");
    doc.setFontSize(12);

    let labelStr = "";
    let labelWidth = 0;
    if (field.label && field.label.trim() !== "") {
      labelStr = `${field.label}: `;
      labelWidth = doc.getTextWidth(labelStr);
      doc.text(labelStr, leftMargin, yPos);
    }

    // (B) value
    doc.setFont("arial", "normal");
    doc.setFontSize(12);

    const splitted = doc.splitTextToSize(
      String(field.value),
      maxWidth - labelWidth
    );

    if (splitted.length > 0) {
      // Перший рядок
      if (preserveBold) {
        printMarkdownLine(doc, splitted[0], leftMargin + labelWidth, yPos);
      } else {
        doc.text(splitted[0], leftMargin + labelWidth, yPos);
      }
    }

    for (let i = 1; i < splitted.length; i++) {
      yPos += 6;
      if (yPos > pageHeight - bottomMargin - 10) {
        yPos = doPageBreak();
      }
      if (preserveBold) {
        printMarkdownLine(doc, splitted[i], leftMargin, yPos);
      } else {
        doc.text(splitted[i], leftMargin, yPos);
      }
    }

    yPos += 10; // відступ після поля
  });

  yPos += 5;
  return yPos;

  // Внутрішня функція для переносу сторінки
  function doPageBreak() {
    drawFooter(doc);
    doc.addPage();
    return 10;
  }
}

/**
 * (H) Друкує рядок, розбиваючи '**bold**' сегменти.
 * Якщо isBold==true, друкуємо один раз жирним.
 */
function printMarkdownLine(doc, lineStr, x, y) {
  const segments = splitBoldSegments(lineStr);
  let currentX = x;

  segments.forEach((seg) => {
    if (!seg.text) return;
    const w = doc.getTextWidth(seg.text);

    if (seg.isBold) {
      doc.setFont("arial", "bold");
      doc.text(seg.text, currentX, y);
      doc.setFont("arial", "normal");
    } else {
      doc.text(seg.text, currentX, y);
    }
    currentX += w;
  });
}