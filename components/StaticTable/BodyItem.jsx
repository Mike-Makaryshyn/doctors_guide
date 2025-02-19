import styles from "./styles.module.scss";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

const BodyItem = ({
   row,
   columns,
   index,
   tableFor,
   maxWordsLength = 20,
   setTableData,
   tableData,
   renderTextWithLinks
}) => {
   return (
      <tr
         key={`row-${index}`}
         className={cn(index % 2 === 0 ? styles.rowOdd : "")}
      >
         {columns?.map((column, columnIndex) => (
            <td key={`cell-${index}-${columnIndex}`}>{renderTextWithLinks ? renderTextWithLinks(row?.[column?.name]) : row?.[column?.name]}</td>
         ))}
      </tr>
   );
};

export default BodyItem;
