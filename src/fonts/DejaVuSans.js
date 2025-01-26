// Це приклад. Ваш файл шрифту буде виглядати інакше після конвертації.
import { jsPDF } from "jspdf";

export const DejaVuSans = {
  normal: "DejaVuSans",
  bold: "DejaVuSans-Bold",
  italics: "DejaVuSans-Oblique",
  bolditalics: "DejaVuSans-BoldOblique",
};

jsPDF.API.events.push(["addFonts", function () {
  this.addFileToVFS("DejaVuSans.ttf", "BASE64_ENCODED_FONT_DATA");
  this.addFont("DejaVuSans.ttf", "DejaVuSans", "normal");
  // Додайте інші стилі за потребою
}]);