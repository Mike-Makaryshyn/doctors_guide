import styles from "./styles.module.scss";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Checkbox from "../../../components/Checkbox/Checkbox";
import docIcon from "../../../assets/mark.svg";
import useGetGlobalInfo from "../../../hooks/useGetGlobalInfo";

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
   const { selectedLanguage, selectedRegion } = useGetGlobalInfo();

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

   const isCheckbox = (column) =>
      typeof row?.[column?.name] === "string" &&
      row?.[column?.name]?.includes(checkboxProp);

   const isNotCheckbox = (column) =>
      typeof row?.[column?.name] === "string" &&
      !row?.[column?.name]?.includes(checkboxProp);

   return (
      <tr
         key={`row-${index}`}
         className={cn(index % 2 === 0 ? styles.rowOdd : "")}
      >
         {columns?.map((column, columnIndex) => (
            <td key={`cell-${index}-${columnIndex}`}>
               {isCheckbox(column) && (
                  <div className={styles.checkbox_wraapper}>
                     {row?.[column?.required] && (
                        <img
                           className={styles.req_img}
                           src={docIcon}
                           alt="mark"
                        />
                     )}
                  </div>
               )}

               {isNotCheckbox(column) && (
                  <div className={styles.cellContent}>
                     <div>{row?.[column?.name]}</div>
                  </div>
               )}

               {column?.name === "name" && (
                  <div className={styles.cellContent}>
                     {typeof row === "object" && row !== null ? (
                        <div>{row?.name?.[selectedLanguage]}</div>
                     ) : (
                        <div>{row?.[column?.name?.[selectedLanguage]]}</div>
                     )}
                  </div>
               )}

               {column?.name === "links" && (
                  <div className={styles.cellContent}>
                     {row?.links?.map(
                        (linkObj, index) =>
                           linkObj?.landName === selectedRegion && (
                              <div key={index}>
                                 <a
                                    href={linkObj.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    {linkObj.text[selectedLanguage]}
                                 </a>
                              </div>
                           )
                     )}

                     {!selectedRegion && (
                        <div key={index}>
                           <a href="/lands" rel="noopener noreferrer">
                              Select a region
                           </a>
                        </div>
                     )}
                  </div>
               )}

               {isCheckbox(column) && (
                  <div className={styles.checkbox_wraapper}>
                     {row?.[column?.required] && (
                        <img
                           className={styles.req_img}
                           src={docIcon}
                           alt="mark"
                        />
                     )}
                     {!row?.hide && (
                        <Checkbox
                           value={row?.[column.name] === "check" ? true : false}
                           onChange={() =>
                              handleCheckboxChange(row, column.name)
                           }
                           disabled={row?.[column?.required]}
                        />
                     )}
                  </div>
               )}
            </td>
         ))}
      </tr>
   );
};

export default BodyItem;
