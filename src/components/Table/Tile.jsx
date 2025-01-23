// src/components/Table/Tile.jsx

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Tile.module.scss";
import cn from "classnames";
import MobileCheckbox from "../Checkbox/MobileCheckbox";
import CloseIcon from "../../assets/close-icon.svg";
import { sendOriginalText } from "../../constants/translation/documents";

/**
 * Tile компонент
 */
const Tile = ({
  row,
  columns,
  category,
  selectedLanguage,
  selectedRegion,
  tableFor,
  checkboxes,
  handleCheckboxChange,
  disableCheckboxBasedOnName,
}) => {
  const isOptional = tableFor === "optional";
  const hidden = isOptional ? checkboxes[row.id]?.hide : false;

  // Фільтрація колонок, які мають чекбокси та не є виключеними
  const relevantColumns = columns.filter((col) => {
    if (col.name === "category" || col.name === "name") return false;
    if (category === "EU" && col.name === "apostile") return false;
    if (tableFor === "optional" && col.name === "hide") return false;
    if (col.name === "links") return true; // Завжди включаємо 'links' колонку
    return (
      typeof row[col.name] === "string" && row[col.name]?.includes("check")
    );
  });

  const allChecked =
    tableFor === "second"
      ? checkboxes[row.id]?.is_exist && checkboxes[row.id]?.sent
      : relevantColumns.every((col) => checkboxes[row.id]?.[col.name]);

  // Локальний стан для анімації завершення
  const [showCompletion, setShowCompletion] = useState(false);

  useEffect(() => {
    if (allChecked && !hidden) {
      setShowCompletion(true);
      // Приховати завершення після 1 секунди
      const timer = setTimeout(() => {
        setShowCompletion(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [allChecked, hidden]);

  const tileClass = cn(styles.tile, {
    [styles.tileCompleted]: allChecked && !hidden, // Додає клас для завершеної плитки
    [styles.tileIncomplete]: !allChecked && !hidden,
    [styles.tileExcluded]: hidden,
  });

  const onTileClick = () => {
    if (isOptional) {
      handleCheckboxChange(row.id.toString(), "hide");
    }
  };

  // Функція для генерації елементів посилань
  const getLinkElement = (row, selectedRegion, category, language) => {
    // Словник мов для тексту посилання
    const linkTranslations = {
      de: "Links",
      en: "Links",
      uk: "Посилання",
      ru: "Ссылка",
      tr: "Bağlantı",
      ar: "رابط",
      fr: "Lien",
      es: "Enlace",
      pl: "Link",
    };

    // Вибір відповідного тексту за мовою або дефолтне значення
    const linkText = linkTranslations[language] || "Link";

    let linkToOpen = null;

    if (row.links) {
      if (!selectedRegion) {
        linkToOpen = "/lands";
      } else {
        const requiredFor = Array.isArray(row.requiredFor)
          ? row.requiredFor.map((item) => item.trim().toLowerCase())
          : ["both"];
        const categoryLower = category.trim().toLowerCase();
        const cleanedSelectedRegion = selectedRegion.trim().toLowerCase();

        if (
          requiredFor.includes("both") ||
          requiredFor.includes(categoryLower)
        ) {
          if (row.links[category]) {
            const regionalLink = row.links[category].find(
              (link) =>
                link.landName.trim().toLowerCase() ===
                cleanedSelectedRegion
            );

            linkToOpen = regionalLink
              ? regionalLink.link
              : row.links[category].find(
                  (link) =>
                    link.landName.trim().toLowerCase() === "general"
                )?.link;
          }
        }
      }
    } else if (row.singleLink) {
      linkToOpen = row.singleLink.link;
    }

    if (linkToOpen) {
      return (
        <div
          className={styles.linkContainer}
          onClick={() => window.open(linkToOpen, "_blank")}
        >
          <span className={styles.linkLabel}>{linkText}</span>
        </div>
      );
    } else {
      return <div className={styles.warning}>{linkText} unavailable</div>;
    }
  };

  return (
    <div className={tileClass} onClick={() => hidden && onTileClick()}>
      <div className={styles.tileHeader}>
        <div className={styles.tileTitle}>
          {row.category?.[selectedLanguage] ||
            row.name?.[selectedLanguage] ||
            "N/A"}
        </div>
        {isOptional && !hidden && (
          <button
            className={cn(styles.closeButton, {
              [styles.tileCompleted]: allChecked, // Додано клас tileCompleted
            })}
            onClick={(e) => {
              e.stopPropagation();
              onTileClick();
            }}
          >
            <img src={CloseIcon} alt="Close" className={styles.closeIcon} />
          </button>
        )}
      </div>

      {!hidden && (
        <div className={styles.checkboxGrid}>
          {relevantColumns.map((col) => {
            if (col.name === "links") {
              return (
                <div className={styles.checkboxBox} key={`link-${row.id}-${col.name}`}>
                  {getLinkElement(row, selectedRegion, category, selectedLanguage)}
                </div>
              );
            }

            return (
              <div
                key={`col-${row.id}-${col.name}`}
                className={cn(styles.checkboxBox, {
                  [styles.optional]: tableFor === "optional",
                })}
              >
                <MobileCheckbox
                  id={`checkbox-${row.id}-${col.name}`}
                  checked={checkboxes[row.id]?.[col.name] || false}
                  onChange={() =>
                    handleCheckboxChange(row.id.toString(), col.name)
                  }
                  label={
                    columnsFirst.find((item) => item.name === col.name)
                      ?.shortLabel[selectedLanguage] || col.name
                  }
                />
              </div>
            );
          })}
          {/* Додати відображення посилання тільки під колонкою 'notary' */}
          {row?.id === 17 && !checkboxes[row.id.toString()]?.hide && (
            <div className={styles.linkContainer}>
              <a
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                href={row?.link}
              >
                {sendOriginalText[selectedLanguage] || sendOriginalText["en"]}
              </a>
            </div>
          )}
        </div>
      )}

      {/* Оверлей завершення */}
      {allChecked && !hidden && showCompletion && (
        <div className={styles.completionOverlay}>
          {/* Простий символ галочки */}
          <span style={{ fontSize: "3rem", color: "#4caf50" }}>✔️</span>
        </div>
      )}
    </div>
  );
};

// Оновлені PropTypes для Tile
Tile.propTypes = {
  row: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  selectedRegion: PropTypes.string.isRequired,
  tableFor: PropTypes.string.isRequired,
  checkboxes: PropTypes.object.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  disableCheckboxBasedOnName: PropTypes.bool.isRequired,
};

export default Tile;