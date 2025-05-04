// api/secret-proxy.js
import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  // 1) Перевірка методу (якщо треба)
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // 2) Забираємо ключ із середовища
  const openaiKey = process.env.OPENAI_API_KEY;
  if (!openaiKey) {
    return res.status(500).json({ error: "API key not configured." });
  }

  // 3) Ініціалізуємо клієнт OpenAI
  const configuration = new Configuration({ apiKey: openaiKey });
  const openai = new OpenAIApi(configuration);

  // 4) Беремо prompt з тіла запиту
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required." });
  }

  try {
    // 5) Звертаємося до OpenAI
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 100,
    });

    // 6) Повертаємо результат клієнту
    return res.status(200).json({ text: completion.data.choices[0].text });
  } catch (error) {
    console.error("OpenAI error:", error);
    return res.status(500).json({ error: "OpenAI request failed." });
  }
}
