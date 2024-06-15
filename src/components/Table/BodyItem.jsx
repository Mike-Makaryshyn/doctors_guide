import React, { useState } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Checkbox from "../Checkbox/Checkbox";
import docIcon from "../../assets/mark.svg";

import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

const checkboxProp = "check";

const BodyItem = ({
   row,
   columns,
   index,
   tableFor,
   maxWordsLength = 20,
   setTableData,
   tableData,
}) => {
   const { selectedLanguage: lang } = useGetGlobalInfo();

   const changeHiddenProp = () => {
      setTableData((prevData) =>
         prevData.map((item) => {
            if (item.id === row.id) {
               return { ...item, hide: !row.hide };
            }
            return item;
         })
      );
   };

   const handleCheckboxChange = (row, columnName) => {
      setTableData((prevData) =>
         prevData.map((item) => {
            if (item.id === row.id) {
               return {
                  ...item,
                  [columnName]:
                     item[columnName] === "check" ? "not_check" : "check",
               };
            }
            return item;
         })
      );
   };

   return (
      <tr
         key={`row-${index}`}
         className={cn(
            index % 2 === 0 ? styles.rowOdd : "",
            row?.hide ? styles.hidden : ""
         )}
      >
         {columns?.map((column, columnIndex) => (
            <td key={`cell-${index}-${columnIndex}`}>
               {typeof row?.[column?.name] === "string" &&
                  row?.[column?.name]?.includes(checkboxProp) && (
                     <div className={styles.checkbox_wraapper}>
                        {row?.[`${column.name}_showIcon`] && (
                           <img
                              className={styles.req_img}
                              src={docIcon}
                              alt="mark"
                           />
                        )}

                        {!row?.hide && (
                           <Checkbox
                              value={row?.[column.name] === "check"}
                              onChange={() =>
                                 handleCheckboxChange(row, column.name)
                              }
                              disabled={row?.[column?.required]}
                           />
                        )}
                     </div>
                  )}

               {typeof row?.[column?.name] === "string" &&
                  !row?.[column?.name]?.includes(checkboxProp) && (
                     <div className={styles.cellContent}>
                        <div>{row?.[column?.name]}</div>
                     </div>
                  )}

               {typeof row?.[column?.name] === "object" && (
                  <div className={styles.cellContent}>
                     <div>{row?.[column?.name]?.[lang]}</div>
                  </div>
               )}

               {row?.id === 13 && column.name === "apostile" && !row.hide && (
                  <a className={styles.link} target="_blank" href={row?.link}>
                     Вивчення мови
                  </a>
               )}

               {row?.id === 14 && column.name === "apostile" && !row.hide && (
                  <a className={styles.link} target="_blank" href={row?.link}>
                     Оригінал надсилається прямо по місцю вимоги при подачі
                     заяви вказується відомство куди повиннен надіслатися
                     документ
                  </a>
               )}

               {row?.optional && column?.name === "category" && (
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
                        onChange={changeHiddenProp}
                     />
                  </div>
               )}
            </td>
         ))}
      </tr>
   );
};

export default BodyItem;
