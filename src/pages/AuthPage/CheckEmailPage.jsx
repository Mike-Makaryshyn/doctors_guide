import React from "react";
import { Link } from "react-router-dom";
import styles from './CheckEmailPage.module.css';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import checkEmailTranslations from "../../constants/translation/checkEmail";

export default function CheckEmailPage() {
  const { selectedLanguage: language = "de" } = useGetGlobalInfo();
  return (
    <MainLayout>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          {checkEmailTranslations.heading[language]}
        </h2>
        <p className={styles.text}>
          {checkEmailTranslations.description[language]}
        </p>
        <p className={styles.text}>
          {checkEmailTranslations.prompt[language]}{" "}
          <Link className={styles.link} to="/auth">
            {checkEmailTranslations.linkText[language]}
          </Link>
          .
        </p>
      </div>
    </MainLayout>
  );
}