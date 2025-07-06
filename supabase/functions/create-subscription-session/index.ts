import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@12.0.0";

serve(async (req) => {
  console.log("Received request:", req.method, req.headers);
  const bodyText = await req.text();
  console.log("Raw body:", bodyText);
  req = new Request(req.url, {
    method: req.method,
    headers: req.headers,
    body: bodyText,
  });

  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400"
      },
    });
  }

  const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
    apiVersion: "2022-11-15",
  });

  try {
    const { email } = JSON.parse(bodyText);
    console.log("Parsed email:", email);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price: Deno.env.get("PRICE_ID_SUBSCRIPTION")!,
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: `${Deno.env.get("SITE_URL")}/success`,
      cancel_url: `${Deno.env.get("SITE_URL")}/cancel`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Stripe session creation failed." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }
});