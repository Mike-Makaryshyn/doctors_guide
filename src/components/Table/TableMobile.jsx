import React, { useState } from "react";
import styles from "./TableMobile.module.scss";

const TableMobile = ({ data, columns, setTableData, selectedLanguage }) => {
    const slideableColumns = columns.slice(1); // Колонки, що прокручуються
    const [currentColumnIndex, setCurrentColumnIndex] = useState(0);

    // Функції для прокрутки колонок
    const nextColumn = () => {
        setCurrentColumnIndex((prev) => (prev + 1) % slideableColumns.length);
    };

    const prevColumn = () => {
        setCurrentColumnIndex(
            (prev) => (prev - 1 + slideableColumns.length) % slideableColumns.length
        );
    };

    // Функція зміни чекбокса
    const handleCheckboxChange = (index, key) => {
        const updatedData = [...data];
        updatedData[index][key] =
            updatedData[index][key] === "check" ? "not_check" : "check";
        setTableData(updatedData);
    };

    return (
        <div className={styles.tableMobileWrapper}>
            {/* Заголовок таблиці */}
            <div className={styles.tableHeader}>
                <div className={styles.fixedColumn}>Документ</div>
                <div className={styles.scrollableHeader}>
                    <button onClick={prevColumn} className={styles.arrowButton}>
                        ⬅️
                    </button>
                    <span className={styles.columnLabel}>
                        {slideableColumns[currentColumnIndex]?.label?.[selectedLanguage] || "N/A"}
                    </span>
                    <button onClick={nextColumn} className={styles.arrowButton}>
                        ➡️
                    </button>
                </div>
            </div>

            {/* Тіло таблиці */}
            <div className={styles.tableBody}>
                {data.map((row, index) => (
                    <div key={index} className={styles.tableRow}>
                        {/* Фіксована колонка */}
                        <div className={styles.fixedColumn}>
                            {row?.category?.[selectedLanguage] ||
                                row?.name?.[selectedLanguage] ||
                                "N/A"}
                        </div>

                        {/* Прокручувана колонка */}
                        <div className={styles.scrollableColumn}>
                            {slideableColumns[currentColumnIndex]?.name === "links" ? (
                                row?.links?.map((linkObj, idx) => (
                                    <a
                                        key={idx}
                                        href={linkObj.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {linkObj.text?.[selectedLanguage] || "Link"}
                                    </a>
                                ))
                            ) : (
                                <input
                                    type="checkbox"
                                    checked={
                                        row[slideableColumns[currentColumnIndex]?.name] === "check"
                                    }
                                    onChange={() =>
                                        handleCheckboxChange(
                                            index,
                                            slideableColumns[currentColumnIndex]?.name
                                        )
                                    }
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TableMobile;