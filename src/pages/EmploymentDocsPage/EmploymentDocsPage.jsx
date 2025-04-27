// src/pages/EmploymentDocsPage/EmploymentDocsPage.jsx
import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./EmploymentDocsPage.module.scss";
import { employmentDocs } from "../../constants/documentsEmployment";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Checkbox from "../../components/Checkbox/Checkbox";

const STORAGE_KEY = "employmentDocState";
const isMobileScreen = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 768px)").matches;

// ─────────── Прогрес‑бар з підказкою ───────────
const ProgressBarWithTooltip = ({ progress, getMessage }) => {
  const displayProgress = progress === 0 ? 5 : progress;

  return (
    <div className={styles.progressContainer}>
      <Tippy
        content={getMessage(progress)}
        animation="scale"
        arrow={true}
        theme="custom"
        trigger="click"
        interactive={true}
        hideOnClick={true}
        placement="top"
      >
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${displayProgress}%` }}
            data-progress={displayProgress}
          >
            <span className={styles.progressText}>
              {progress === 0 ? "0%" : `${progress}%`}
            </span>
          </div>
        </div>
      </Tippy>
    </div>
  );
};

const getMessage = (progressValue) => {
  if (progressValue < 20) return "Progress is less than 20%";
  if (progressValue < 50) return "Progress is between 20% and 50%";
  if (progressValue < 80) return "Progress is between 50% and 80%";
  return "Progress is greater than 80%";
};

export default function EmploymentDocsPage() {
  /* ─────────── Мова ─────────── */
  const { selectedLanguage: language = "de" } = useGetGlobalInfo();

  /* ─────────── Чекбокси ─────────── */
  const [checks, setChecks] = useState(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return employmentDocs.reduce((acc, d) => {
      acc[d.id] = saved[d.id] ?? false;
      return acc;
    }, {});
  });

  /* ─────────── Mobile / Desktop ─────────── */
  const [isMobile, setIsMobile] = useState(isMobileScreen());
  useEffect(() => {
    const handler = () => setIsMobile(isMobileScreen());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  /* ─────────── Persist ─────────── */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checks));
  }, [checks]);

  /* ─────────── Прогрес ─────────── */
  const total = employmentDocs.length;
  const done = Object.values(checks).filter(Boolean).length;
  const progress = Math.round((done / total) * 100);
  const [displayedProgress, setDisplayedProgress] = useState(progress);
  const isInitialLoad = useRef(true);
  const toggle = (id) => setChecks((p) => ({ ...p, [id]: !p[id] }));

  useEffect(() => {
    if (isInitialLoad.current) {
      setDisplayedProgress(progress);
      isInitialLoad.current = false;
    } else {
      setDisplayedProgress(progress);
    }
  }, [progress]);

  /* ─────────── Заголовок сторінки (усі мови) ─────────── */
  const pageTitle = {
    de: "Dokumente für die Beschäftigung",
    en: "Documents for Employment",
    uk: "Документи для працевлаштування",
    ru: "Документы для трудоустройства",
    tr: "İstihdam Belgeleri",
    ar: "وثائق التوظيف",
    fr: "Documents pour l'emploi",
    es: "Documentos para el empleo",
    pl: "Dokumenty do zatrudnienia",
    el: "Έγγραφα για εργασία",
    ro: "Documente pentru angajare",
  };
  /* ─────────── Тексти заголовків ─────────── */
  const tHead = {
    doc: {
      de: "Dokument",
      en: "Document",
      uk: "Документ",
      ru: "Документ",
      tr: "Belge",
      ar: "مستند",
      fr: "Document",
      es: "Documento",
      pl: "Dokument",
      el: "Έγγραφο",
      ro: "Document",
    },
    have: {
      de: "Vorhanden",
      en: "Available",
      uk: "Наявно",
      ru: "Наличие",
      tr: "Mevcut",
      ar: "متوفر",
      fr: "Disponible",
      es: "Disponible",
      pl: "Dostępne",
      el: "Διαθέσιμο",
      ro: "Disponibil",
    },
  };

  return (
    <MainLayout>
      <div className={styles.page}>
        <h1 className={styles.title}>
          {pageTitle[language] || pageTitle.en}
        </h1>

        {/* прогрес-бар (оновлений) */}
        <ProgressBarWithTooltip
          progress={displayedProgress}
          getMessage={getMessage}
        />

        {/* таблиця або плитки */}
        <div className={styles.tableWrap}>
          {!isMobile && (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{tHead.doc[language]}</th>
                  <th>{tHead.have[language]}</th>
                </tr>
              </thead>
              <tbody>
                {employmentDocs.map((doc) => (
                  <tr key={doc.id}>
                    <td>{doc.name[language] || doc.name.de}</td>
                    <td>
                      <Checkbox
                        checked={checks[doc.id]}
                        onChange={() => toggle(doc.id)}
                        id={`table-checkbox-${doc.id}`}
                        name={`table-checkbox-${doc.id}`}
                        label=""
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {isMobile && (
            <div className={styles.tileContainer}>
              {employmentDocs.map((doc) => (
                <div
                  key={doc.id}
                  className={cn(styles.tile, {
                    [styles.tileCompleted]: checks[doc.id],
                  })}
                >
                  <div className={styles.tileTitle}>
                    {doc.name[language] || doc.name.de}
                  </div>
                  <Checkbox
                    checked={checks[doc.id]}
                    onChange={() => toggle(doc.id)}
                    id={`mobile-checkbox-${doc.id}`}
                    name={`mobile-checkbox-${doc.id}`}
                    label=""
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}