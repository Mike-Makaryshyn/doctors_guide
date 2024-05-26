import Table from "../../components/Table/Table";
import {
   documents,
   messages,
   documentsOptional,
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
      selectedRegion,
   } = useGetGlobalInfo();

   const firstRef = useRef();
   const secondRef = useRef();
   const thirdRef = useRef();
   const combinedRef = useRef();

   const [tableData, setTableData] = useState(documents);
   const [tableDataSecond, setTableDataSecond] = useState(documentSecond);
   const [progress, setProgress] = useState(0);
   const savedData = localStorage.getItem("docs_table_data");

   const handlePrint = useReactToPrint({
      content: () => combinedRef.current,
   });

   useEffect(() => {
      if (savedData) {
         setTableData(JSON.parse(savedData));
      }
   }, []);

   useEffect(() => {
      localStorage.setItem("docs_table_data", JSON.stringify(tableData));
   }, [tableData]);

   const calculateProgress = () => {
      let totalCheckboxes = 0;
      let checkedCheckboxes = 0;

      const filteredData = tableData?.filter((item) => !item?.hide);

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
   }, [tableData]);

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
                        title="Подача заяв"
                        columns={[
                           { name: "category", label: "Документ" },
                           { name: "is_exist", label: "Наявно" },
                           { name: "apostile", label: "Апостиль" },
                           { name: "notary", label: "Завірено нотаріусом" },
                           {
                              name: "translation",
                              label: "Професійний переклад",
                           },
                           { name: "ready_copies", label: "Завірені копії" },
                           { name: "sent", label: "Відправлено" },
                        ]}
                        tableRef={firstRef}
                        data={tableData}
                        setTableData={setTableData}
                     />
                     <TableSecond
                        columns={[
                           { name: "name", label: "Документ" },
                           { name: "is_exist", label: "Наявно" },
                           { name: "links", label: "Посилання на документ" },
                           { name: "sent", label: "Відправлено" },
                        ]}
                        tableRef={secondRef}
                        tableData={tableDataSecond}
                        setTableData={setTableDataSecond}
                        data={documentSecond}
                        noTitleAndColumns
                     />
                     <Table
                        title="Опціональні документи"
                        columns={[
                           { name: "category", label: "Документ" },
                           { name: "is_exist", label: "Наявно" },
                           { name: "apostile", label: "Апостиль" },
                           { name: "notary", label: "Завірено нотаріусом" },
                           {
                              name: "translation",
                              label: "Професійний переклад",
                           },
                           { name: "ready_copies", label: "Завірені копії" },
                           { name: "sent", label: "Відправлено" },
                        ]}
                        tableRef={thirdRef}
                        data={documentsOptional}
                        setTableData={setTableData}
                     />
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
