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
import { doc, getDoc, setDoc } from "firebase/firestore"; // Firestore імпорти
import { db } from "../../firebase"; // Імпорт Firestore

const DocumentsPage = () => {
    const {
        selectedLanguage: language,
        handleChangePage,
        user,
    } = useGetGlobalInfo();

    const firstRef = useRef();
    const secondRef = useRef();
    const thirdRef = useRef();
    const combinedRef = useRef();

    const [tableData, setTableData] = useState(documents);
    const [tableDataSecond, setTableDataSecond] = useState(documentSecond);
    const [optionalTableData, setOptionalTableData] = useState(documentsOptional);
    const [progress, setProgress] = useState(0);

    // Локальна змінна для зберігання останніх збережених даних
    let lastSavedData = {};

    const handlePrint = useReactToPrint({
        content: () => combinedRef.current,
    });

    // Завантаження даних із Firestore
    const fetchDataFromFirestore = async () => {
        if (!user) {
            console.log("Користувач не авторизований");
            return;
        }

        const userDocRef = doc(db, "users", user.uid, "data", "documents");
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
            console.log("Документ знайдено в Firestore:", docSnap.data());
            const data = docSnap.data();
            setTableData(data.table1 || documents);
            setTableDataSecond(data.table2 || documentSecond);
            setOptionalTableData(data.table3 || documentsOptional);
            setProgress(data.progress || 0); // Завантаження прогресу
        } else {
            console.log("Документ не знайдено. Створюємо новий документ...");
            await setDoc(userDocRef, {
                table1: documents,
                table2: documentSecond,
                table3: documentsOptional,
                progress: 0,
            });
            console.log("Новий документ створено в Firestore");
        }
    };

    useEffect(() => {
        fetchDataFromFirestore();
    }, [user]);

    // Збереження даних у Firestore
    const updateFirestoreData = async (updatedData) => {
        if (!user) return;

        // Перевіряємо, чи змінилися дані
        if (JSON.stringify(lastSavedData) === JSON.stringify(updatedData)) {
            console.log("Дані не змінилися, запис у Firestore пропущено");
            return;
        }

        const userDocRef = doc(db, "users", user.uid, "data", "documents");
        try {
            await setDoc(userDocRef, updatedData, { merge: true });
            lastSavedData = updatedData; // Оновлюємо останні збережені дані
            console.log("Дані успішно оновлені у Firestore:", updatedData);
        } catch (error) {
            console.error("Помилка при оновленні Firestore:", error);
        }
    };

    // Обчислення прогресу
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
                    totalCheckboxes++;
                    if (item[key] === "check") {
                        checkedCheckboxes++;
                    }
                }
            });
        });

        let progress = 0;
        if (totalCheckboxes > 0) {
            progress = (checkedCheckboxes / totalCheckboxes) * 100;
        }
        console.log("Розрахований прогрес:", progress);
        return progress.toFixed(0);
    };

    // Оновлення прогресу при зміні даних
    useEffect(() => {
        setProgress(calculateProgress());
    }, [tableData, tableDataSecond, optionalTableData]);

    // Автоматичне оновлення Firestore при зміні даних
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