import React, { useState, useCallback } from "react";
import styles from "./TableMobile.module.scss";
import Checkbox from '../Checkbox/Checkbox';
import cn from 'classnames';

// Мапа заголовків колонок
const defaultHeaderLabels = {
    document: { 
        en: "Document", 
        fr: "Document", 
        es: "Documento", 
        ar: "مستند", 
        tr: "Belge", 
        pl: "Dokument", 
        uk: "Документ", 
        ru: "Документ", 
        de: "Dokument" 
    },
    name: { 
        en: "Name", 
        fr: "Nom", 
        es: "Nombre", 
        ar: "الاسم", 
        tr: "İsim", 
        pl: "Nazwa", 
        uk: "Назва", 
        ru: "Название", 
        de: "Name" 
    },
    status: { 
        en: "Status", 
        fr: "Statut", 
        es: "Estado", 
        ar: "الحالة", 
        tr: "Durum", 
        pl: "Status", 
        uk: "Статус", 
        ru: "Статус", 
        de: "Status" 
    },
    links: { 
        en: "Links", 
        fr: "Liens", 
        es: "Enlaces", 
        ar: "روابط", 
        tr: "Bağlantılar", 
        pl: "Linki", 
        uk: "Посилання", 
        ru: "Ссылки", 
        de: "Links" 
    },
    sent: { 
        en: "Sent", 
        fr: "Envoyé", 
        es: "Enviado", 
        ar: "تم الإرسال", 
        tr: "Gönderildi", 
        pl: "Wysłano", 
        uk: "Відправлено", 
        ru: "Отправлено", 
        de: "Gesendet" 
    },
    is_exist: { 
        en: "Exists", 
        fr: "Existe", 
        es: "Existe", 
        ar: "يوجد", 
        tr: "Var", 
        pl: "Istnieje", 
        uk: "Існує", 
        ru: "Существует", 
        de: "Existiert" 
    },
    // Додайте інші колонки за потребою
};

const TableMobile = ({ data, columns, setTableData, selectedLanguage, selectedRegion }) => {
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

    const changeHiddenProp = (row) => {
      setTableData((prevData) =>
         prevData.map((item) => {
            if (item.id === row.id) {
               return { ...item, hide: !row.hide };
            }
            return item;
         })
      );
   };

    // Функція зміни чекбокса
    const handleCheckboxChange = useCallback((index, key) => {
        const updatedData = [...data];
        updatedData[index][key] =
            updatedData[index][key] === "check" ? "not_check" : "check";
        setTableData(updatedData);
    }, [data, setTableData]);

    // Визначаємо, чи показувати стрілки
    const showArrows = slideableColumns.length > 1;

    // Функція для отримання заголовка колонки
    const getColumnLabel = (columnName) => {
        if (columns[currentColumnIndex]?.label?.[selectedLanguage]) {
            return columns[currentColumnIndex].label[selectedLanguage];
        }
        return defaultHeaderLabels[columnName]?.[selectedLanguage] || columnName || "N/A";
    };

    return (
        <div className={styles.tableMobileWrapper}>
            {/* Заголовок таблиці */}
            <div className={styles.tableHeader}>
                <div className={styles.fixedColumn}>
                    {defaultHeaderLabels.document[selectedLanguage] || "Document"} {/* Локалізований заголовок */}
                </div>
                <div className={styles.scrollableHeader}>
                    {showArrows && (
                        <button onClick={prevColumn} className={styles.arrowButton}>
                            ⬅️
                        </button>
                    )}
                    <span className={styles.columnLabel}>
                        {getColumnLabel(slideableColumns[currentColumnIndex]?.name)}
                    </span>
                    {showArrows && (
                        <button onClick={nextColumn} className={styles.arrowButton}>
                            ➡️
                        </button>
                    )}
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
                                row?.singleLink?.link ? (
                                    // Відображення singleLink, якщо він присутній
                                    <a
                                        href={row.singleLink.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        {row.singleLink.text[selectedLanguage] || "Link"}
                                    </a>
                                ) : selectedRegion ? (
                                    // Відображення посилання відповідно до вибраного регіону
                                    row?.links
                                        ?.filter(linkObj => linkObj.landName === selectedRegion)
                                        .map((linkObj, idx) => (
                                            <a
                                                key={idx}
                                                href={linkObj.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                            >
                                                {linkObj.text?.[selectedLanguage] || "Link"}
                                            </a>
                                        ))
                                ) : !row?.noLandCheckNeeded ? (
                                    // Відображення посилання для вибору регіону
                                    <a href="/lands" rel="noopener noreferrer" className={styles.link}>
                                        Select a region
                                    </a>
                                ) : null
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
                                    className={styles.checkbox}
                                />
                            )}
                        </div>


               {row?.optional && (
                  <div
                     className={cn(
                        styles.optional_cehckbox_wrapper,
                        "optional_checkbox_wrapper"
                     )}
                  >
                     <Checkbox
                        label={row.hide ? "Виключено" : "Включено"}
                        value={row.hide}
                        defaultValue={row.optional}
                        onChange={()=> changeHiddenProp(row)}
                     />
                  </div>
               )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TableMobile;