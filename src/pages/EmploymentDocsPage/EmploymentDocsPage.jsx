// src/pages/EmploymentDocsPage/EmploymentDocsPage.jsx
import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./EmploymentDocsPage.module.scss";
import { employmentDocs } from "../../constants/documentsEmployment";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

const STORAGE_KEY = "employmentDocState";
const isMobileScreen = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 768px)").matches;

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
  const toggle = (id) => setChecks((p) => ({ ...p, [id]: !p[id] }));

  /* ─────────── Тексти заголовків ─────────── */
  const tHead = {
    doc:  { de: "Dokument",   en: "Document",  uk: "Документ"  },
    have: { de: "Vorhanden",  en: "Available", uk: "Наявно"    },
  };

  return (
    <MainLayout>
      <div className={styles.page}>
        <h1 className={styles.title}>Документи для працевлаштування</h1>

        {/* прогрес-бар */}
        <div className={styles.progressWrap}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress || 5}%` }}
            >
              <span>{progress}%</span>
            </div>
          </div>
        </div>

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
                      <input
                        type="checkbox"
                        checked={checks[doc.id]}
                        onChange={() => toggle(doc.id)}
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
                  <label className={styles.mobileCheckboxLabel}>
                    <input
                      type="checkbox"
                      checked={checks[doc.id]}
                      onChange={() => toggle(doc.id)}
                    />
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}