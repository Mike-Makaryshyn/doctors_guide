import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useSubscription } from "../contexts/SubscriptionContext";
import { supabase } from "../supabaseClient";

const SubscribeButton = () => {
  const { currentUser } = useAuth();
  const { status: subscriptionStatus, endsAt: subscriptionEnd } = useSubscription();

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

    // Supabase user id can be either currentUser.id (v2) or currentUser.user.id when wrapped by helpers.
    const userId = currentUser?.id ?? currentUser?.user?.id;

    // 🔍 DEBUG: переконуємося, що відправляємо правильні дані
    console.log("Sending to create-subscription-session:", {
      email: currentUser.email,
      user_id: userId,
    });

    try {
      const response = await fetch(
        "https://pgwaxkfsnzqmwujdzxje.functions.supabase.co/create-subscription-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            email: currentUser.email,
            user_id: userId,
          }),
        }
      );

      if (!response.ok) {
        const errText = await response.text();
        console.error("Server responded with", response.status, errText);
        alert("Не вдалося створити сесію підписки.");
        return;
      }

      const data = await response.json();
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

  const isSubscribed =
    subscriptionStatus === "active" ||
    (subscriptionStatus === "canceled" && subscriptionEnd && new Date(subscriptionEnd) > new Date());

  return (
    <button
      onClick={handleSubscribe}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "4px",
        transition: "transform 0.3s ease",
        color: isSubscribed ? "#023c6f" : "#999999",
      }}
      title={isSubscribed ? "Підписка активна" : "Підписатися"}
      className={isSubscribed ? "subscribedIcon" : "subscribeIcon"}
    >
      {isSubscribed ? (
        <span style={{ fontSize: "14px", fontWeight: "bold" }}>Subscribed</span>
      ) : (
        <span style={{ fontSize: "14px", color: "#999999" }}>NoSubscribe</span>
      )}
    </button>
  );
};

export default SubscribeButton;