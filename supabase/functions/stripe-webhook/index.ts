import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@12.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
  apiVersion: "2022-11-15",
});
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

serve(async (req) => {
  const signature = req.headers.get("stripe-signature")!;
  const body = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, Deno.env.get("STRIPE_WEBHOOK_SECRET")!);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return new Response("Webhook Error", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const userId = session?.metadata?.user_id;
    const customerId = session.customer;
    const subscriptionId = session.subscription;

    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    const { error } = await supabase
      .from("subscriptions")
      .upsert({
        user_id: userId,
        stripe_customer_id: customerId,
        stripe_subscription_id: subscriptionId,
        status: subscription.status,
        current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        updated_at: new Date().toISOString()
      }, { onConflict: "user_id" });

    if (error) {
      console.error("Supabase error while saving subscription:", error);
      return new Response("Database error", { status: 500 });
    }

    console.log("Subscription saved for user:", userId);
  }

  return new Response("OK", { status: 200 });
});