import { Configuration, OpenAIApi } from "openai";

// API base URL: use Vercel in production, else local
const API_BASE_URL = import.meta.env.MODE === "production"
  ? "https://neusteapp.vercel.app/api"
  : "/api";

export default async function handler(req, res) {
  console.log("DEBUG secret-proxy: OPENAI_API_KEY=", process.env.OPENAI_API_KEY);
  // —— Налаштування CORS ——
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Обробка preflight-запитів
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  // Дозволяємо GET для швидкого тесту
  if (req.method === "GET") {
    const hasKey = Boolean(process.env.OPENAI_API_KEY);
    return res.status(200).json({
      ok: true,
      info: "GET працює",
      hasApiKey: hasKey
    });
  }

  // Приймаємо лише POST для справжнього виклику
  if (req.method !== "POST") {
    // Вказуємо, які методи дозволені
    res.setHeader("Allow", ["GET", "POST", "OPTIONS"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  // Ось тут – ваш справжній POST-обробник:
  const openaiKey = process.env.OPENAI_API_KEY;
  if (!openaiKey) {
    return res.status(500).json({ error: "API key not configured." });
  }

  const configuration = new Configuration({ apiKey: openaiKey });
  const openai = new OpenAIApi(configuration);

  const { model, temperature, messages } = req.body;
  if (!messages) {
    return res.status(400).json({ error: "Missing messages in body" });
  }

  try {
    const completion = await openai.createChatCompletion({
      model: model || "gpt-3.5-turbo",
      temperature: temperature ?? 0.8,
      messages,
    });
    return res
      .status(200)
      .json({ choices: completion.data.choices });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "OpenAI request failed." });
  }
}
