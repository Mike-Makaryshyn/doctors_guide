import Table from "../../components/Table/Table";
import {
   documents,
   messages,
   documentsOptional,
   columnsFirst,
   titles,
} from "../../constants/translation/documents";
import { useState, useEffect, useRef } from "react";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./styles.module.scss";
import { useReactToPrint } from "react-to-print";
import { documentSecond } from "../../constants/translation/documentsSecond";
import TableSecond from "./TableSecond/Table";

const DocumentsPage = () => {
   const {
      selectedLanguage: language,
      redirectToRegionPage,
      handleChangePage,
   } = useGetGlobalInfo();

   const firstRef = useRef();
   const secondRef = useRef();
   const thirdRef = useRef();
   const combinedRef = useRef();

   const [tableData, setTableData] = useState(documents);
   const [tableDataSecond, setTableDataSecond] = useState(documentSecond);
   const [optionalTableData, setOptionalTableData] =
      useState(documentsOptional);

   const [progress, setProgress] = useState(0);
   const savedData = localStorage.getItem("stored_tables");
   const handlePrint = useReactToPrint({
      content: () => combinedRef.current,
   });

   const cleanTableData = (data) => {
      if (!data) return null;

      return data.map((item) => {
         const cleanedItem = { ...item };
         Object.keys(item).forEach((key) => {
            if (key.includes("_showIcon")) {
               delete cleanedItem[key];
            }
         });
         return cleanedItem;
      });
   };

   useEffect(() => {
      if (savedData) {
         const parsedData = JSON.parse(savedData);
         const cleanedTableData = cleanTableData(parsedData?.table1);
         const cleanedTableDataSecond = cleanTableData(parsedData?.table2);
         const cleanedOptionalTableData = cleanTableData(parsedData?.table3);

         setTableData(cleanedTableData);
         setTableDataSecond(cleanedTableDataSecond);
         setOptionalTableData(cleanedOptionalTableData);
      }
   }, []);

   useEffect(() => {
      const storedData =
         JSON.parse(localStorage.getItem("stored_tables")) || {};

      const updatedStoredData = {
         ...storedData,
         table1: tableData,
         table2: tableDataSecond,
         table3: optionalTableData,
      };

      localStorage.setItem("stored_tables", JSON.stringify(updatedStoredData));
   }, [tableData, tableDataSecond, optionalTableData]);

   const calculateProgress = () => {
      let totalCheckboxes = 0;
      let checkedCheckboxes = 0;

      const filteredData = [
         ...tableData,
         ...tableDataSecond,
         ...optionalTableData,
      ]?.filter((item) => !item?.hide);

      filteredData.forEach((item) => {
         Object.keys(item).forEach((key) => {
            if (
               [
                  "is_exist",
                  "apostile",
                  "notary",
                  "translation",
                  "ready_copies",
                  "sent",
               ].includes(key)
            ) {
               totalCheckboxes++; // Count these checkboxes in total
               if (item[key] === "check") {
                  checkedCheckboxes++; // Count checked checkboxes
               }
            }
         });
      });

      let progress = 0;
      if (totalCheckboxes > 0) {
         progress = (checkedCheckboxes / totalCheckboxes) * 100;
      }
      return progress.toFixed(0);
   };

   useEffect(() => {
      setProgress(calculateProgress());
   }, [tableData, tableDataSecond, optionalTableData]);

   const getMessage = (progress) => {
      if (progress < 20) {
         return messages[language].lessThan20;
      } else if (progress < 50) {
         return messages[language].between20And50;
      } else if (progress < 80) {
         return messages[language].between50And80;
      } else {
         return messages[language].greaterThan80;
      }
   };

   const mainTitle = titles?.main?.[language];
   const optionalTitle = titles?.optional?.[language];

   return (
      <MainLayout>
         <div className="page page1 containerBigger mt-20">
            <div className="firstPageImageBlock"></div>
            <div className={"main_menu__content"}>
               <div className={styles.table_wrapper}>
                  <div className={styles.progress_wrapper}>
                     <div className={styles.progressBar}>
                        <div
                           className={styles.progress}
                           style={{ width: `${progress}%` }}
                        ></div>
                     </div>
                     <div className={styles.progressLabel}>
                        {progress}% - {getMessage(progress)}
                     </div>
                  </div>
                  <div ref={combinedRef}>
                     <Table
                        title={mainTitle}
                        columns={columnsFirst}
                        tableRef={firstRef}
                        data={tableData}
                        setTableData={setTableData}
                        selectedLanguage={language}
                     />
                     <TableSecond
                        columns={[
                           { name: "name" },
                           { name: "is_exist" },
                           { name: "links" },
                           { name: "sent" },
                        ]}
                        tableRef={secondRef}
                        setTableData={setTableDataSecond}
                        data={tableDataSecond}
                        noTitleAndColumns
                     />
                     <div className="page-break">
                        <Table
                           title={optionalTitle}
                           columns={columnsFirst}
                           tableRef={thirdRef}
                           data={optionalTableData}
                           setTableData={setOptionalTableData}
                           selectedLanguage={language}
                        />
                     </div>
                  </div>
               </div>
               <button
                  className={"main_menu_back"}
                  onClick={() => handleChangePage("/main_menu")}
               >
                  &#8592;
               </button>
               <button className={styles.printBtn} onClick={handlePrint}>
                  Print
               </button>
            </div>
         </div>
      </MainLayout>
   );
};

export default DocumentsPage;
