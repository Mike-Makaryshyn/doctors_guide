import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { detectSessionInUrl: true },
});

/**
 * Create a Stripe Checkout session for subscription.
 * @param {string} userId
 */
export async function createSubscriptionSession(userId) {
  const { data, error } = await supabase
    .functions
    .invoke('create-subscription-session', {
      method: 'POST',
      body: JSON.stringify({ user_id: userId }),
    });
  if (error) throw error;
  return data.url;
}

/**
 * Create a Stripe Checkout session for token purchase.
 * @param {string} userId
 * @param {number} tokenCount
 */
export async function createTokenSession(userId, tokenCount) {
  const { data, error } = await supabase
    .functions
    .invoke('create-token-session', {
      method: 'POST',
      body: JSON.stringify({ user_id: userId, token_count: tokenCount }),
    });
  if (error) throw error;
  return data.url;
}