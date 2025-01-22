// src/components/Table/ResponsiveTable.jsx

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ResponsiveTable.module.scss";
import cn from "classnames";
import BodyItem from "./BodyItem";
import useIsMobile from "../../hooks/useIsMobile";
import CloseIcon from "../../assets/close-icon.svg";
import MobileCheckbox from "../Checkbox/MobileCheckbox"; // Імпорт без іконок
import { columnsFirst } from "../../constants/translation/columnsFirst";
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

  const allChecked = relevantColumns.every(
    (col) => checkboxes[row.id]?.[col.name]
  );

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
    [styles.tileCompleted]: allChecked && !hidden, // Постійний зелений фон при вибраних чекбоксах
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
    if (row.links) {
      if (!selectedRegion) {
        return (
          <div className={styles.linkContainer} onClick={() => window.location.href = "/lands"}>
            <span className={styles.linkLabel}>
              {language === "ua" ? "Посилання" : language === "de" ? "Links" : "Links"}
            </span>
          </div>
        );
      }
  
      const requiredFor = Array.isArray(row.requiredFor)
        ? row.requiredFor.map((item) => item.trim().toLowerCase())
        : ["both"];
      const categoryLower = category.trim().toLowerCase();
      const cleanedSelectedRegion = selectedRegion.trim().toLowerCase();
  
      if (requiredFor.includes("both") || requiredFor.includes(categoryLower)) {
        if (row.links[category]) {
          const regionalLink = row.links[category].find((link) => {
            return link.landName.trim().toLowerCase() === cleanedSelectedRegion;
          });
  
          const linkToOpen = regionalLink ? regionalLink.link : 
            row.links[category].find(link => link.landName.trim().toLowerCase() === "general")?.link;
  
          if (linkToOpen) {
            return (
              <div 
                className={styles.linkContainer} 
                onClick={() => window.open(linkToOpen, "_blank")}
              >
                <span className={styles.linkLabel}>
                  {language === "ua" ? "Посилання" : language === "de" ? "Links" : "Links"}
                </span>
              </div>
            );
          }
        }
        return <span className={styles.warning}>No links available.</span>;
      } else {
        return <span className={styles.info}>Not required for this category.</span>;
      }
    } else if (row.singleLink) {
      return (
        <div 
          className={styles.linkContainer} 
          onClick={() => window.open(row.singleLink.link, "_blank")}
        >
          <span className={styles.linkLabel}>
            {language === "ua" ? "Посилання" : language === "de" ? "Links" : "Links"}
          </span>
        </div>
      );
    } else {
      return <span className={styles.warning}>No links found.</span>;
    }
  };

  return (
    <div
      className={tileClass}
      onClick={() => {
        if (hidden) onTileClick();
      }}
    >
      <div className={styles.tileHeader}>
        <div className={styles.tileTitle}>
          {row.category?.[selectedLanguage] ||
            row.name?.[selectedLanguage] ||
            "N/A"}
        </div>
        {isOptional && !hidden && (
         <button
         className={styles.closeButton}
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
                <div
                  key={`col-${row.id}-${col.name}`}
                  className={styles.checkboxBox}
                >
                  <div className={styles.linkContainer}>
                    <span className={styles.linkLabel}>
                      {col.label?.[selectedLanguage] || "Links"}
                    </span>
                    {getLinkElement(
                      row,
                      selectedRegion,
                      category,
                      selectedLanguage
                    )}
                  </div>
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
          {row?.id === 17 &&
  !checkboxes[row.id.toString()]?.hide && (
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

// Додавання PropTypes для валідації пропсів
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

/**
 * ResponsiveTable компонент
 */
const ResponsiveTable = ({
  columns,
  data,
  setTableData,
  title,
  selectedLanguage,
  selectedRegion,
  category,
  tableFor = "main",
  disableCheckboxBasedOnName = false,
  checkboxes,
  handleCheckboxChange,
  customClass,
}) => {
  const isMobile = useIsMobile();
  const shouldRenderAsTiles = isMobile;

  // Додайте для відлагодження
  console.log("isMobile:", isMobile);
  console.log("data:", data);
  console.log("columns:", columns);
  console.log("selectedRegion:", selectedRegion);

  return (
    <div className={cn(styles.tableContainer, customClass)}>
      {title && <h2 className={styles.title}>{title}</h2>}

      {/* Якщо не мобільний -> показуємо звичайну таблицю (BodyItem) */}
      {!shouldRenderAsTiles ? (
        <table className={cn(styles.table)}>
          <thead>
            <tr className={styles.tableHeader}>
              {columns.map((col) => {
                if (category === "EU" && col.name === "apostile") return null;
                if (tableFor === "optional" && col.name === "hide") return null;
                return (
                  <th key={`header-${col.name}`} data-column={col.name}>
                    {col.label?.[selectedLanguage] || col.name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <BodyItem
                key={`body-item-${row.id}`}
                row={row}
                columns={columns}
                index={index}
                tableFor={tableFor}
                setTableData={setTableData}
                tableData={data}
                category={category}
                language={selectedLanguage}
                handleCheckboxChange={handleCheckboxChange}
                changeHiddenProp={() => {}}
                hasNameColumn={columns.some((c) => c.name === "name")}
                disableCheckboxBasedOnName={disableCheckboxBasedOnName}
                selectedRegion={selectedRegion}
                checkboxes={checkboxes}
                isMobile={isMobile}
              />
            ))}
          </tbody>
        </table>
      ) : (
        /* Інакше => tile-режим (мобільний) */
        <div className={styles.tileContainer}>
          {data.map((row) => (
            <Tile
              key={`tile-${row.id}`}
              row={row}
              columns={columns}
              category={category}
              selectedLanguage={selectedLanguage}
              selectedRegion={selectedRegion}
              tableFor={tableFor}
              checkboxes={checkboxes}
              handleCheckboxChange={handleCheckboxChange} // Переконайся, що функція передається сюди
              disableCheckboxBasedOnName={disableCheckboxBasedOnName}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Додавання PropTypes для валідації пропсів
ResponsiveTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTableData: PropTypes.func.isRequired,
  title: PropTypes.string,
  selectedLanguage: PropTypes.string.isRequired,
  selectedRegion: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  tableFor: PropTypes.string,
  disableCheckboxBasedOnName: PropTypes.bool,
  checkboxes: PropTypes.object.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  customClass: PropTypes.string,
};

ResponsiveTable.defaultProps = {
  title: null,
  tableFor: "main",
  disableCheckboxBasedOnName: false,
  customClass: "",
};

export default ResponsiveTable;
