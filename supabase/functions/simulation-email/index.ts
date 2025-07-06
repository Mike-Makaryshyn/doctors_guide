import { serve } from "https://deno.land/std@0.131.0/http/server.ts";
import nodemailer from "npm:nodemailer";

// 1) Зчитуємо конфігурацію SMTP із середовища
const SMTP_HOST    = Deno.env.get("SMTP_HOST")!;
const SMTP_PORT    = Number(Deno.env.get("SMTP_PORT"));
const SMTP_USER    = Deno.env.get("SMTP_USER")!;
const SMTP_PASS    = Deno.env.get("SMTP_PASS")!;
const SENDER_EMAIL = Deno.env.get("SENDER_EMAIL")!;
const SENDER_NAME  = Deno.env.get("SENDER_NAME")!;

// 2) Створюємо транспортер nodemailer
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true, // якщо SMTP_PORT = 465, або false + TLS на 587
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

serve(async (req) => {
  // Завжди віддаємо CORS-заголовки у відповіді, навіть якщо метод не POST
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, x-client-info, apikey",
  };

  // 3) Обробка preflight (OPTIONS)
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        ...corsHeaders,
        "Access-Control-Max-Age": "86400", // кешувати результат preflight на добу
      },
    });
  }

  // 4) Якщо метод не POST → 405
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method Not Allowed" }),
      {
        status: 405,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }

  try {
    // 5) Розбираємо JSON-тіло POST-запиту
    const data = await req.json();
    const { email, firstName, lastName, region } = data as {
      email?: string;
      firstName?: string;
      lastName?: string;
      region?: string;
    };

    if (!email || !region) {
      return new Response(
        JSON.stringify({ error: "Поля email і region є обов’язковими" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // 6) Формуємо тему та текст листа
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

    // 7) Відправляємо лист
    await transporter.sendMail(mailOptions);

    // 8) Повертаємо успішний результат із CORS-заголовками
    return new Response(
      JSON.stringify({ status: "success", message: "Email sent" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (err) {
    console.error("Error in simulation-email:", err);
    return new Response(
      JSON.stringify({ status: "error", message: (err as any).message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }
});