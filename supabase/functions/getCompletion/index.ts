import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Configuration, OpenAIApi } from "npm:openai";

serve(async (req) => {
  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "messages must be an array" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const apiKey = Deno.env.get("OPENAI_API_KEY");
    if (!apiKey) throw new Error("OpenAI API key not found");

    const configuration = new Configuration({ apiKey });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages,
    });

    return new Response(JSON.stringify(completion.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("🔥 getCompletion error:", error);
    return new Response(
      JSON.stringify({
        error: error.message,
        stack: error.stack,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
});