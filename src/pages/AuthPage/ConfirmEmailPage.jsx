import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import confirmEmailTranslations from "../../constants/translation/confirmEmail";
import styles from './ConfirmEmailPage.module.css';
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ConfirmEmailPage() {
  const { selectedLanguage: language = "de" } = useGetGlobalInfo();
  const [status, setStatus] = useState(confirmEmailTranslations.initial[language]);
  const { currentUser } = useAuth();
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("error")) {
      setStatus(confirmEmailTranslations.failure[language]);
      return;
    }
    if (currentUser) {
      if (currentUser.email_confirmed_at) {
        setStatus(confirmEmailTranslations.success[language]);
      } else {
        setStatus(confirmEmailTranslations.failure[language]);
      }
    }
  }, [language, currentUser]);

  return (
    <MainLayout>
      <div className={styles.container}>
        <h2 className={styles.heading}>{status}</h2>
        <p className={styles.text}>
          <Link to="/auth" className={styles.link}>
            {confirmEmailTranslations.linkText[language]}
          </Link>
        </p>
      </div>
    </MainLayout>
  );
}