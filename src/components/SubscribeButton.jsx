import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { supabase } from "../supabaseClient";

const SubscribeButton = () => {
  const { currentUser } = useAuth();

  const handleSubscribe = async () => {
    if (!currentUser || !currentUser.email) {
      alert("Користувач не авторизований або email недоступний.");
      return;
    }

    const sessionResult = await supabase.auth.getSession();
    const accessToken = sessionResult.data.session?.access_token;

    if (!accessToken) {
      alert("Не вдалося отримати токен авторизації.");
      return;
    }

    try {
      const res = await fetch("https://pgwaxkfsnzqmwujdzxje.functions.supabase.co/create-subscription-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ email: currentUser.email }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Не вдалося створити сесію підписки.");
      }
    } catch (error) {
      console.error("Stripe error:", error);
      alert("Щось пішло не так при створенні підписки.");
    }
  };

  return (
    <button onClick={handleSubscribe}>
      Підписатися
    </button>
  );
};

export default SubscribeButton;