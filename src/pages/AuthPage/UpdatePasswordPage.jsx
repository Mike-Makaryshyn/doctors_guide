// src/pages/AuthPage/UpdatePasswordPage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./UpdatePasswordPage.module.scss";
import { languages, DEFAULT_LANGUAGE } from "../../constants/translation/AuthPage";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

const UpdatePasswordPage = () => {
  const [ready, setReady] = useState(false);        // aktive Sitzung vorhanden?
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [err, setErr]   = useState("");
  const navigate = useNavigate();

  const { selectedLanguage } = useGetGlobalInfo();
  const t = languages[selectedLanguage] || languages[DEFAULT_LANGUAGE];

  // warten auf PASSWORD_RECOVERY‑Event oder bestehende Sitzung
  useEffect(() => {
    const { data: { subscription } } =
      supabase.auth.onAuthStateChange((_event, session) => {
        if (session) setReady(true);                // podії: PASSWORD_RECOVERY oder SIGNED_IN
      });

    // Fallback (F5 oder direkter Aufruf)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setReady(true);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setErr("");

    if (pwd1 !== pwd2) return setErr(t.errorMismatch);

    const { error } = await supabase.auth.updateUser({ password: pwd1 });
    if (error) return setErr(error.message);

    alert(t.successPasswordChange);
    navigate("/auth");
  };

  if (!ready) {
    return (
      <MainLayout>
        <div className={styles.container}>
          <p style={{ padding: "2rem" }}>{t.checkingRequest}</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        <form onSubmit={handleSave} className={styles.form}>
          <h2>{t.updateTitle}</h2>

          <input
            type="password"
            placeholder={t.newPasswordPlaceholder}
            value={pwd1}
            onChange={(e) => setPwd1(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder={t.confirmPasswordPlaceholder}
            value={pwd2}
            onChange={(e) => setPwd2(e.target.value)}
            required
            className={styles.input}
          />

          {err && <p className={styles.error}>{err}</p>}

          <button type="submit" className={styles.submitButton}>
            {t.saveButton}
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default UpdatePasswordPage;