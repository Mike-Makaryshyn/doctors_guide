// src/pages/FSPFormularPage/pdfFSPFormular.js

import jsPDF from "jspdf";
import "jspdf-autotable";

/**
 * (A) Спрощена функція для очищення Markdown,
 * але лишаємо в спокої '**' щоб потім обробити жирне.
 * Прибираємо всі інші символи: `_ # >` і блоки ```...```.
 */
function stripMarkdownExceptBold(text) {
  if (!text) return "";
  let result = text;
  // Видаляємо блоки ```...```
  result = result.replace(/```[^```]*```/gs, "");
  // Знімаємо _ (але не чіпаємо **)
  result = result.replace(/\_/g, "");
  // Прибираємо # і > (початок рядка)
  result = result.replace(/^#+\s?/gm, "");
  result = result.replace(/^>\s?/gm, "");
  return result.trim();
}

/**
 * Розбиває рядок на сегменти з урахуванням '**'.
 * Напр.: "Hello **bold** world" => ["Hello ", "**bold**", " world"].
 * Використовуємо потім, щоб сегмент з '**' вивести жирним.
 */
function splitBoldSegments(line) {
  // Якщо немає `**`, повертаємо весь рядок як один сегмент
  if (!line.includes("**")) {
    return [{ text: line, isBold: false }];
  }

  const segments = [];
  let startIndex = 0;
  let isBold = false;

  // Шукаємо усі входження `**`
  let match;
  const pattern = /\*\*/g;
  while ((match = pattern.exec(line)) !== null) {
    const idx = match.index;
    // Сегмент між startIndex і idx
    if (idx > startIndex) {
      segments.push({
        text: line.slice(startIndex, idx),
        isBold,
      });
    }
    // Перемикаємо isBold
    isBold = !isBold;
    startIndex = idx + 2; // пропускаємо **
  }

  // Останній шматок
  if (startIndex < line.length) {
    segments.push({ text: line.slice(startIndex), isBold });
  }

  return segments;
}

/**
 * Малює колонтитул (footer) на поточній сторінці.
 * Викликаємо перед тим, як перейти на нову сторінку,
 * і обов’язково один раз у кінці документу.
 */
function drawFooter(doc) {
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);

  // Текст колонтитулу (знизу сторінки)
  doc.text(
    "GermanMove jour provide to Germany Approbation                      deutsche-approbation.com",
    10,
    pageHeight - 5
  );
}

/**
 * Головна функція створення PDF-документа
 */
function createFSPPDFDocument(parsedData, regionName = "") {
  const doc = new jsPDF({
    // Наприклад: format: "a4", orientation: "p"
  });

  let yPos = 10;

  // Використовуємо helvetica для сучаснішого вигляду
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  const pageHeight = doc.internal.pageSize.getHeight();
  const pageWidth = doc.internal.pageSize.getWidth();

  /**
   * функція-хелпер для створення «нової сторінки»:
   * 1) Малюємо footer на поточній
   * 2) doc.addPage()
   * 3) Повертаємо 10 (початок yPos)
   */
  function doPageBreak() {
    // Спочатку домальовуємо footer для поточної сторінки
    drawFooter(doc);
    doc.addPage();
    return 10; // Початок нової сторінки
  }

  // -- Якщо є fullName або regionName, друкуємо праворуч угорі
  if (parsedData.fullName || regionName) {
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");

    const textToPrint = regionName
      ? `${parsedData.fullName || ""} (${regionName})`
      : parsedData.fullName;

    doc.text(textToPrint.trim(), pageWidth - 10, yPos, {
      align: "right",
    });
    yPos += 8;
  }

  // -- Якщо є поле T, друкуємо також праворуч, меншим шрифтом
  if (parsedData.T) {
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`T: ${parsedData.T}`, pageWidth - 10, yPos, { align: "right" });
    yPos += 6;
  }

  // (1) Persönliche Daten
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
        ? `${parsedData.birthdate}${parsedData.age ? " / " + parsedData.age : ""}`
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
  ], doc);

  // (2) Aktuelle Anamnese
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
  ], doc);

  // (3) Reise- und Impfstatus
  yPos = addTileSection(doc, yPos, "Reise- und Impfstatus", [
    {
      label: "Impfung",
      value: parsedData.vaccination,
    },
    {
      label: "Reise",
      value: parsedData.travelHistory,
    },
  ], doc);

  // (4) Vegetative Anamnese
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
      value: parsedData.weightLoss,
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
  ], doc);

  // (5) Zusammenfassung
  const summaryClean = stripMarkdownExceptBold(parsedData.summary);
  yPos = addTileSection(doc, yPos, "Zusammenfassung", [
    {
      label: "",
      value: summaryClean,
    },
  ], doc);

  // (6) Familienanamnese
  yPos = addTileSection(doc, yPos, "Familienanamnese", [
    {
      label: "Genetische Erkrankungen",
      value: parsedData.geneticDiseases,
    },
    {
      label: "Eltern",
      value: parsedData.parents,
    },
    {
      label: "Geschwister",
      value: parsedData.siblings,
    },
  ], doc);

  // (7) Sozialanamnese
  yPos = addTileSection(doc, yPos, "Sozialanamnese", [
    {
      label: "Beruf",
      value: parsedData.profession,
    },
    {
      label: "Familienstand",
      value: parsedData.maritalStatus,
    },
    {
      label: "Kinder",
      value: parsedData.children,
    },
    {
      label: "Wohnsituation",
      value: parsedData.livingConditions,
    },
    {
      label: "Psychosomatische Anamnese/Stress",
      value: parsedData.psychosomaticHistory,
    },
    {
      label: "Körperliche Aktivität",
      value: parsedData.physicalActivity,
    },
    {
      label: "Ernährungsgewohnheiten",
      value: parsedData.dietaryHabits,
    },
  ], doc);

  // (8) Vorerkrankungen
  yPos = addTileSection(doc, yPos, "Vorerkrankungen", [
    {
      label: "Infektionskrankheiten",
      value: parsedData.infectiousDiseases,
    },
    {
      label: "Chronische Erkrankungen",
      value: parsedData.chronicDiseases,
    },
    {
      label: "Weitere relevante Erkrankungen",
      value: parsedData.otherRelevantDiseases,
    },
  ], doc);

  // (9) Frühere Operationen
  yPos = addTileSection(doc, yPos, "Frühere Operationen", [
    {
      label: "Frühere Operationen",
      value: parsedData.pastOperations,
    },
    {
      label: "Operationsverlauf und Komplikationen",
      value: parsedData.operationCourseComplications,
    },
    {
      label: "Dauer des Krankenhausaufenthalts",
      value: parsedData.hospitalStayDuration,
    },
  ], doc);

  // (10) Medikamentenanamnese
  yPos = addTileSection(doc, yPos, "Medikamentenanamnese", [
    {
      label: "Medikamenteneinnahme",
      value: parsedData.allgemeineMedikamenteneinnahme,
    },
    {
      label: "Medikamenteninformationen",
      value: parsedData.detaillierteMedikamenteninformationen,
    },
  ], doc);

  // (11) Allergien und Unverträglichkeiten
  yPos = addTileSection(doc, yPos, "Allergien und Unverträglichkeiten", [
    {
      label: "Medikamentenallergien",
      value: parsedData.specificMedicationAllergies,
    },
    {
      label: "Symptomatik allergischer Reaktionen",
      value: parsedData.allergicReactionSymptoms,
    },
    {
      label: "Allergieauslöser",
      value: parsedData.allergyTriggers,
    },
    {
      label: "Haushaltsallergene",
      value: parsedData.householdAllergens,
    },
    {
      label: "Unverträglichkeiten",
      value: parsedData.specificIntolerances,
    },
  ], doc);

  // (12) Noxen
  yPos = addTileSection(doc, yPos, "Noxen", [
    {
      label: "Rauchverhalten",
      value: parsedData.rauchverhalten,
    },
    {
      label: "Alkoholkonsum",
      value: parsedData.alkoholkonsum,
    },
    {
      label: "Drogengebrauch",
      value: parsedData.drogengebrauch,
    },
  ], doc);

  // (13) Differentialdiagnose
  yPos = addTileSection(doc, yPos, "Differentialdiagnose", [
    {
      label: "Differentiale Diagnosen",
      value: parsedData.possibleDiagnoses,
    },
    {
      label: "Abgrenzung",
      value: parsedData.differentiation,
    },
  ], doc);

  // (14) Vorläufige Diagnose
  yPos = addTileSection(doc, yPos, "Vorläufige Diagnose", [
    {
      label: "Vermutete Diagnose",
      value: parsedData.suspectedDiagnosis,
    },
    {
      label: "Begründung",
      value: parsedData.justification,
    },
  ], doc);

  // (15) Diagnostische Empfehlungen
  yPos = addTileSection(doc, yPos, "Diagnostische Empfehlungen", [
    {
      label: "Körperliche Untersuchung",
      value: parsedData.physicalExamination,
    },
    {
      label: "Laboruntersuchung",
      value: parsedData.laboratoryTests,
    },
    {
      label: "Apparative Untersuchung",
      value: parsedData.instrumentalExamination,
    },
  ], doc);

  // (16) Patientenfragen (Markdown, збереження жирного)
  const patientQClean = stripMarkdownExceptBold(parsedData.patientQuestions);
  yPos = addTileSection(doc, yPos, "Patientenfragen", [
    {
      label: "",
      value: patientQClean,
    },
  ], doc, true);

  // (17) Fragen des Prüfers (Markdown, збереження жирного)
  const examinerQClean = stripMarkdownExceptBold(parsedData.examinerQuestions);
  yPos = addTileSection(doc, yPos, "Fragen des Prüfers", [
    {
      label: "",
      value: examinerQClean,
    },
  ], doc, true);

  return doc;
}

/**
 * (C) Перегляд PDF у новій вкладці
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
 * (D) Завантаження PDF
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
 * (E) Допоміжна функція виводу розділу
 * - Тільки непорожні поля
 * - Заголовок секції (14px, жирний)
 * - Лейбл друкуємо «3x жирним» (times, bold, кілька разів), розмір 10px
 * - Менші відступи між рядками (для value: +4, після поля: +5)
 * - Якщо поле не вміщається – додаємо сторінку
 * - Якщо label порожній – не друкуємо «label:»
 * - Якщо preserveBold=true, шукаємо у value '**..**' і виводимо їх жирним.
 */
function addTileSection(doc, startY, sectionTitle, fields, docRef, preserveBold = false) {
  let yPos = startY;
  const pageHeight = doc.internal.pageSize.getHeight();
  const leftMargin = 10;
  const bottomMargin = 15; // запас знизу
  const maxWidth = 180;

  // Залишаємо лише непорожні поля
  const nonEmptyFields = fields.filter(
    (f) => f.value && String(f.value).trim() !== ""
  );
  if (nonEmptyFields.length === 0) return yPos;

  // Заголовок секції
  doc.setFont("times", "bold");
  doc.setFontSize(14);
  doc.text(sectionTitle, leftMargin, yPos);
  yPos += 8;

  // Друкуємо кожне поле
  nonEmptyFields.forEach((field) => {
    // Якщо майже немає місця – нова сторінка
    if (yPos > pageHeight - bottomMargin) {
      doc.addPage();
      yPos = 10;
    }

    // (A) label
    doc.setFont("times", "bold");
    doc.setFontSize(10);

    let labelStr = "";
    let labelWidth = 0;
    if (field.label && field.label.trim() !== "") {
      labelStr = `${field.label}: `;
      labelWidth = doc.getTextWidth(labelStr);
    }

    // (B) value
    doc.setFont("times", "normal");

    // якщо потрібно зберегти жирний текст, виділяємо '**'
    let splittedLines;
    if (preserveBold) {
      // Для зберігання bold, ми не split'имо textToSize одразу.
      // Спочатку розіб'ємо value на окремі рядки, splitTextToSize,
      // а потім для кожного рядка — на сегменти (isBold чи ні).
      const rawWrapped = doc.splitTextToSize(String(field.value), maxWidth - labelWidth - 2);
      splittedLines = rawWrapped; // масив рядків
    } else {
      // звичайний режим
      splittedLines = doc.splitTextToSize(String(field.value), maxWidth - labelWidth - 2);
    }

    // "3х жирний" лейбл
    if (labelStr) {
      const xLabel = leftMargin;
      const yLabel = yPos;
      for (let offsetY of [0, 0.1, -0.1]) {
        doc.text(labelStr, xLabel, yLabel + offsetY, {
          renderingMode: "fill",
        });
      }
    }

    // Перший ряд
    if (splittedLines.length > 0) {
      // Якщо preserveBold, друкуємо зі splitBoldSegments
      if (preserveBold) {
        printMarkdownLine(doc, splittedLines[0], leftMargin + labelWidth, yPos);
      } else {
        doc.text(splittedLines[0], leftMargin + labelWidth, yPos);
      }
    }

    // Решта рядків
    for (let i = 1; i < splittedLines.length; i++) {
      yPos += 4;
      if (yPos > pageHeight - bottomMargin) {
        doc.addPage();
        yPos = 10;
      }
      if (preserveBold) {
        printMarkdownLine(doc, splittedLines[i], leftMargin, yPos);
      } else {
        doc.text(splittedLines[i], leftMargin, yPos);
      }
    }

    yPos += 5; // відступ після поля
  });

  yPos += 5;
  return yPos;
}

/**
 * Допоміжна функція: друкує рядок, розбиваючи '**bold**' сегменти.
 * Для кожного сегмента: якщо isBold==true, друкуємо 3x.
 */
function printMarkdownLine(doc, lineStr, x, y) {
  const segments = splitBoldSegments(lineStr);
  let currentX = x;

  segments.forEach((seg) => {
    if (!seg.text) return;
    const w = doc.getTextWidth(seg.text);
    if (seg.isBold) {
      // 3х жирний
      doc.setFont("times", "bold");
      for (let offsetY of [0, 0.1, -0.1]) {
        doc.text(seg.text, currentX, y + offsetY, {
          renderingMode: "fill",
        });
      }
      // повертаємось
      doc.setFont("times", "normal");
    } else {
      doc.text(seg.text, currentX, y);
    }
    currentX += w;
  });
}