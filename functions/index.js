const functions = require("firebase-functions");
const fetch = require("node-fetch");

exports.callOpenAI = functions.https.onRequest(async (req, res) => {
  const apiKey = functions.config().openai.key;

  if (!apiKey) {
    res.status(500).send("API ключ не налаштовано.");
    return;
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: req.body.messages,
      }),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Помилка:", error);
    res.status(500).send("Помилка сервера.");
  }
});
