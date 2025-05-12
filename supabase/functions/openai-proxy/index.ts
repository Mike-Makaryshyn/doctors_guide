// @ts-nocheck
// supabase/functions/openai-proxy/index.ts
import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

serve(async (req) => {
  // 1) Дістаємо ключ із Secrets Supabase
  const apiKey = Deno.env.get("OPENAI_API_KEY");
  if (!apiKey) {
    return new Response("Missing OpenAI API key", { status: 500 });
  }

  // 2) Проксіруємо запит до OpenAI
  const body = await req.json();
  const proxyRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  // 3) Повертаємо клієнту відповідь від OpenAI
  const data = await proxyRes.json();
  return new Response(JSON.stringify(data), {
    status: proxyRes.status,
    headers: { "Content-Type": "application/json" }
  });
});