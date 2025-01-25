// src/components/Table/BodyItem.jsx

import React from "react";
import PropTypes from "prop-types";
import styles from "./BodyItem.module.scss";
import cn from "classnames";
import CustomCheckbox from "../Checkbox/Checkbox";
import MobileCheckbox from "../Checkbox/MobileCheckbox";
import docIcon from "../../assets/mark.svg";
import { sendOriginalText } from "../../constants/translation/documents";

/**
 * Це компонент для відображення одного рядка (row) у таблиці (десктопний режим).
 * Для мобільного tile-режиму логіка відмалювання знаходиться у ResponsiveTable.jsx.
 */
const BodyItem = React.memo(
  ({
    row,
    columns,
    index,
    tableFor,
    setTableData,
    tableData,
    category,
    language,
    handleCheckboxChange,
    changeHiddenProp,
    hasNameColumn,
    disableCheckboxBasedOnName,
    selectedRegion,
    checkboxes,
    isMobile,
    isOptional, // Новий проп для визначення опціональних документів
  }) => {
    /** Вмикає/вимикає поле (наприклад, "hide") або будь-яке інше */
    const onCheckboxChange = (fieldName) => {
      console.log(
        `Checkbox changed: documentId=${row.id}, fieldName=${fieldName}`
      );
      handleCheckboxChange(row.id.toString(), fieldName);
    };

    /** Приховує опціональний документ (hide = true/false) */
    const onHiddenChange = () => {
      console.log(`Hidden checkbox changed: documentId=${row.id}`);
      handleCheckboxChange(row.id.toString(), "hide");
    };

    /**
     * Головна функція для відмалювання посилань у десктоп-режимі.
     * На мобільному (tile) вона не викликається безпосередньо –
     * там викликається в самому ResponsiveTable (через getLinkElement).
     */
    const getLink = () => {
      if (row.links) {
        if (!selectedRegion) {
          console.warn("No region selected.");
          return (
            <div className={styles.linkWrapper}>
              <a href="/lands" rel="noopener noreferrer" className={styles.link}>
                Select a region
              </a>
            </div>
          );
        }
    
        console.log(
          `Processing doc ID ${row.id}, region "${selectedRegion}", category "${category}"`
        );
    
        const requiredFor = Array.isArray(row.requiredFor)
          ? row.requiredFor.map((item) => item.trim().toLowerCase())
          : ["both"];
        const categoryLower = category.trim().toLowerCase();
        const cleanedSelectedRegion = selectedRegion.trim().toLowerCase();
    
        if (requiredFor.includes("both") || requiredFor.includes(categoryLower)) {
          if (row.links[category]) {
            const regionalLink = row.links[category].find(
              (link) => link.landName.trim().toLowerCase() === cleanedSelectedRegion
            );
    
            if (regionalLink) {
              return (
                <div className={styles.linkWrapper}>
                  <a
                    href={regionalLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {regionalLink.text?.[language] || "Link"}
                  </a>
                </div>
              );
            } else {
              const generalLink = row.links[category].find(
                (link) => link.landName.trim().toLowerCase() === "general"
              );
    
              if (generalLink) {
                return (
                  <div className={styles.linkWrapper}>
                    <a
                      href={generalLink.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      {generalLink.text?.[language] || "Link"}
                    </a>
                  </div>
                );
              } else {
                return (
                  <div className={styles.linkWrapper}>
                    <span className={styles.warning}>No 'General' link found.</span>
                  </div>
                );
              }
            }
          } else {
            return (
              <div className={styles.linkWrapper}>
                <span className={styles.warning}>
                  No links available for this category.
                </span>
              </div>
            );
          }
        } else {
          return (
            <div className={styles.linkWrapper}>
              <span className={styles.info}>Not required for this category.</span>
            </div>
          );
        }
      } else if (row.singleLink) {
        return (
          <div className={styles.linkWrapper}>
            <a
              href={row.singleLink.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {row.singleLink.text[language] || "Link"}
            </a>
          </div>
        );
      } else {
        return (
          <div className={styles.linkWrapper}>
            <span className={styles.warning}>No links found.</span>
          </div>
        );
      }
    };

    /**
     * Чи всі чекбокси по цьому документу відмічені.
     * (Не враховуємо поле "hide" і "links".)
     */
    const areAllCheckedLocal = () => {
      const rowCheckboxes = columns.filter((col) => {
        if (tableFor === "optional" && col.name === "hide") return false;
        // Не враховуємо links
        return typeof row[col.name] !== "undefined" && col.name !== "links";
      });

      return rowCheckboxes.every(
        (col) => checkboxes[row.id.toString()]?.[col.name]
      );
    };

    const allChecked = areAllCheckedLocal();

    /** Обробник кліку по рядку */
    const handleRowClick = () => {
      if (isOptional && checkboxes[row.id.toString()]?.hide) {
        handleCheckboxChange(row.id.toString(), "hide"); // Включаємо документ
      }
    };

    return (
      <tr
        key={row.id}
        className={cn(
          styles.row,
          index % 2 === 0 ? styles.rowOdd : "",
          allChecked ? styles.rowCompleted : styles.rowIncomplete,
          isOptional && checkboxes[row.id.toString()]?.hide
            ? styles.rowExcluded
            : ""
        )}
        onClick={handleRowClick} // Додаємо обробник події
      >
        {columns.map((column, columnIndex) => {
          // Для категорії EU приховуємо колонку "apostile"
          if (category === "EU" && column.name === "apostile") return null;

          return (
            <td
              key={`cell-${row.id}-${columnIndex}`}
              className={styles.tableCell}
              data-column={column.name} // Додаємо атрибут для SCSS
            >
              {/* Якщо це колонка LINKS -> викликаємо getLink() */}
              {column.name === "links" ? (
                getLink()
              ) : column.name === "name" ? (
                <div className={styles.nameField}>
                  {row.name?.[language] || "N/A"}
                </div>
              ) : // Якщо значення поля містить "check", значить це чекбокс
              typeof row?.[column?.name] === "string" &&
                row?.[column?.name]?.includes("check") ? (
                !checkboxes[row.id.toString()]?.hide && (
                  <div
                    className={styles.checkbox_wrapper}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {row?.[`${column.name}_showIcon`] && (
                      <img
                        className={styles.req_img}
                        src={docIcon}
                        alt="mark"
                      />
                    )}

                    {/* Мобільний vs десктопний рендер чекбоксу */}
                    {isMobile ? (
                      <div className={styles.checkboxGroup}>
                        <div className={styles.checkboxItem}>
                          <span className={styles.checkboxLabel}>
                            {column.label?.[language] || column.name}
                          </span>
                          <MobileCheckbox
                            id={`checkbox-${row.id}-${column.name}`}
                            checked={
                              checkboxes[row.id.toString()]?.[column.name] ||
                              false
                            }
                            onChange={() => onCheckboxChange(column.name)}
                            onClick={(e) => e.stopPropagation()} // Зупинка поширення
                            disabled={
                              disableCheckboxBasedOnName &&
                              hasNameColumn &&
                              row.name !== "Included"
                            }
                            label=""
                          />
                        </div>
                      </div>
                    ) : (
                      <CustomCheckbox
                        id={`checkbox-${row.id}-${column.name}`}
                        checked={
                          checkboxes[row.id.toString()]?.[column.name] || false
                        }
                        onChange={() => onCheckboxChange(column.name)}
                        onClick={(e) => e.stopPropagation()} // Зупинка поширення
                        disabled={
                          disableCheckboxBasedOnName &&
                          hasNameColumn &&
                          row.name !== "Included"
                        }
                        label=""
                      />
                    )}
                  </div>
                )
              ) : // Звичайний текст (string)
              typeof row?.[column?.name] === "string" ? (
                <div className={styles.cellContent}>
                  <div>
                    {row?.[column?.name]?.substring(0, 20)}
                    {row?.[column?.name]?.length > 20 ? "..." : ""}
                  </div>
                </div>
              ) : // Якщо поле це об'єкт, що зберігає текст мовами
              typeof row?.[column?.name] === "object" ? (
                <div className={styles.cellContent}>
                  <div>{row?.[column?.name]?.[language] || "N/A"}</div>
                </div>
              ) : null}

              {row?.id === 17 &&
                column.name === "notary" &&
                !checkboxes[row.id.toString()]?.hide && (
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={row?.link}
                  >
                    {sendOriginalText[language] || sendOriginalText["en"]}
                  </a>
                )}

              {/* Якщо документ опціональний - відображати "Included/Excluded" */}
              {row?.optional && column?.name === "category" && !checkboxes[row.id.toString()]?.hide && (
  <div className={cn(styles.optionalCheckboxWrapper, "optional_checkbox_wrapper")}>
    <button
      className={styles.crossButton}
      onClick={() => onHiddenChange()}
      aria-label="Видалити документ"
    >
      ×
    </button>
  </div>
)}
            </td>
          );
        })}

        {/* Додамо кнопку закриття для мобільних пристроїв */}
        {isMobile && tableFor === "main" && checkboxes[row.id.toString()]?.hide === false && (
          <td className={styles.tableCell}>
            <button
              className={styles.closeButton}
              onClick={(e) => {
                e.stopPropagation();
                onHiddenChange(); // Виключає документ
              }}
              aria-label="Виключити документ"
            >
              ×
            </button>
          </td>
        )}
      </tr>
    );
  }
);

// Оновлення PropTypes для додавання isOptional
BodyItem.propTypes = {
  row: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  tableFor: PropTypes.string.isRequired,
  setTableData: PropTypes.func.isRequired,
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  changeHiddenProp: PropTypes.func,
  hasNameColumn: PropTypes.bool.isRequired,
  disableCheckboxBasedOnName: PropTypes.bool.isRequired,
  selectedRegion: PropTypes.string.isRequired,
  checkboxes: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isOptional: PropTypes.bool, // Новий PropType
};

BodyItem.defaultProps = {
  changeHiddenProp: () => {},
  isOptional: false, // Значення за замовчуванням
};

export default BodyItem;