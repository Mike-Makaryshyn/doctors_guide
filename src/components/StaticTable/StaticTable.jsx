import styles from "./styles.module.scss";
import cn from "classnames";
import BodyItem from "./BodyItem";

const StaticTable = ({
   columns,
   data,
   searchedValue,
   maxHeight,
   maxWordsLength = 19,
   setTableData,
   tableRef,
   noTitleAndColumns,
}) => {
   return (
      <div
         ref={tableRef}
         style={{ maxHeight }}
         className={cn(styles.table_container, "no-page-break")}
      >
         <table className={cn(styles.table)}>
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

export default StaticTable;
