// src/utils/firebaseUtils.js

import { supabase } from "../supabaseClient";

/**
 * Loads data from Supabase.
 * @param {string} table - Name of the table.
 * @param {string|number} id - Record identifier.
 * @returns {Promise<Object>} - The record data.
 */
export const fetchDataFromSupabase = async (table, id) => {
  if (!supabase) {
    throw new Error("Supabase ist nicht konfiguriert");
  }
  
  try {
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error loading data from Supabase:", error);
    throw error;
  }
};