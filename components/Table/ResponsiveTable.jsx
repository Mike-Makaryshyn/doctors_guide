// src/components/Table/ResponsiveTable.jsx

import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./ResponsiveTable.module.scss";
import cn from "classnames";
import BodyItem from "./BodyItem";
import useIsMobile from "../../hooks/useIsMobile";
import Tile from "./Tile";

/**
 * ResponsiveTable компонент
 */
import { titles } from "../../constants/translation/documents"; 
const ResponsiveTable = forwardRef(({
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
  hideHeader, 
}, ref) => {
  const isMobile = useIsMobile();
  const shouldRenderAsTiles = isMobile;

  return (
    <div
      className={cn(styles.tableContainer, customClass)}
      ref={ref}
      data-tutorial={title === titles.main[selectedLanguage] ? "mainTable" : "secondTable"}
    >
      {title && (
        <h2
          className={styles.title}
          data-tutorial={
            title === titles.main[selectedLanguage] ? "mainTableTitle" : "secondTableTitle"
          }
        >
          {title}
        </h2>
      )}

      {shouldRenderAsTiles ? (
        <div className={styles.tileContainer}>
          {data.map((row, index) => {
            // Визначаємо, чи це перший або другий тайл
            let dataTutorialTarget = `tile-${index + 1}`;
            if (tableFor === "main" && index === 0) {
              dataTutorialTarget = "firstTile";
            }
            if (tableFor === "main" && index === 1) {
              dataTutorialTarget = "secondTile-checkboxes";
            }
            // Визначаємо, чи це третя плитка в `SecondTable`
            const isSecondTableThirdTile = tableFor === "second" && index === 2;

            return (
              <Tile
                key={`tile-${row.id}`}
                row={row}
                columns={columns}
                category={category}
                selectedLanguage={selectedLanguage}
                selectedRegion={selectedRegion}
                tableFor={tableFor}
                checkboxes={checkboxes}
                handleCheckboxChange={handleCheckboxChange}
                disableCheckboxBasedOnName={disableCheckboxBasedOnName}
                isMobile={isMobile}
                showCheckboxOnMobile={
                  isMobile && tableFor === "main" && row.optional && !checkboxes[row.id]?.hide
                }
                dataIndex={index + 1} // Додаємо індекс для унікальності таргетів
                isSecondTableThirdTile={isSecondTableThirdTile} // Передаємо прапорець
              />
            );
          })}
        </div>
      ) : (
        <table
          className={cn(styles.table, {
            [styles.optionalTable]: tableFor === "optional",
            [styles.mainTable]: tableFor === "main",
            [styles.euTable]: tableFor === "EU",
            [styles.secondTable]: tableFor === "second",
          })}
        >
          {!hideHeader && (
            <thead>
              <tr className={styles.tableHeader} data-tutorial="tableHeader">
                {columns.map((col) => {
                  if (category === "EU" && col.name === "apostile") return null;
                  if (tableFor === "optional" && col.name === "hide") return null;
                  return (
                    <th
                      key={`header-${col.name}`}
                      data-column={col.name}
                      data-tutorial={col.name === "links" ? "header-links" : `header-${col.name}`}
                    >
                      {col.label?.[selectedLanguage] || col.name}
                    </th>
                  );
                })}
              </tr>
            </thead>
          )}
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
                isOptional={tableFor === "optional"}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
});

// Оновлення PropTypes
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
  hideHeader: PropTypes.bool,
};

ResponsiveTable.defaultProps = {
  title: null,
  tableFor: "main",
  disableCheckboxBasedOnName: false,
  customClass: "",
  hideHeader: false,
};

export default ResponsiveTable;