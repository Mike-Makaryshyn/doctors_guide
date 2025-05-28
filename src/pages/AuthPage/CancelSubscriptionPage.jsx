import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import cancelSubscriptionTranslations from "../../constants/translation/cancelSubscription";
import styles from './CancelSubscriptionPage.module.css';
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../supabaseClient";

export default function CancelSubscriptionPage() {
  const { selectedLanguage: language = "de" } = useGetGlobalInfo();
  const [status, setStatus] = useState(cancelSubscriptionTranslations.message[language]);
  const { currentUser } = useAuth();

  useEffect(() => {
    // Optional: hier könntest du query params auswerten, z.B. error codes
    setStatus(cancelSubscriptionTranslations.message[language]);
  }, [language]);

  const handleRetry = async () => {
    if (!currentUser || !currentUser.email) {
      alert(cancelSubscriptionTranslations.retryAlertMessage?.[language] || "User not signed in or email unavailable.");
      return;
    }
    const { data: { session } } = await supabase.auth.getSession();
    const accessToken = session?.access_token;
    if (!accessToken) {
      alert(cancelSubscriptionTranslations.retryAlertMessage?.[language] || "Unable to get auth token.");
      return;
    }
    const userId = currentUser?.id ?? currentUser?.user?.id;
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
        alert(cancelSubscriptionTranslations.retryAlertMessage?.[language] || "Unable to create subscription session.");
        return;
      }
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(cancelSubscriptionTranslations.retryAlertMessage?.[language] || "Unable to create subscription session.");
      }
    } catch (error) {
      console.error("Retry error:", error);
      alert(cancelSubscriptionTranslations.retryAlertMessage?.[language] || "Something went wrong while retrying subscription.");
    }
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <h2 className={styles.heading}>{status}</h2>
        <p className={styles.text}>
          <button onClick={handleRetry} className={styles.link}>
            {cancelSubscriptionTranslations.retryLink[language]}
          </button>
        </p>
      </div>
    </MainLayout>
  );
}