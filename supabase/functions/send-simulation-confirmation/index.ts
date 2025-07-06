// supabase/functions/send-simulation-confirmation/index.ts

import { serve } from "https://deno.land/x/sift@0.5.0/mod.ts";
import nodemailer from "npm:nodemailer";

// Зчитуємо конфігурацію SMTP із середовища
const SMTP_HOST = Deno.env.get("SMTP_HOST")!;
const SMTP_PORT = Number(Deno.env.get("SMTP_PORT"));
const SMTP_USER = Deno.env.get("SMTP_USER")!;
const SMTP_PASS = Deno.env.get("SMTP_PASS")!;
const SENDER_EMAIL = Deno.env.get("SENDER_EMAIL")!;
const SENDER_NAME = Deno.env.get("SENDER_NAME")!;

// Створюємо транспортер nodemailer
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

serve(async (req) => {
  // 1) Обробка preflight-запиту (OPTIONS)
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        // Дозволяємо запити з будь-якого походження. 
        // Якщо потрібно обмежити лише локальним фронтендом, вкажіть "http://localhost:5173"
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        // Кешуємо результат preflight на добу (86400 секунд)
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  // 2) Якщо запит не OPTIONS і не POST — повертаємо 405
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method Not Allowed" }),
      {
        status: 405,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  }

  try {
    // 3) Розбираємо JSON-тіло POST-запиту
    const { email, firstName, lastName, region } = await req.json();

    if (!email || !region) {
      return new Response(
        JSON.stringify({ error: "Поля email і region є обов’язковими" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        }
      );
    }

    // 4) Формуємо тему та текст листа
    const subject = "Підтвердження подачі на симуляцію";
    const textBody = `
Доброго дня, ${firstName || ""} ${lastName || ""}!

Ви успішно подалися на симуляцію у регіоні "${region}".
Дякуємо, що скористалися нашим сервісом.
Ми зв’яжемося з вами найближчим часом, щоб уточнити деталі.

З повагою,
команда ${SENDER_NAME}
    `;

    const htmlBody = `
<p>Доброго дня, <strong>${firstName || ""} ${lastName || ""}</strong>!</p>
<p>Ви успішно подалися на симуляцію у регіоні "<strong>${region}</strong>".</p>
<p>Дякуємо, що скористалися нашим сервісом.<br/>
Ми зв’яжемося з вами найближчим часом, щоб уточнити деталі.</p>
<br/>
<p>З повагою,<br/>команда ${SENDER_NAME}</p>
    `;

    const mailOptions = {
      from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
      to: email,
      subject,
      text: textBody,
      html: htmlBody,
    };

    // 5) Відправляємо лист
    await transporter.sendMail(mailOptions);

    // 6) Повертаємо успішний результат із CORS-заголовками
    return new Response(
      JSON.stringify({ status: "success", message: "Email sent" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (err) {
    console.error("Error in send-simulation-confirmation:", err);
    return new Response(
      JSON.stringify({ status: "error", message: err.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  }
});
