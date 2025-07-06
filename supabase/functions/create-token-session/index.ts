// supabase/functions/create-token-session/index.ts

import { serve } from 'https://deno.land/x/sift/mod.ts';
import Stripe from 'https://esm.sh/stripe?target=deno';
import { createClient } from 'https://esm.sh/@supabase/supabase-js';

// CORS headers to allow browser requests from any origin
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, apikey, Content-Type',
};

// Initialize Stripe & Supabase from secrets
const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!);
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

serve(async (req) => {
  // 1) Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // 2) Parse input
    const { user_id, token_count } = await req.json();

    // 3) Lookup email
    const { data: userRec, error: uErr } = await supabase.auth.admin.getUserById(user_id);
    if (uErr || !userRec) {
      return new Response('User not found', { status: 404, headers: corsHeaders });
    }
    const email = userRec.user.email!;

    // 4) Read your Token Price ID from secrets
    const priceId = Deno.env.get('PRICE_ID_TOKEN')!;

    // 5) Create Stripe Checkout Session for tokens
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: email,
      metadata: {
        supabase_user_id: user_id,
        token_count: token_count.toString(),
      },
      line_items: [{ price: priceId, quantity: token_count }],
      success_url: `${Deno.env.get('SITE_URL')}/app?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${Deno.env.get('SITE_URL')}/app`,
    });

    // 6) Return URL with CORS
    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: corsHeaders,
    });

  } catch (error) {
    console.error('Error creating token session:', error);
    return new Response('Internal Server Error', {
      status: 500,
      headers: corsHeaders,
    });
  }
});