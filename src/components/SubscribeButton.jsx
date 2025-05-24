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

  const isSubscribed = currentUser?.user_metadata?.subscriptionStatus === "active";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="28"
        height="28"
        fill={isSubscribed ? "#023c6f" : "#999999"}
      >
        <path d="M224 512c35.3 0 63.1-28.7 63.1-64H160.9c0 35.3 27.8 64 63.1 64zm215.1-149.1c-19.8-20.9-55.5-52.1-55.5-154.9 0-77.7-54.5-139.3-127.1-155.2V32c0-17.7-14.4-32-32.1-32s-32 14.3-32 32v20.8C118.4 68.7 64 130.3 64 208c0 102.8-35.7 134-55.5 154.9-6 6.4-8.5 14.2-8.5 21.1C0 397.9 10.1 416 32 416h384c21.9 0 32-18.1 32-36.9 0-6.9-2.5-14.7-8.9-21.2z"/>
      </svg>
    </button>
  );
};

export default SubscribeButton;