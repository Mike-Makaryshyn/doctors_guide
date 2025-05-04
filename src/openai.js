// src/services/openai.js

/**
 * Надсилає POST-запит на твою Vercel Function
 * @param {string} prompt — текст запиту до моделі
 * @returns {Promise<string>} — текст відповіді від OpenAI
 */
export async function askOpenAI(prompt) {
  const res = await fetch("/api/secret-proxy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  if (!res.ok) {
    const error = (await res.json())?.error || "Помилка на сервері";
    throw new Error(error);
  }

  const { text } = await res.json();
  return text;
}
