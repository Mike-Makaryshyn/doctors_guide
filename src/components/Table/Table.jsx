import styles from "./styles.module.scss";
import cn from "classnames";
import BodyItem from "./BodyItem";

const Table = ({
   columns,
   data,
   searchedValue,
   maxHeight,
   maxWordsLength = 19,
   setTableData,
   tableRef,
   title,
   isHeaderNeeded = true,
}) => {
   return (
      <div
         ref={tableRef}
         style={{ maxHeight }}
         className={styles.table_container}
      >
         <div className={styles.title}> {title}</div>

         <table className={cn(styles.table)}>
            {isHeaderNeeded && (
               <thead className={styles.thead}>
                  <tr>
                     {columns?.map((column, index) => (
                        <th
                           key={column?.name}
                           className={cn(styles.header, "noselect")}
                        >
                           <span>{column?.label?.replaceAll("_", " ")}</span>
                        </th>
                     ))}
                  </tr>
               </thead>
            )}
            <tbody className={styles.tbody}>
               {data?.map((row, index) => (
                  <BodyItem
                     key={`row-${index}`}
                     row={row}
                     columns={columns}
                     index={index}
                     maxWordsLength={maxWordsLength}
                     setTableData={setTableData}
                     tableData={data}
                  />
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Table;
