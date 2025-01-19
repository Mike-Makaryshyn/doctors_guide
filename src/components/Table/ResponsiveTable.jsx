// src/components/Table/ResponsiveTable.jsx

import React from "react";
import styles from "./ResponsiveTable.module.scss";
import cn from "classnames";
import BodyItem from "./BodyItem";
import useIsMobile from "../../hooks/useIsMobile";
import Checkbox from "../../components/Checkbox/Checkbox";
import CloseIcon from "../../assets/close-icon.svg"; // Імпортуємо SVG як звичайний файл

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

  // Визначаємо, чи таблиця повинна рендеритися як плитки
  const shouldRenderAsTiles = isMobile;

  // Функція для перевірки, чи всі чекбокси відмічені для рядка
  const areAllChecked = (row) => {
    const requiredColumns = columns.filter(col => {
      if (tableFor === "optional" && col.name === "hide") return false;
      return typeof row[col.name] !== "undefined" && col.name !== "links";
    });

    return requiredColumns.every(col => checkboxes[row.id.toString()]?.[col.name]);
  };

  // Функція для рендерингу плитки (для мобільної версії)
  const renderTile = (row) => {
    const isOptional = tableFor === "optional";
    const isHidden = isOptional ? checkboxes[row.id.toString()]?.hide : false;
    const allChecked = areAllChecked(row);

    // Визначаємо колір фону плитки
    const tileClass = cn(styles.tile, {
      [styles.tileCompleted]: allChecked && !isHidden,
      [styles.tileIncomplete]: !allChecked && !isHidden,
      [styles.tileExcluded]: isHidden,
    });

    return (
      <div
        key={`tile-${row.id}`}
        className={tileClass}
        onClick={() => {
          if (isOptional && isHidden) {
            // Включення плитки
            handleCheckboxChange(row.id.toString(), "hide");
          }
        }}
      >
        {/* Заголовок плитки з можливістю виключення (тільки для опціональних) */}
        <div className={styles.tileHeader}>
          <div className={styles.tileTitle}>
            {row?.category?.[selectedLanguage] || row?.name?.[selectedLanguage] || "N/A"}
          </div>
          {isOptional && !isHidden && (
            <button
              className={styles.closeButton}
              onClick={(e) => {
                e.stopPropagation(); // Запобігає виклику handleTileClick
                handleCheckboxChange(row.id.toString(), "hide");
              }}
            >
              <img src={CloseIcon} alt="Close" className={styles.closeIcon} />
            </button>
          )}
        </div>
        {/* Вміст плитки */}
        {!isHidden && (
          <div className={styles.checkboxGroup}>
            {columns.filter(col => col.name !== "category" && col.name !== "name" && !(category === "EU" && col.name === "apostile")).map((column) => {
              const isLinkCheckbox = tableFor === "second" && column.name === "links";

              return (
                <div key={`checkbox-${row.id}-${column.name}`} className={styles.checkboxItem}>
                  {!isLinkCheckbox && (
                    <span className={styles.checkboxLabel}>
                      {column.label[selectedLanguage] || column.name}
                    </span>
                  )}
                  {isLinkCheckbox ? (
                    <a
                      href={row.links[category]?.find(link => link.landName.toLowerCase() === selectedRegion.toLowerCase())?.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(styles.link, styles.linkCheckbox)}
                    >
                      {row.links[category]?.find(link => link.landName.toLowerCase() === selectedRegion.toLowerCase())?.text[selectedLanguage] || "Link"}
                    </a>
                  ) : (
                    <Checkbox
                      id={`checkbox-${row.id}-${column.name}`}
                      checked={
                        checkboxes[row.id.toString()]?.[column.name] || false
                      }
                      onChange={() => handleCheckboxChange(row.id.toString(), column.name)}
                      disabled={
                        disableCheckboxBasedOnName &&
                        columns.some((col) => col.name === "name") &&
                        row.name !== "Included"
                      }
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={cn(styles.tableContainer, customClass)}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {!shouldRenderAsTiles ? (
        // Рендер таблиці (десктоп або не-опціональна таблиця на мобільних)
        <table className={cn(styles.table)}>
          <thead>
            <tr className={styles.tableHeader}>
              {columns.map((column) => {
                if (category === "EU" && column.name === "apostile") return null;
                return (
                  <th key={`header-${column.name}`}>
                    {column.label[selectedLanguage] || column.name}
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
                hasNameColumn={columns.some((col) => col.name === "name")}
                disableCheckboxBasedOnName={disableCheckboxBasedOnName}
                selectedRegion={selectedRegion}
                checkboxes={checkboxes}
                isMobile={isMobile}
              />
            ))}
          </tbody>
        </table>
      ) : (
        // Рендер плиток для мобільних пристроїв
        <div className={styles.tileContainer}>
          {data.map((row) => renderTile(row))}
        </div>
      )}
    </div>
  );
};

export default ResponsiveTable;