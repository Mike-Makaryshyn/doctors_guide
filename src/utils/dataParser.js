// src/utils/dataParser.js

export const parseData = async (sourceId, type, collection, fileId) => {
    console.log(">>> parseData called with sourceId =", sourceId, "type =", type, "collection =", collection, "fileId =", fileId);
  
    if (type === "local") {
      try {
        console.log(`>>> Attempting dynamic import for ../constants/translation/Fall/${sourceId}.js`);
        // Якщо sourceId = "Thueringen", то шукає "Fall/Thueringen.js"
        const dataModule = await import(`../constants/translation/Fall/${sourceId}.js`);
        console.log(">>> Successfully imported local data module:", dataModule);
  
        return dataModule.default; // маємо масив об’єктів
      } catch (error) {
        console.error(`❌ Error loading local data for sourceId ${sourceId}:`, error);
        return [];
      }
    } else if (type === "firebase") {
      // тут ваша логіка
    }
  
    return [];
  };