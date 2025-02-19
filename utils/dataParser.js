// src/utils/dataParser.js

export const parseData = async (sourceId, type, collection = null, fileId = null) => {
  console.log(">>> parseData called with sourceId =", sourceId, "type =", type, "collection =", collection, "fileId =", fileId);

  if (type === "local") {
    try {
      console.log(`>>> Attempting dynamic import for ../constants/translation/Fall/${sourceId}.js`);
      // Якщо sourceId = "Thüringen", то шукає "Fall/Thüringen.js"
      const dataModule = await import(`../constants/translation/Fall/${sourceId}.js`);
      console.log(">>> Successfully imported local data module:", dataModule);

      return dataModule.default; // маємо масив об’єктів
    } catch (error) {
      console.error(`❌ Error loading local data for sourceId ${sourceId}:`, error);
      return [];
    }
  } else if (type === "firebase") {
    // тут ваша логіка
    // Наприклад:
    try {
      const response = await fetch(`https://your-firebase-url.com/${collection}/${fileId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`❌ Error loading Firebase data for collection ${collection}, fileId ${fileId}:`, error);
      return null;
    }
  }

  return [];
};