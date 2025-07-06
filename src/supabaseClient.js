// ───────────────────────────────────────────────────────────────────────────────
// src/supabaseClient.js
// ───────────────────────────────────────────────────────────────────────────────

import { createClient } from "@supabase/supabase-js";

// -----------------------------------------------------------------------------
// Змінні середовища (Vite вимагає, щоб усі свої env-перемінні починалися з VITE_)
// -----------------------------------------------------------------------------
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if we have valid Supabase configuration
const hasValidSupabaseConfig = supabaseUrl && supabaseAnonKey && 
                              supabaseUrl !== 'your_supabase_project_url_here' && 
                              supabaseAnonKey !== 'your_supabase_anon_key_here';

if (!hasValidSupabaseConfig) {
  console.warn(
    "[supabaseClient] Увага! Відсутні VITE_SUPABASE_URL або VITE_SUPABASE_ANON_KEY у змінних середовища."
  );
}

// ----------------------------------------------------------------------------
// Створюємо клієнт Supabase
// ----------------------------------------------------------------------------
export const supabase = hasValidSupabaseConfig ? createClient(supabaseUrl, supabaseAnonKey, {
  auth: { detectSessionInUrl: true },
}) : null;

// ----------------------------------------------------------------------------
// Приклад 1: Створити Stripe Checkout session для підписки.
// Викликає Edge Function 'create-subscription-session'.
// ----------------------------------------------------------------------------
export async function createSubscriptionSession(userId) {
  if (!supabase) {
    throw new Error("Supabase ist nicht konfiguriert");
  }
  
  const { data, error } = await supabase.functions.invoke(
    "create-subscription-session",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId }),
    }
  );
  if (error) throw error;
  return data.url;
}

// ----------------------------------------------------------------------------
// Приклад 2: Створити Stripe Checkout session для покупки токенів.
// Викликає Edge Function 'create-token-session'.
// ----------------------------------------------------------------------------
export async function createTokenSession(userId, tokenCount) {
  if (!supabase) {
    throw new Error("Supabase ist nicht konfiguriert");
  }
  
  const { data, error } = await supabase.functions.invoke(
    "create-token-session",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, token_count: tokenCount }),
    }
  );
  if (error) throw error;
  return data.url;
}

// ----------------------------------------------------------------------------
// Приклад 3: Надіслати лист-підтвердження для «simulation submission».
// Викликає Edge Function 'send-simulation-confirmation'.
// ----------------------------------------------------------------------------
export async function sendSimulationConfirmation(email, firstName, lastName, region) {
  if (!supabase) {
    throw new Error("Supabase ist nicht konfiguriert");
  }
  
  const { data, error } = await supabase.functions.invoke(
    "send-simulation-confirmation",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, firstName, lastName, region }),
    }
  );
  if (error) throw error;
  return data;
}

// ----------------------------------------------------------------------------
// НОВА ФУНКЦІЯ: simulation-email
// ----------------------------------------------------------------------------
/**
 * Send an email related to simulation.
 * Викликає Edge Function 'simulation-email'.
 *
 * @param {string} email
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} region
 * @param {Array} arraycases   // передаємо масив, якщо він є
 */
export async function simulationEmail(email, firstName, lastName, region, arraycases) {
  if (!supabase) {
    throw new Error("Supabase ist nicht konfiguriert");
  }
  
  // Для діагностики: виводимо те, що відправляємо
  console.log("[simulationEmail] payload:", JSON.stringify({ email, firstName, lastName, region, arraycases }));

  const { data, error } = await supabase.functions.invoke(
    "simulation-email",
    {
      method: "POST",
      body: JSON.stringify({ email, firstName, lastName, region, arraycases }),
    }
  );

  if (error) throw error;
  return data;
}