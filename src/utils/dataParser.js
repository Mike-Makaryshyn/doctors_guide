// src/utils/dataParser.js

import { supabase } from "../supabaseClient";

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
  } else if (type === "supabase") {
    // Fetch case JSONB array for this region and return the specific case
    try {
      const { data: record, error } = await supabase
        .from("cases")
        .select("cases")
        .eq("id", sourceId)
        .single();
      if (error) throw error;
      const casesArray = record?.cases || [];
      // Find the specific case by fileId
      const found = casesArray.find((c) => String(c.id) === String(fileId));
      return found ? [found] : [];
    } catch (error) {
      console.error(`❌ Error loading Supabase data for sourceId ${sourceId}, fileId ${fileId}:`, error);
      return [];
    }
  }

  return [];
};