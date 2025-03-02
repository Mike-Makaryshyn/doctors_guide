import jsPDF from "jspdf";

// Допоміжна функція для вилучення міста з поля "PLZ, Ort"
const extractCity = (plzOrt) => {
  const parts = plzOrt.split(",");
  return parts.length > 1 ? parts[1].trim() : "";
};

// Функція форматування дати за німецьким стандартом
const formatDateInGerman = () => {
  const today = new Date();
  return today.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

// Основна функція для створення PDF
function createLetterPDF(personalData, addressData, letterText) {
  const doc = new jsPDF({
    unit: "pt", // Використовуємо пункти
    format: "A4",
  });

  // Базові параметри шрифту
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10);

  const pageWidth = doc.internal.pageSize.getWidth();
  const leftMargin = 50;
  const rightMargin = 50;
  let yPos = 50; // Початкова позиція

  // -----------------------------
  // 1) Адреса відправника (справа зверху)
  // -----------------------------
  const senderLines = [];
  if (personalData.name) senderLines.push(personalData.name);
  if (personalData.strasse) senderLines.push(personalData.strasse);
  if (personalData.plzOrt) senderLines.push(personalData.plzOrt);
  if (personalData.email) senderLines.push(personalData.email);

  senderLines.forEach((line) => {
    doc.text(line, pageWidth - rightMargin, yPos, { align: "right" });
    yPos += 16;
  });

  // Якщо Aktenzeichen увімкнено і заповнено
  if (personalData.aktenzeichenEnabled && personalData.aktenzeichen) {
    // Пишемо звичайним (не жирним) шрифтом
    doc.text(`Aktenzeichen: ${personalData.aktenzeichen}`, pageWidth - rightMargin, yPos, {
      align: "right",
    });
    yPos += 16;
  }

  yPos += 20;

  // -----------------------------
  // 2) Адреса одержувача (зліва)
  // -----------------------------
  if (addressData) {
    if (addressData.office) {
      doc.text(addressData.office, leftMargin, yPos);
      yPos += 16;
    }
    if (addressData.department) {
      doc.text(addressData.department, leftMargin, yPos);
      yPos += 16;
    }
    // Якщо addressData.address є масивом – виводимо кожен рядок окремо
    if (Array.isArray(addressData.address)) {
      addressData.address.forEach((addrLine) => {
        doc.text(addrLine, leftMargin, yPos);
        yPos += 16;
      });
    } else if (typeof addressData.address === "string") {
      // Якщо це рядок, спробуємо розбити за символом нового рядка
      const splittedAddr = addressData.address.split("\n");
      splittedAddr.forEach((addrLine) => {
        doc.text(addrLine.trim(), leftMargin, yPos);
        yPos += 16;
      });
    }
    if (addressData.email) {
      const emailText =
        typeof addressData.email === "object"
          ? JSON.stringify(addressData.email)
          : addressData.email;
      doc.text(`E-Mail: ${emailText}`, leftMargin, yPos);
      yPos += 16;
    }
  } else {
    doc.text("Keine Adresse gefunden.", leftMargin, yPos);
    yPos += 16;
  }

  yPos += 20;

  // -----------------------------
  // 3) Дата справа (з містом)
  // -----------------------------
  const city = extractCity(personalData.plzOrt);
  const dateStr = formatDateInGerman();
  const cityDateLine = city ? `${city}, ${dateStr}` : dateStr;

  doc.text(cityDateLine, pageWidth - rightMargin, yPos, { align: "right" });
  yPos += 30;

  // -----------------------------
  // 4) Основний текст листа (з підхопленням "Betreff:")
  // -----------------------------
  const textWidth = pageWidth - leftMargin - rightMargin;
  const splittedText = doc.splitTextToSize(letterText, textWidth);

  splittedText.forEach((line) => {
    // Якщо рядок починається з "Betreff:"
    if (line.startsWith("Betreff:")) {
      // 1) "Betreff:" без пробілу
      const boldPart = "Betreff:";
      // 2) Решта рядка після "Betreff:"
      const rest = line.slice(boldPart.length);

      // "Betreff:" жирним
      doc.setFont("Helvetica", "bold");
      doc.text(boldPart, leftMargin, yPos);
      doc.setFont("Helvetica", "normal");

      // Вимірюємо ширину "Betreff:"
      const boldWidth = doc.getTextWidth(boldPart);

      // Друкуємо пробіл + решту тексту
      doc.text(" " + rest, leftMargin + boldWidth, yPos);
    } else {
      doc.text(line, leftMargin, yPos);
    }
    yPos += 16;
  });

  return doc;
}

// Експорт функцій
export const previewLetterPDF = (personalData, addressData, letterText) => {
  const doc = createLetterPDF(personalData, addressData, letterText);
  const pdfBlobUrl = doc.output("bloburl");
  window.open(pdfBlobUrl, "_blank");
};

export const downloadLetterPDF = (personalData, addressData, letterText) => {
  const doc = createLetterPDF(personalData, addressData, letterText);
  doc.save("cover_letter.pdf");
};