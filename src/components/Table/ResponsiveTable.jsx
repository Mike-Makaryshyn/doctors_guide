// src/components/Table/ResponsiveTable.jsx
import React from "react";
import styles from "./ResponsiveTable.module.scss";
import cn from "classnames";
import BodyItem from "./BodyItem";
import useIsMobile from "../../hooks/useIsMobile";
import Checkbox from "../../components/Checkbox/Checkbox";
import CloseIcon from "../../assets/close-icon.svg";

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

  // Перевіряємо, чи всі чекбокси відмічені по рядку
  const areAllChecked = (row) => {
    const relevantCols = columns.filter((col) => {
      if (tableFor === "optional" && col.name === "hide") return false;
      if (category === "EU" && col.name === "apostile") return false;
      return row[col.name] !== undefined;
    });
    return relevantCols.every((col) => checkboxes[row.id]?.[col.name]);
  };

  /**
   * Функція для генерації елементів посилань
   */
  const getLinkElement = (row, selectedRegion, category, language) => {
    if (row.links) {
      // Якщо регіон не обрано, просто запропонуємо обрати
      if (!selectedRegion) {
        return (
          <a href="/lands" rel="noopener noreferrer" className={styles.link}>
            Select a region
          </a>
        );
      }

      const requiredFor = Array.isArray(row.requiredFor)
        ? row.requiredFor.map((item) => item.trim().toLowerCase())
        : ["both"];
      const categoryLower = category.trim().toLowerCase();
      const cleanedSelectedRegion = selectedRegion.trim().toLowerCase();

      // Якщо документ потрібен для обраної категорії
      if (requiredFor.includes("both") || requiredFor.includes(categoryLower)) {
        if (row.links[category]) {
          // Шукаємо посилання для конкретного регіону
          const regionalLink = row.links[category].find((link) => {
            const cleanedLandName = link.landName.trim().toLowerCase();
            return cleanedLandName === cleanedSelectedRegion;
          });

          if (regionalLink) {
            return (
              <a
                href={regionalLink.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {regionalLink.text?.[language] || "Link"}
              </a>
            );
          } else {
            // Якщо немає точного регіону, шукаємо "General"
            const generalLink = row.links[category].find(
              (link) => link.landName.trim().toLowerCase() === "general"
            );
            if (generalLink) {
              return (
                <a
                  href={generalLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {generalLink.text?.[language] || "Link"}
                </a>
              );
            } else {
              return (
                <span className={styles.warning}>
                  No 'General' link found.
                </span>
              );
            }
          }
        } else {
          // links[category] відсутній
          return (
            <span className={styles.warning}>
              No links available for this category.
            </span>
          );
        }
      } else {
        // Не потрібен для цієї категорії
        return (
          <span className={styles.info}>
            Not required for this category.
          </span>
        );
      }
    } else if (row.singleLink) {
      // Якщо документ має singleLink
      return (
        <a
          href={row.singleLink.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {row.singleLink.text[language] || "Link"}
        </a>
      );
    } else {
      // Ніяких лінків немає
      return <span className={styles.warning}>No links found.</span>;
    }
  };

  /**
   * Функція для відмальовування "tile"-карток (мобільна версія).
   */
  const renderTile = (row) => {
    console.log("Rendering tile for row:", row.id);
    const isOptional = tableFor === "optional";
    const hidden = isOptional ? checkboxes[row.id]?.hide : false;
    const allChecked = areAllChecked(row);

    const tileClass = cn(styles.tile, {
      [styles.tileCompleted]: allChecked && !hidden,
      [styles.tileIncomplete]: !allChecked && !hidden,
      [styles.tileExcluded]: hidden,
    });

    const onTileClick = () => {
      if (isOptional) {
        handleCheckboxChange(row.id.toString(), "hide");
      }
    };

    // Відфільтровуємо колонки, щоб не було name, category, apostile (для EU) тощо
    const filteredCols = columns.filter((col) => {
      if (col.name === "category" || col.name === "name") return false;
      if (category === "EU" && col.name === "apostile") return false;
      if (tableFor === "optional" && col.name === "hide") return false;
      return true;
    });

    return (
      <div
        key={`tile-${row.id}`}
        className={tileClass}
        onClick={() => {
          // Якщо документ прихований, при натисканні знову відобразити
          if (hidden) onTileClick();
        }}
      >
        <div className={styles.tileHeader}>
          <div className={styles.tileTitle}>
            {row.category?.[selectedLanguage] ||
              row.name?.[selectedLanguage] ||
              "N/A"}
          </div>
          {/* Хрестик, якщо optional і не прихований */}
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
            {filteredCols.map((col) => {
              // Якщо це колонка "links" — малюємо лінк
              if (col.name === "links") {
                return (
                  <div
                    key={`col-${row.id}-${col.name}`}
                    className={styles.checkboxBox}
                  >
                    <div className={styles.checkboxLabelBox}>
                      {col.label?.[selectedLanguage] || "Links"}
                    </div>
                    <div className={styles.checkboxItem}>
                      {getLinkElement(row, selectedRegion, category, selectedLanguage)}
                    </div>
                  </div>
                );
              }

              // Інакше — це «чекбоксові» колонки
              const checked = checkboxes[row.id]?.[col.name] || false;
              const labelText = col.label?.[selectedLanguage] || col.name;

              return (
                <div
                  key={`col-${row.id}-${col.name}`}
                  className={styles.checkboxBox}
                >
                  <div className={styles.checkboxLabelBox}>{labelText}</div>
                  <div className={styles.checkboxItem}>
                    <Checkbox
                      id={`checkbox-${row.id}-${col.name}`}
                      checked={checked}
                      onChange={() =>
                        handleCheckboxChange(row.id.toString(), col.name)
                      }
                      disabled={
                        disableCheckboxBasedOnName &&
                        columns.some((c) => c.name === "name") &&
                        row.name !== "Included"
                      }
                    />
                  </div>
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

      {/* Якщо не мобільний -> показуємо звичайну таблицю (BodyItem) */}
      {!shouldRenderAsTiles ? (
        <table className={cn(styles.table)}>
          <thead>
            <tr className={styles.tableHeader}>
              {columns.map((col) => {
                if (category === "EU" && col.name === "apostile") return null;
                if (tableFor === "optional" && col.name === "hide") return null;
                return (
                  <th key={`header-${col.name}`}>
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
          {data.map((row) => renderTile(row))}
        </div>
      )}
    </div>
  );
};

export default ResponsiveTable;
