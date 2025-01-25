// src/components/Table/ResponsiveTable.jsx

import React from "react";
import PropTypes from "prop-types";
import styles from "./ResponsiveTable.module.scss";
import cn from "classnames";
import BodyItem from "./BodyItem";
import useIsMobile from "../../hooks/useIsMobile";
import Tile from "./Tile";

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
  hideHeader, 
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

      {/* Рендер таблиці або плиток залежно від пристрою */}
      {shouldRenderAsTiles ? (
        <div className={styles.tileContainer}>
          {data.map((row) => {
  const isIncluded = !checkboxes[row.id]?.hide;
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
    isIncluded={!checkboxes[row.id]?.hide}
    showCheckboxOnMobile={isMobile && tableFor === "main" && row.optional && !checkboxes[row.id]?.hide}
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
};

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
};

ResponsiveTable.defaultProps = {
  title: null,
  tableFor: "main",
  disableCheckboxBasedOnName: false,
  customClass: "",
};

export default ResponsiveTable;