// src/services/openai.js

/**
 * Надсилає prompt у Supabase Edge Function
 * @param {string} prompt — текст запиту до моделі
 * @returns {Promise<string>} — відповідь моделі
 */
export async function askOpenAI(prompt) {
  const API_URL = import.meta.env.VITE_OPENAI_PROXY_URL;
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      temperature: 0.8,
      messages: [{ role: "user", content: prompt }]
    })
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenAI proxy error: ${res.status} — ${err}`);
  }

  const { choices } = await res.json();
  return choices[0].message.content;
}