// api/chat.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res.status(200).end();
  }

  res.setHeader("Access-Control-Allow-Origin", "*");

  // Приймаємо лише POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Розпаковуємо тіло запиту
  const { messages, model = "gpt-3.5-turbo", temperature = 0.8 } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "OpenAI API key not set" });
  }

  try {
    // Проксі-запит до OpenAI
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model, temperature, messages }),
    });

    const data = await openaiRes.json();
    return res.status(openaiRes.status).json(data);

  } catch (err) {
    console.error("OpenAI proxy error:", err);
    return res.status(500).json({ error: "Proxy error" });
  }
}