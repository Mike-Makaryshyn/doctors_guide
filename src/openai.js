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
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      temperature: 0.8,
      messages: [{ role: "user", content: prompt }]
    })
  });

  if (!res.ok) {
    const error = (await res.json())?.error || "Помилка на сервері";
    throw new Error(error);
  }

  const { choices } = await res.json();
  return choices[0].message.content;
}
