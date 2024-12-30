import Table from "../../components/Table/Table";
import TableMobile from "../../components/Table/TableMobile"; // Мобільна версія таблиці
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
import { doc, getDoc, setDoc } from "firebase/firestore"; // Firestore імпорти
import { db } from "../../firebase";
import useIsMobile from "../../hooks/useIsMobile"; // Хук для мобільних пристроїв

const DocumentsPage = () => {
    const { selectedLanguage: language, selectedRegion, handleChangePage, user } =
        useGetGlobalInfo();

    const firstRef = useRef();
    const secondRef = useRef();
    const thirdRef = useRef();
    const combinedRef = useRef();

    const [tableData, setTableData] = useState(documents);
    const [tableDataSecond, setTableDataSecond] = useState(documentSecond);
    const [optionalTableData, setOptionalTableData] = useState(documentsOptional);
    const [progress, setProgress] = useState(0);

    const isMobile = useIsMobile(); // Перевірка мобільного пристрою

    let lastSavedData = {};

    const handlePrint = useReactToPrint({
        content: () => combinedRef.current,
    });

    // Завантаження даних із Firestore
    const fetchDataFromFirestore = async () => {
        if (!user) return;

        const userDocRef = doc(db, "users", user.uid, "data", "documents");
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            setTableData(data.table1 || documents);
            setTableDataSecond(data.table2 || documentSecond);
            setOptionalTableData(data.table3 || documentsOptional);
            setProgress(data.progress || 0);
        } else {
            await setDoc(userDocRef, {
                table1: documents,
                table2: documentSecond,
                table3: documentsOptional,
                progress: 0,
            });
        }
    };

    useEffect(() => {
        fetchDataFromFirestore();
    }, [user]);

    // Збереження даних у Firestore
    const updateFirestoreData = async (updatedData) => {
        if (!user) return;

        if (JSON.stringify(lastSavedData) === JSON.stringify(updatedData)) return;

        const userDocRef = doc(db, "users", user.uid, "data", "documents");
        await setDoc(userDocRef, updatedData, { merge: true });
        lastSavedData = updatedData;
    };

    // Обчислення прогресу
    const calculateProgress = () => {
        let totalCheckboxes = 0;
        let checkedCheckboxes = 0;

        const filteredData = [...tableData, ...tableDataSecond, ...optionalTableData].filter(
            (item) => !item?.hide
        );

        filteredData.forEach((item) => {
            Object.keys(item).forEach((key) => {
                if (
                    ["is_exist", "apostile", "notary", "translation", "ready_copies", "sent"].includes(
                        key
                    )
                ) {
                    totalCheckboxes++;
                    if (item[key] === "check") {
                        checkedCheckboxes++;
                    }
                }
            });
        });

        return ((checkedCheckboxes / totalCheckboxes) * 100).toFixed(0);
    };

    useEffect(() => {
        setProgress(calculateProgress());
    }, [tableData, tableDataSecond, optionalTableData]);

    useEffect(() => {
        const updatedData = {
            table1: tableData,
            table2: tableDataSecond,
            table3: optionalTableData,
            progress: calculateProgress(),
        };
        updateFirestoreData(updatedData);
    }, [tableData, tableDataSecond, optionalTableData]);

    const getMessage = (progress) => {
        if (progress < 20) return messages[language].lessThan20;
        if (progress < 50) return messages[language].between20And50;
        if (progress < 80) return messages[language].between50And80;
        return messages[language].greaterThan80;
    };

    const mainTitle = titles?.main?.[language];
    const optionalTitle = titles?.optional?.[language];

    return (
        <MainLayout>
            <div className="page page1 containerBigger mt-20">
                <div className="main_menu__content">
                    <div className={styles.table_wrapper}>
                        {/* Прогрес-бар */}
                        <div className={styles.progress_wrapper}>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: `${progress}%` }}></div>
                            </div>
                            <div className={styles.progressLabel}>
                                {progress}% - {getMessage(progress)}
                            </div>
                        </div>
                        <div ref={combinedRef}>
                            {/* Основні документи */}
                            {isMobile ? (
                                <TableMobile
                                    data={tableData}
                                    columns={columnsFirst?.filter(item => item?.name !== 'category')}
                                    setTableData={setTableData}
                                    selectedLanguage={language}
                                    selectedRegion={selectedRegion} // Передача регіону
                                />
                            ) : (
                                <Table
                                    title={mainTitle}
                                    columns={columnsFirst}
                                    tableRef={firstRef}
                                    data={tableData}
                                    setTableData={setTableData}
                                    selectedLanguage={language}
                                />
                            )}

                            {/* Додаткові документи */}
                            {isMobile ? (
                                <TableMobile
                                    data={tableDataSecond}
                                    columns={[
                                        { name: "name" },
                                        { name: "is_exist" },
                                        { name: "links" },
                                        { name: "sent" },
                                    ]}
                                    setTableData={setTableDataSecond}
                                    selectedLanguage={language}
                                    selectedRegion={selectedRegion} // Передача регіону
                                />
                            ) : (
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
                            )}

                            {/* Опціональні документи */}
                            {isMobile ? (
                                <TableMobile
                                    data={optionalTableData}
                                    columns={columnsFirst?.filter(item => item?.name !== 'category')}
                                    setTableData={setOptionalTableData}
                                    selectedLanguage={language}
                                    selectedRegion={selectedRegion} // Передача регіону
                                />
                            ) : (
                                <Table
                                    title={optionalTitle}
                                    columns={columnsFirst}
                                    tableRef={thirdRef}
                                    data={optionalTableData}
                                    setTableData={setOptionalTableData}
                                    selectedLanguage={language}
                                />
                            )}
                        </div>
                    </div>

                    <button className={"main_menu_back"} onClick={() => handleChangePage("/main_menu")}>
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