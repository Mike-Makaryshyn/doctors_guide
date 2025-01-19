// src/components/Table/BodyItem.jsx

import React from "react";
import styles from "./BodyItem.module.scss";
import cn from "classnames";
import Checkbox from "../../components/Checkbox/Checkbox";
import docIcon from "../../assets/mark.svg";

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
  }) => {
    const onCheckboxChange = (fieldName) => {
      console.log(`Checkbox changed: documentId=${row.id}, fieldName=${fieldName}`);
      handleCheckboxChange(row.id.toString(), fieldName);
    };

    const onHiddenChange = () => {
      console.log(`Hidden checkbox changed: documentId=${row.id}`);
      handleCheckboxChange(row.id.toString(), "hide");
    };

    const getLink = () => {
      if (row.links) {
        if (!selectedRegion) {
          console.warn("No region selected.");
          return (
            <a href="/lands" rel="noopener noreferrer" className={styles.link}>
              Select a region
            </a>
          );
        }

        console.log(
          `Processing document ID ${row.id} for region "${selectedRegion}" and category "${category}"`
        );

        const requiredFor = Array.isArray(row.requiredFor)
          ? row.requiredFor.map((item) => item.trim().toLowerCase())
          : ["both"];
        const categoryLower = category.trim().toLowerCase();
        const cleanedSelectedRegion = selectedRegion.trim().toLowerCase();

        console.log(
          `Document ID ${row.id} requiredFor (after trim and toLowerCase):`,
          requiredFor
        );
        console.log(`Category (trimmed and lowercased): "${categoryLower}"`);
        console.log(
          `Cleaned selectedRegion: "${cleanedSelectedRegion}"`
        );

        if (
          requiredFor.includes("both") ||
          requiredFor.includes(categoryLower)
        ) {
          if (row.links[category]) {
            console.log(`Links exist for category "${category}"`);

            // Шукаємо посилання для конкретного регіону
            const regionalLink = row.links[category].find((link) => {
              const cleanedLandName = link.landName.trim().toLowerCase();
              console.log(
                `Comparing landName "${cleanedLandName}" with selectedRegion "${cleanedSelectedRegion}"`
              );
              return cleanedLandName === cleanedSelectedRegion;
            });

            if (regionalLink) {
              console.log(
                `Found link for region "${selectedRegion}":`,
                regionalLink
              );
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
              console.warn(
                `No link found for region "${selectedRegion}" in category "${category}" for document ID ${row.id}. Attempting to use 'General' link.`
              );

              // Шукаємо 'General' посилання
              const generalLink = row.links[category].find(
                (link) => link.landName.trim().toLowerCase() === "general"
              );

              if (generalLink) {
                console.log(
                  `Found 'General' link for category "${category}" in document ID ${row.id}:`,
                  generalLink
                );
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
                console.warn(
                  `No 'General' link found for category "${category}" in document ID ${row.id}.`
                );
                return (
                  <span className={styles.warning}>
                    No links available for this category.
                  </span>
                );
              }
            }
          } else {
            console.warn(
              `No links defined for category "${category}" in document ID ${row.id}`
            );
            return (
              <span className={styles.warning}>
                No links available for this category.
              </span>
            );
          }
        } else {
          console.warn(
            `Document ID ${row.id} is not required for category "${category}"`
          );
          return (
            <span className={styles.info}>
              Not required for this category.
            </span>
          );
        }
      } else if (row.singleLink) {
        console.log(`Handling singleLink for document ID ${row.id}`);
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
        console.warn(`No links found for document ID ${row.id}`);
        return (
          <span className={styles.warning}>No links available.</span>
        );
      }
    };

    // Функція для перевірки, чи всі необхідні чекбокси відмічені
    const areAllCheckedLocal = () => {
      const rowCheckboxes = columns.filter(col => {
        if (tableFor === "optional" && col.name === "hide") return false;
        return typeof row[col.name] !== "undefined" && col.name !== "links";
      });

      return rowCheckboxes.every(col => checkboxes[row.id.toString()]?.[col.name]);
    };

    const allChecked = areAllCheckedLocal();

    return (
      <tr
        key={row.id}
        className={cn(
          styles.row,
          index % 2 === 0 ? styles.rowOdd : "",
          allChecked ? styles.rowCompleted : styles.rowIncomplete
        )}
      >
        {columns.map((column, columnIndex) => {
          // Для EU, приховати 'apostile'
          if (category === "EU" && column.name === "apostile") return null;

          return (
            <td key={`cell-${row.id}-${columnIndex}`} className={styles.tableCell}>
              {column.name === "links" ? (
                getLink()
              ) : column.name === "name" ? (
                <div className={styles.nameField}>
                  {row.name?.[language] || "N/A"}
                </div>
              ) : typeof row?.[column?.name] === "string" &&
                row?.[column?.name]?.includes("check") ? (
                !checkboxes[row.id.toString()]?.hide && (
                  <div className={styles.checkbox_wrapper}>
                    {row?.[`${column.name}_showIcon`] && (
                      <img
                        className={styles.req_img}
                        src={docIcon}
                        alt="mark"
                      />
                    )}

                    {/* Групування чекбоксів для мобільної версії */}
                    {isMobile ? (
                      // Для мобільних: чекбокс з лейблом або лінк
                      <div className={styles.checkboxGroup}>
                        <div className={styles.checkboxItem}>
                          {!(
                            tableFor === "second" && column.name === "links"
                          ) && (
                            <span className={styles.checkboxLabel}>
                              {column.label[language] || column.name}
                            </span>
                          )}
                          {tableFor === "second" && column.name === "links" ? (
                            // Для лінків у другій таблиці: рендеримо лінк як кнопку
                            <a
                              href={
                                row.links[category]?.find(
                                  (link) =>
                                    link.landName.trim().toLowerCase() ===
                                    selectedRegion.trim().toLowerCase()
                                )?.link || "#"
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn(styles.link, styles.linkCheckbox)}
                            >
                              {row.links[category]?.find(
                                (link) =>
                                  link.landName.trim().toLowerCase() ===
                                  selectedRegion.trim().toLowerCase()
                              )?.text[language] || "Link"}
                            </a>
                          ) : (
                            <Checkbox
                              id={`checkbox-${row.id}-${column.name}`} // Унікальний id
                              checked={
                                checkboxes[row.id.toString()]?.[column.name] ||
                                false
                              }
                              onChange={() => onCheckboxChange(column.name)}
                              disabled={
                                disableCheckboxBasedOnName &&
                                hasNameColumn &&
                                row.name !== "Included"
                              }
                            />
                          )}
                        </div>
                      </div>
                    ) : (
                      // Десктопна версія: просто чекбокс без лейблу
                      <Checkbox
                        id={`checkbox-${row.id}-${column.name}`} // Унікальний id
                        checked={
                          checkboxes[row.id.toString()]?.[column.name] ||
                          false
                        }
                        onChange={() => onCheckboxChange(column.name)}
                        disabled={
                          disableCheckboxBasedOnName &&
                          hasNameColumn &&
                          row.name !== "Included"
                        }
                      />
                    )}
                  </div>
                )
              ) : typeof row?.[column?.name] === "string" ? (
                <div className={styles.cellContent}>
                  <div>
                    {row?.[column?.name]?.substring(0, 20)}
                    {row?.[column?.name]?.length > 20 ? "..." : ""}
                  </div>
                </div>
              ) : typeof row?.[column?.name] === "object" ? (
                <div className={styles.cellContent}>
                  <div>{row?.[column?.name]?.[language] || "N/A"}</div>
                </div>
              ) : null}

              {(row?.id === 13 || row?.id === 14) &&
                column.name === "apostile" &&
                !checkboxes[row.id.toString()]?.hide && (
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={row?.link}
                  >
                    {row.id === 13
                      ? "Вивчення мови"
                      : "Оригінал надсилається прямо по місцю вимоги при подачі заяви вказується відомство куди повиннен надіслатися документ"}
                  </a>
                )}

              {row?.optional && column?.name === "category" && (
                <div
                  className={cn(
                    styles.optionalCheckboxWrapper,
                    "optional_checkbox_wrapper"
                  )}
                >
                  <Checkbox
                    id={`optional-checkbox-${row.id}`} // Унікальний id
                    label={
                      checkboxes[row.id.toString()]?.hide
                        ? "Excluded"
                        : "Included"
                    }
                    checked={checkboxes[row.id.toString()]?.hide || false}
                    onChange={() => onHiddenChange()}
                  />
                </div>
              )}
            </td>
          );
        })}
      </tr>
    );
  }
);

export default BodyItem;