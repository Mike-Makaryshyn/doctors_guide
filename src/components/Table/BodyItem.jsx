// src/components/Table/BodyItem.jsx

import React from "react";
import PropTypes from "prop-types";
import styles from "./BodyItem.module.scss";
import cn from "classnames";
import CustomCheckbox from "../Checkbox/Checkbox";
import MobileCheckbox from "../Checkbox/MobileCheckbox";
import docIcon from "../../assets/mark.svg";
import { sendOriginalText } from "../../constants/translation/documents";

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
    isOptional,
  }) => {
    const onCheckboxChange = (fieldName) => {
      handleCheckboxChange(row.id.toString(), fieldName);
    };

    const onHiddenChange = () => {
      handleCheckboxChange(row.id.toString(), "hide");
    };

    const getLink = () => {
      if (row.links) {
        if (!selectedRegion) {
          return (
            <div className={styles.linkWrapper} data-tutorial="selectRegionLink">
              <a
                href="/lands"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Select a region
              </a>
            </div>
          );
        }

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

            if (regionalLink) {
              return (
                <div className={styles.linkWrapper} data-tutorial="regionalLink">
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
                  <div className={styles.linkWrapper} data-tutorial="generalLink">
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
                  <div className={styles.linkWrapper} data-tutorial="noGeneralLink">
                    <span className={styles.warning}>
                      No 'General' link found.
                    </span>
                  </div>
                );
              }
            }
          } else {
            return (
              <div className={styles.linkWrapper} data-tutorial="noCategoryLinks">
                <span className={styles.warning}>
                  No links available for this category.
                </span>
              </div>
            );
          }
        } else {
          return (
            <div className={styles.linkWrapper} data-tutorial="notRequiredForCategory">
              <span className={styles.info}>
                Not required for this category.
              </span>
            </div>
          );
        }
      } else if (row.singleLink) {
        return (
          <div className={styles.linkWrapper} data-tutorial="singleLink">
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
          <div className={styles.linkWrapper} data-tutorial="noLinks">
            <span className={styles.warning}>No links found.</span>
          </div>
        );
      }
    };

    const areAllCheckedLocal = () => {
      const rowCheckboxes = columns.filter((col) => {
        if (tableFor === "optional" && col.name === "hide") return false;
        return typeof row[col.name] !== "undefined" && col.name !== "links";
      });

      return rowCheckboxes.every(
        (col) => checkboxes[row.id.toString()]?.[col.name]
      );
    };

    const allChecked = areAllCheckedLocal();

    const handleRowClick = () => {
      if (isOptional && checkboxes[row.id.toString()]?.hide) {
        handleCheckboxChange(row.id.toString(), "hide");
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
        onClick={handleRowClick}
      >
        {columns.map((column, columnIndex) => {
          if (category === "EU" && column.name === "apostile") return null;

          return (
            <td
              key={`cell-${row.id}-${columnIndex}`}
              className={styles.tableCell}
              data-column={column.name}
              data-tutorial={
                column.name === "links" ? "linksColumn" : undefined
              }
            >
              {column.name === "links" ? (
                getLink()
              ) : column.name === "name" ? (
                <div className={styles.nameField} data-tutorial="nameColumn">
                  {row.name?.[language] || "N/A"}
                </div>
              ) : typeof row?.[column?.name] === "string" &&
                row?.[column?.name]?.includes("check") ? (
                !checkboxes[row.id.toString()]?.hide && (
                  <div
                    className={styles.checkbox_wrapper}
                    onClick={(e) => e.stopPropagation()}
                    data-tutorial={`checkbox-${column.name}`}
                  >
                    {row?.[`${column.name}_showIcon`] && (
                      <img
                        className={styles.req_img}
                        src={docIcon}
                        alt="mark"
                      />
                    )}

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
                            onClick={(e) => e.stopPropagation()}
                            disabled={
                              disableCheckboxBasedOnName &&
                              hasNameColumn &&
                              row.name !== "Included"
                            }
                            label=""
                            data-tutorial={`mobileCheckbox-${column.name}`} // Додаємо атрибут туторіалу
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
                        onClick={(e) => e.stopPropagation()}
                        disabled={
                          disableCheckboxBasedOnName &&
                          hasNameColumn &&
                          row.name !== "Included"
                        }
                        label=""
                        data-tutorial={`checkbox-${column.name}-desktop`} 
                      />
                    )}

                    {row?.id === 17 && column.name === "notary" && (
                      <div
                        className={styles.checkbox_link_container}
                        data-tutorial="rov17NotaryLink"
                      >
                        <a
                          className={styles.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={row?.link}
                        >
                          {sendOriginalText[language] || sendOriginalText["en"]}
                        </a>
                      </div>
                    )}
                  </div>
                )
              ) : row?.id === 17 && column.name === "notary" ? (
                <div
                  className={styles.checkbox_link_container}
                  onClick={(e) => e.stopPropagation()}
                  data-tutorial="notaryLinkAlternative"
                >
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={row?.link || "#"}
                  >
                    {sendOriginalText[language] || sendOriginalText["en"]}
                  </a>
                </div>
              ) : typeof row?.[column?.name] === "string" ? (
                <div className={styles.cellContent} data-tutorial="textContent">
                  <div>
                    {row?.[column?.name]?.substring(0, 20)}
                    {row?.[column?.name]?.length > 20 ? "..." : ""}
                  </div>
                </div>
              ) : typeof row?.[column?.name] === "object" ? (
                <div className={styles.cellContent} data-tutorial="objectContent">
                <div>
                  {row?.[column?.name]?.[language]
                    ? row[column.name][language].replace("{region}", selectedRegion || "ваш регіон")
                    : "N/A"}
                </div>
              </div>
              ) : null}

              {row?.optional &&
                column?.name === "category" &&
                !checkboxes[row.id.toString()]?.hide && (
                  <div
                    className={cn(
                      styles.optionalCheckboxWrapper,
                      "optional_checkbox_wrapper"
                    )}
                    data-tutorial="optionalDocument"
                  >
                    <button
                      className={styles.crossButtonbody}
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

        {isMobile &&
          tableFor === "main" &&
          checkboxes[row.id.toString()]?.hide === false && (
            <td className={styles.tableCell} data-tutorial="closeButton">
              <button
                className={styles.closeButton}
                onClick={(e) => {
                  e.stopPropagation();
                  onHiddenChange();
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