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
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { FaFilePdf } from "react-icons/fa";
// custom fonts for multilingual PDF
import notoSansFont from "../../assets/fonts/NotoSans-VariableFont.ttf";
import notoNaskhArabicFont from "../../assets/fonts/NotoNaskhArabic.ttf";
import { Helmet } from "react-helmet";
import jobDocMeta from "../../assets/jobdocumeta.jpeg";

/* ─────────── Таблиця заголовків для PDF ─────────── */
const pdfHeaders = {
  de: { document: "Dokument", available: "Vorhanden" },
  en: { document: "Document", available: "Available" },
  uk: { document: "Документ", available: "Наявно" },
  ru: { document: "Документ", available: "Наличие" },
  tr: { document: "Belge",     available: "Mevcut"   },
  ar: { document: "مستند",     available: "متوفر"    },
  fr: { document: "Document",  available: "Disponible"},
  es: { document: "Documento", available: "Disponible"},
  pl: { document: "Dokument",  available: "Dostępne" },
  el: { document: "Έγγραφο",   available: "Διαθέσιμο"},
  ro: { document: "Document",  available: "Disponibil"},
};

// helper to fetch a local font file and convert to base64 for jsPDF
const loadFont = async (url, fontName) => {
  const response = await fetch(url);
  const fontData = await response.arrayBuffer();
  const base64Font = btoa(
    new Uint8Array(fontData).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  return { base64Font, fontName };
};

/* ─────────── PDF footer slogan ─────────── */
const footer = (doc) => (data) => {
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setFontSize(10);
  doc.text("GermanMove – makes your journey to German approbation easier",
           data.settings.margin.left,
           pageHeight - 20);
};

// key for localStorage persistence
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

  // ─────────── PDF export (with embedded fonts) ───────────
  const handleExportPDF = async () => {
    const docPDF = new jsPDF("l", "pt", "a4");
    // load fonts
    const notoSans = await loadFont(notoSansFont, "NotoSans");
    const notoNaskhArabic = await loadFont(notoNaskhArabicFont, "NotoNaskhArabic");

    docPDF.addFileToVFS("NotoSans.ttf", notoSans.base64Font);
    docPDF.addFont("NotoSans.ttf", "NotoSans", "normal");

    docPDF.addFileToVFS("NotoNaskhArabic.ttf", notoNaskhArabic.base64Font);
    docPDF.addFont("NotoNaskhArabic.ttf", "NotoNaskhArabic", "normal");

    // choose current font
    const currentFontName = language === "ar" ? "NotoNaskhArabic" : "NotoSans";
    docPDF.setFont(currentFontName, "normal");

    const hdr = pdfHeaders[language] || pdfHeaders.en;

    // build rows
    const rows = employmentDocs.map((d) => [
      d.name[language] || d.name.de,
      checks[d.id] ? "X" : ""
    ]);

    // first page
    docPDF.setFontSize(16);
    docPDF.text(pageTitle[language] || pageTitle.en, 40, 30);

    docPDF.autoTable({
      head: [[hdr.document, hdr.available]],
      body: rows,
      startY: 50,
      margin: { left: 40, right: 40 },
      theme: "grid",
      styles: { font: currentFontName, fontSize: 10 },
      headStyles: { fillColor: [230, 230, 230], textColor: [0, 0, 0] },
      columnStyles: { 1: { halign: "center" } },
      didDrawPage: footer(docPDF),
    });

    // second page in German
    docPDF.addPage("l");
    docPDF.setFont("NotoSans", "normal");
    const hdrDE = pdfHeaders.de;
    const rowsDE = employmentDocs.map((d) => [
      d.name.de,
      checks[d.id] ? "X" : ""
    ]);

    docPDF.setFontSize(16);
    docPDF.text(pageTitle.de, 40, 30);

    docPDF.autoTable({
      head: [[hdrDE.document, hdrDE.available]],
      body: rowsDE,
      startY: 50,
      margin: { left: 40, right: 40 },
      theme: "grid",
      styles: { font: "NotoSans", fontSize: 10 },
      headStyles: { fillColor: [230, 230, 230], textColor: [0, 0, 0] },
      columnStyles: { 1: { halign: "center" } },
      didDrawPage: footer(docPDF),
    });

    docPDF.save(`employment_docs_${language}_and_de.pdf`);
  };

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
    <>
      <Helmet>
        <title>{pageTitle[language] || pageTitle.en} – GermanMove</title>
        <meta
          name="description"
          content="Dokumente für die Bewerbung als Arzt in Deutschland – vollständiger Überblick zu erforderlichen Unterlagen."
        />
        <meta property="og:title" content="Dokumente für die Bewerbung in Deutschland" />
        <meta
          property="og:description"
          content="Vollständige Checkliste der notwendigen Unterlagen für Ihre Bewerbung als Arzt in Deutschland."
        />
        <meta property="og:image" content={jobDocMeta} />
        <meta property="og:image:alt" content="Dokumente für Bewerbung – GermanMove" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dokumente für die Bewerbung in Deutschland" />
        <meta
          name="twitter:description"
          content="Alles, was Sie für Ihre Bewerbung als Arzt in Deutschland benötigen."
        />
        <meta name="twitter:image" content={jobDocMeta} />
      </Helmet>
      <MainLayout>
        <div className={styles.page}>
          <h1 className={styles.title}>
            {pageTitle[language] || pageTitle.en}
          </h1>
          <button
            className={styles.printButton}
            onClick={() => handleExportPDF()}
            title="PDF"
          >
            <FaFilePdf />
          </button>

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
                    role="button"
                    aria-pressed={checks[doc.id]}
                    tabIndex={0}
                    onClick={() => toggle(doc.id)}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle(doc.id)}
                    className={cn(styles.tile, {
                      [styles.tileCompleted]: checks[doc.id],
                    })}
                  >
                    <div className={styles.tileTitle}>
                      {doc.name[language] || doc.name.de}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </MainLayout>
    </>
  );
}