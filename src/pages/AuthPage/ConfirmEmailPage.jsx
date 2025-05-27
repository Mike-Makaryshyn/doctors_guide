import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import confirmEmailTranslations from "../../constants/translation/confirmEmail";
import styles from './ConfirmEmailPage.module.css';
import { Link } from "react-router-dom";

export default function ConfirmEmailPage() {
  const { selectedLanguage: language = "de" } = useGetGlobalInfo();
  const navigate = useNavigate();
  const [status, setStatus] = useState(confirmEmailTranslations.initial[language]);

  useEffect(() => {
    (async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      if (!token) {
        setStatus(confirmEmailTranslations.failure[language]);
        return;
      }
      const { error } = await supabase.auth.verifyOtp({
        token,
        type: 'email'
      });
      if (error) {
        setStatus(confirmEmailTranslations.failure[language]);
      } else {
        setStatus(confirmEmailTranslations.success[language]);
      }
    })();
  }, [language]);

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