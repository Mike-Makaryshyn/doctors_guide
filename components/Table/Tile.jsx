// src/components/Table/Tile.jsx

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "../../pages/DocumentsPage/DocumentsPage.module.scss";
import cn from "classnames";
import MobileCheckbox from "../Checkbox/MobileCheckbox";
import { sendOriginalText } from "../../constants/translation/documents";
import { columnsFirst } from "../../constants/translation/columnsFirst";

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
  showCheckboxOnMobile,
  isMobile,
  dataIndex, // Новий пропс для індексу плитки
  isSecondTableThirdTile, // Новий пропс для третьої плитки в SecondTable
}) => {
  const isOptional = tableFor === "optional";
  const hidden = isOptional ? checkboxes[row.id]?.hide : false;

  useEffect(() => {
    console.log(
      `Tile ID: ${row.id}, isOptional: ${isOptional}, hidden: ${hidden}, isMobile: ${isMobile}`
    );
  }, [isOptional, hidden, row.id, isMobile]);

  const relevantColumns = columns.filter((col) => {
    if (col.name === "category" || col.name === "name") return false;
    if (category === "EU" && col.name === "apostile") return false;
    if (tableFor === "optional" && col.name === "hide") return false;
    if (col.name === "links") return true;
    return (
      typeof row[col.name] === "string" && row[col.name]?.includes("check")
    );
  });

  const allChecked =
    tableFor === "second"
      ? checkboxes[row.id]?.is_exist && checkboxes[row.id]?.sent
      : relevantColumns.every((col) => checkboxes[row.id]?.[col.name]);

  const [showCompletion, setShowCompletion] = useState(false);

  useEffect(() => {
    console.log("Mode switched, isMobile:", isMobile);
    // Переперевірка стану даних
  }, [isMobile]);

  useEffect(() => {
    if (allChecked && !hidden) {
      setShowCompletion(true);
      const timer = setTimeout(() => {
        setShowCompletion(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [allChecked, hidden]);

  const tileClass = cn(styles.tile, {
    [styles.tileCompleted]: allChecked && !hidden,
    [styles.tileIncomplete]: !allChecked && !hidden,
    [styles.tileExcluded]: hidden,
    [styles.tileOptional]: isOptional,
  });

  const onTileClick = () => {
    if (isOptional) {
      handleCheckboxChange(row.id.toString(), "hide");
    }
  };
  const getCategoryText = (text, region) => {
    return text.replace("{region}", region || "ваш регіон");
  };
  const onHiddenChange = () => {
    console.log(`Toggling hide for document ${row.id}`);
    handleCheckboxChange(row.id.toString(), "hide");
  };

  const getLinkElement = (row, selectedRegion, category, language) => {
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
                link.landName.trim().toLowerCase() === cleanedSelectedRegion
            );

            linkToOpen = regionalLink
              ? regionalLink.link
              : row.links[category].find(
                  (link) => link.landName.trim().toLowerCase() === "general"
                )?.link;
          }
        }
      }
    } else if (row.singleLink) {
      linkToOpen = row.singleLink.link;
    }
    const isActive =
    checkboxes[row.id]?.is_exist && checkboxes[row.id]?.sent;

    if (linkToOpen) {
      return (
        <div
          className={cn(styles.linkContainer, {
            [styles.linkContainerActive]: isActive,
          })}
          onClick={(e) => {
            e.stopPropagation();
            window.open(linkToOpen, "_blank");
          }}
          data-tutorial="linkElement" // Додаємо атрибут туторіалу
        >
          <span className={styles.linkLabel}>{linkText}</span>
        </div>
      );
    } else {
      return <div className={styles.warning}>{linkText} unavailable</div>;
    }
  };

  // Визначення унікального таргета для тайлів
  let dataTutorialTarget = `tile-${dataIndex}`;
  if (isSecondTableThirdTile) {
    dataTutorialTarget = `documentSecondTile-3`;
  } else if (tableFor === "main" && dataIndex === 1) {
    dataTutorialTarget = `firstTile`;
  } else if (tableFor === "main" && dataIndex === 2) {
    dataTutorialTarget = `secondTile-checkboxes`;
  }

  return (
    <div
      className={tileClass}
      onClick={() => hidden && onTileClick()}
      data-tutorial={dataTutorialTarget} // Унікальний атрибут
    >
      <div className={styles.tileHeader}>
      <div
  className={styles.tileTitle}
  data-id={row.id} // Додаємо data-id
  style={{
    color: row?.id === 17 && !checkboxes[row.id]?.is_exist ? "#013b6e" : "",
  }}
  data-tutorial="tileTitle" // Додаємо атрибут туторіалу
>
  {row.category?.[selectedLanguage]
    ? row.category[selectedLanguage].replace("{region}", selectedRegion || "ваш регіон")
    : row.name?.[selectedLanguage] || "N/A"}
</div>
        {showCheckboxOnMobile && (
          <div className={styles.mobileCheckboxWrapper}>
            <button
              className={styles.crossButton}
              onClick={(e) => {
                e.stopPropagation();
                handleCheckboxChange(row.id.toString(), "hide");
              }}
              aria-label={
                checkboxes[row.id]?.hide
                  ? "Додати документ"
                  : "Видалити документ"
              }
              data-tutorial="optionalDocumentToggle" // Додаємо атрибут туторіалу
            >
              {checkboxes[row.id]?.hide ? "➕" : "❌"}
            </button>
          </div>
        )}
      </div>

      {!hidden && (
        <div className={styles.checkboxGrid}>
          {relevantColumns.map((col) => {
            if (col.name === "links") {
              return (
                <div
                  className={styles.checkboxBox}
                  key={`link-${row.id}-${col.name}`}
                  data-tutorial="header-links" // Додаємо атрибут туторіалу
                >
                  {getLinkElement(
                    row,
                    selectedRegion,
                    category,
                    selectedLanguage
                  )}
                </div>
              );
            }

            if (isMobile && isOptional) {
              return null;
            }

            return (
              <div
                key={`col-${row.id}-${col.name}`}
                className={cn(styles.checkboxBox, {
                  [styles.optional]: tableFor === "optional",
                })}
                data-tutorial={`${col.name}`} // Додаємо атрибут туторіалу
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
                  data-tutorial={`mobileCheckbox-${col.name}`} // Додаємо атрибут туторіалу
                />
              </div>
            );
          })}
          {row?.id === 17 && !checkboxes[row.id.toString()]?.hide && (
            <div
              className={cn(styles.linkContainer, {
                [styles.linkContainerActive]: allChecked,
              })}
              data-tutorial="rov17NotaryLink" // Додаємо атрибут туторіалу
            >
              <a
                className={cn(styles.link, styles.linkLabel)} // Додаємо клас linkLabel
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

      {allChecked && !hidden && showCompletion && (
        <div className={styles.completionOverlay} data-tutorial="completionOverlay">
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
  isMobile: PropTypes.bool.isRequired,
  showCheckboxOnMobile: PropTypes.bool.isRequired,
  dataIndex: PropTypes.number, // Новий пропс
  isSecondTableThirdTile: PropTypes.bool, // Новий пропс
};

Tile.defaultProps = {
  dataIndex: 1, // Значення за замовчуванням
  isSecondTableThirdTile: false, // Значення за замовчуванням
};

export default Tile;