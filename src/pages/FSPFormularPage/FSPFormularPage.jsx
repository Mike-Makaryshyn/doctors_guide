// src/pages/FSPFormularPage/FSPFormularPage.jsx

import React, { useState, useRef, useContext, useEffect } from "react";
import "./FSPFormularPage.scss";
import FSPFormularPageData from "../../constants/translation/FSPFormularPage";
import PersonalData from "./components/PersonalData";
import AktuelleAnamnese from "./components/AktuelleAnamnese";
import VegetativeAnamnese from "./components/VegetativeAnamnese";
import Vorerkrankungen from "./components/Vorerkrankungen";
import Zusammenfassung from "./components/Zusammenfassung";
import PreviousOperations from "./components/PreviousOperations";
import Medications from "./components/Medications";
import AllergiesAndIntolerances from "./components/AllergiesAndIntolerances";
import Noxen from "./components/Noxen";
import Familienanamnese from "./components/Familienanamnese";
import Sozialanamnese from "./components/Sozialanamnese";
import SelectDataSourceModal from "./components/SelectDataSourceModal";
import AdditionalInfoModal from "./components/AdditionalInfoModal";
import UserCasesModal from "./components/UserCasesModal";

import { parseData } from "../../utils/dataParser";
import useIsMobile from "../../hooks/useIsMobile";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { DataSourceContext } from "../../contexts/DataSourceContext";

import { FaCog } from 'react-icons/fa'; // Імпорт іконок
import { FaInfoCircle, FaCheckCircle } from "react-icons/fa"; // Стандартна та специфічна іконка

// Імпорт хука useGetGlobalInfo
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

// Імпорт специфічних даних
import FallSpecificData from "../../constants/translation/FallSpecificData";

const FSPFormularPage = () => {
    const { 
        user, 
        selectedLanguage, 
        languages, 
        currentPage, 
        selectedRegion: globalSelectedRegion,
        redirectToRegionPage, 
        handleChangePage 
    } = useGetGlobalInfo(); // handleChangeRegion видалено з деструктуризації

    const { dataSources, firebaseData, fetchDataFromFirebase } = useContext(DataSourceContext);
    const [parseModal, setParseModal] = useState(false);
    const [infoModal, setInfoModal] = useState(false);
    const [userCasesModal, setUserCasesModal] = useState(false);
    const [parsedData, setParsedData] = useState({});
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState({
        text: "",
        type: "",
    });
    const [selectedCase, setSelectedCase] = useState("");
    const [userCasesData, setUserCasesData] = useState([]);

    // Стан для збереження типу Fall
    const [fallType, setFallType] = useState(""); // Наприклад, 'cardiology' або 'thrombosis'
    const renderTileIcon = (parsedData, type) => {
        const hasSpecificData =
            parsedData?.fallType &&
            FallSpecificData[parsedData.fallType]?.[type]?.additionalInfo;
    
        if (hasSpecificData) {
            return (
                <FaCheckCircle
                    className="tile-icon specific-data"
                    title="Специфічні дані доступні"
                />
            );
        }
    
        return (
            <FaInfoCircle
                className="tile-icon general-data"
                title="Загальні дані"
                
            />
        );
    };
    // Використання глобального вибору регіону, або локального стану
    const [currentRegion, setCurrentRegion] = useState(globalSelectedRegion || "");
    const columnsRef = useRef(null);
    const isMobile = useIsMobile();
    let startX = 0;
    let scrollLeft = 0;

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Новий стан для модального вікна налаштувань

    const handleTouchStart = (e) => {
        if (!isMobile) return;
        startX = e.touches[0].pageX;
        scrollLeft = columnsRef.current.scrollLeft;
    };

    const handleTouchMove = (e) => {
        if (!isMobile) return;
        const moveX = e.touches[0].pageX - startX;
        columnsRef.current.scrollLeft = scrollLeft - moveX;
    };

    const handleParseData = async (sourceId, fileId) => {
        console.log("handleParseData called with:", sourceId, fileId);
        setIsLoading(true);
        setError(null);
    
        try {
            const source = dataSources[sourceId];
            if (!source) {
                throw new Error(`Source with id ${sourceId} not found.`);
            }
    
            const data = await parseData(sourceId, "local"); // Завантаження даних
            console.log("Fetched Data:", data);
    
            const selectedItem = data.find(item => item.id === parseInt(fileId, 10)) || {};
            console.log("Вибраний випадок:", selectedItem);
    
            if (selectedItem.specialty) {
                setFallType(selectedItem.specialty.toLowerCase()); // Встановлення спеціалізації
                console.log("Тип Fall (specialty):", selectedItem.specialty.toLowerCase());
            }
    
            setParsedData(selectedItem); // Збереження даних у стані
            console.log("Parsed Data Set:", selectedItem);
        } catch (err) {
            console.error("Помилка під час парсингу даних:", err);
            setError("Сталася помилка під час завантаження даних.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleOpenInfoModal = (type) => {
        let infoText = "";

        if (fallType && FallSpecificData[fallType] && FallSpecificData[fallType][type]) {
            infoText = FallSpecificData[fallType][type].additionalInfo || "Немає додаткової інформації.";
        } else {
            // Використовуємо загальну інформацію
            if (type === "personalData") {
                infoText = FSPFormularPageData.personalData.additionalInfo || "Немає додаткової інформації.";
            } else if (type === "currentAnamnese") {
                infoText = FSPFormularPageData.currentAnamnese.additionalInfo || "Немає додаткової інформації.";
            } else if (type === "vegetativeAnamnese") {
                infoText = FSPFormularPageData.vegetativeAnamnese.additionalInfo || "Немає додаткової інформації.";
            } else if (type === "zusammenfassung") {
                infoText = FSPFormularPageData.zusammenfassung.additionalInfo || "Немає додаткової інформації.";
            } else if (type === "vorerkrankungen") {
                infoText = FSPFormularPageData.vorerkrankungen.additionalInfo || "Немає додаткової інформації.";
            } else if (type === "previousOperations") {
                infoText = FSPFormularPageData.previousOperations.additionalInfo || "Немає додаткової інформації.";
            } else if (type === "medications") {
                infoText = FSPFormularPageData.medications.additionalInfo || "Немає додаткової інформації.";
            } else if (type === "allergiesAndIntolerances") {
                infoText = FSPFormularPageData.allergiesAndIntolerances.additionalInfo || "Немає додаткової інформації.";
            } else if (type === "noxen") {
                infoText = FSPFormularPageData.noxen.additionalInfo || "Немає додаткової інформації.";
            } else if (type === "familienanamnese") {
                infoText = FSPFormularPageData.familienanamnese.additionalInfo || "Немає додаткової інформації.";
            } else if (type === "sozialanamnese") {
                infoText = FSPFormularPageData.sozialanamnese.additionalInfo || "Немає додаткової інформації.";
            } else {
                console.warn(`Unknown type: ${type}`);
            }
        }

        setAdditionalInfo({ text: infoText, type });
        setInfoModal(true);
        console.log(`Тип модального вікна: ${type}`);
        console.log(`Текст додаткової інформації: ${infoText}`);
    };

    // Видалено функцію handleRegionChangeLocal та handleChangeRegion

    const handleCaseChange = (e) => {
        setSelectedCase(e.target.value);
        setParsedData({}); // Скидання даних
    };

    const handleOpenUserCasesModal = async (sourceId, fileId) => {
        const source = dataSources[sourceId];
        if (source.type !== 'firebase') return;

        try {
            const data = await fetchDataFromFirebase(source.collection, fileId);
            setUserCasesData(data);
            setUserCasesModal(true);
        } catch (error) {
            console.error("Error fetching data from Firebase:", error);
            setError("Сталася помилка при завантаженні даних з Firebase.");
        }
    };

    // Автоматичне завантаження даних, коли всі вибори зроблені
    useEffect(() => {
        if (currentRegion && selectedCase) {
            handleParseData(currentRegion, selectedCase);
        }
    }, [currentRegion, selectedCase]);

    // Додано логування parsedData для дебагінгу
    useEffect(() => {
        console.log("Parsed Data Updated:", parsedData);
    }, [parsedData]);

    // Ефект для автоматичного розгортання меню при зміні табів
    useEffect(() => {
        if (currentPage) { // Налаштуйте умову відповідно до вашої логіки табів
            setIsSettingsOpen(true);
        } else {
            setIsSettingsOpen(false);
        }
    }, [currentPage]);

    // Додавання обробника кліку поза панеллю для закриття меню
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (settingsRef.current && !settingsRef.current.contains(event.target) && !settingsButtonRef.current.contains(event.target)) {
                setIsSettingsOpen(false);
            }
        };

        if (isSettingsOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSettingsOpen]);

    const settingsRef = useRef(null);
    const settingsButtonRef = useRef(null);

    return (
        <MainLayout>
            {/* Кнопка налаштувань */}
            <button
                className="settings-button"
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                ref={settingsButtonRef}
                aria-label="Відкрити налаштування"
                aria-expanded={isSettingsOpen}
                aria-controls="settings-modal"
            >
                <FaCog />
            </button>

            {/* Модальне вікно налаштувань */}
            {isSettingsOpen && (
                <div className="settings-modal" ref={settingsRef}>
                    <div className="settings-content">
                        <h3>Налаштування</h3>
                        {/* Вибір області */}
                        <div className="field">
                            <label htmlFor="region-select">Оберіть Регіон:</label>
                            <select
                                id="region-select"
                                value={currentRegion}
                                onChange={(e) => {
                                    const newRegion = e.target.value;
                                    setCurrentRegion(newRegion);
                                    setSelectedCase(""); // Скидання вибору випадку при зміні регіону
                                    setParsedData({}); // Скидання даних
                                    setFallType(""); // Скидання типу Fall при зміні регіону
                                }}
                            >
                                <option value="">-- Оберіть Регіон --</option>
                                {Object.keys(dataSources).map((sourceId) => (
                                    dataSources[sourceId].type === "local" && (
                                        <option key={sourceId} value={sourceId}>
                                            {dataSources[sourceId].name}
                                        </option>
                                    )
                                ))}
                            </select>
                        </div>

                        {/* Вибір випадків до регіону */}
                        {currentRegion && (
                            <div className="field">
                                <label htmlFor="case-select">Виберіть випадок:</label>
                                <select id="case-select" value={selectedCase} onChange={handleCaseChange}>
                                    <option value="">Виберіть випадок</option>
                                    {dataSources[currentRegion].files.map(file => (
                                        <option key={file.id} value={file.id}>
                                            {file.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                        {/* Кнопка закриття модального вікна */}
                        <button className="close-button" onClick={() => setIsSettingsOpen(false)}>
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* Основний Контент */}
            <div className="fsp-container">
                {/* Відображення статусів завантаження та помилок */}
                {isLoading && <p>Завантаження даних...</p>}
                {error && <p className="error">{error}</p>}

                {/* Список колонок з даними */}
                <div
                    className={`columns ${isMobile ? "mobile" : ""}`}
                    ref={columnsRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div className="column">
                        <div
                            className="tile"
                            onMouseEnter={() => setTooltipVisible(true)}
                            onMouseLeave={() => setTooltipVisible(false)}
                            onClick={() => handleOpenInfoModal("personalData")}
                        >
                            <h3 className="tile-title">Персональні дані</h3>
                            {tooltipVisible && (
                                <div className="tooltip">
                                    {FSPFormularPageData.modal.tooltip}
                                </div>
                            )}
                            <PersonalData parsedData={parsedData} />
                        </div>
                        <div
                            className="tile"
                            onClick={() => handleOpenInfoModal("currentAnamnese")}
                        >
                            <h3 className="tile-title">Актуальний анамнез</h3>
                            <AktuelleAnamnese parsedData={parsedData} />
                        </div>
                    </div>
                    <div className="column" key="column-2">
                        <div
                            className="tile"
                            onClick={() => handleOpenInfoModal("vegetativeAnamnese")}
                        >
                            <h3 className="tile-title">Вегетативний анамнез</h3>
                            <VegetativeAnamnese parsedData={parsedData} />
                        </div>
                        <div
                            className="tile"
                            onClick={() => handleOpenInfoModal("vorerkrankungen")}
                        >
                            <h3 className="tile-title">Попередні захворювання</h3>
                            <Vorerkrankungen parsedData={parsedData} />
                        </div>
                        <div
                            className="tile"
                            onClick={() => handleOpenInfoModal("zusammenfassung")}
                        >
                            <h3 className="tile-title">Zusammenfassung</h3>
                            <Zusammenfassung parsedData={parsedData} />
                        </div>
                    </div>
                    <div className="column" key="column-3">
                        <div
                            className="tile"
                            onClick={() => handleOpenInfoModal("previousOperations")}
                        >
                            <h3 className="tile-title">Попередні операції</h3>
                            <PreviousOperations parsedData={parsedData} />
                        </div>
                        <div
                            className="tile"
                            onClick={() => handleOpenInfoModal("medications")}
                        >
                            <h3 className="tile-title">Медикаменти</h3>
                            <Medications parsedData={parsedData} />
                        </div>
                        <div
                            className="tile"
                            onClick={() => handleOpenInfoModal("allergiesAndIntolerances")}
                        >
                            <h3 className="tile-title">Алергії та непереносимості</h3>
                            <AllergiesAndIntolerances parsedData={parsedData} />
                        </div>
                    </div>
                    <div className="column" key="column-4">
                        <div
                            className="tile"
                            onClick={() => handleOpenInfoModal("noxen")}
                        >
                            <h3 className="tile-title">Noxen</h3>
                            <Noxen parsedData={parsedData} />
                        </div>
                        <div
                            className="tile"
                            onClick={() => handleOpenInfoModal("familienanamnese")}
                        >
                            <h3 className="tile-title">Relevante Familienerkrankungen</h3>
                            <Familienanamnese parsedData={parsedData} />
                        </div>
                        <div
                            className="tile"
                            onClick={() => handleOpenInfoModal("sozialanamnese")}
                        >
                            <h3 className="tile-title">Sozialanamnese</h3>
                            <Sozialanamnese parsedData={parsedData} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальне вікно вибору джерела даних */}
            <SelectDataSourceModal
                isOpen={parseModal}
                onClose={() => setParseModal(false)}
                filteredSources={Object.values(dataSources).filter(source => source.region === currentRegion)}
                handleParseData={handleParseData}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            {/* Модальне вікно додаткової інформації */}
            <AdditionalInfoModal
                isOpen={infoModal}
                onClose={() => setInfoModal(false)}
                additionalInfo={additionalInfo.text}
                title={additionalInfo.type ? FSPFormularPageData.modal.additionalInfo.title : ""}
            />

            {/* Модальне вікно випадків користувачів */}
            <UserCasesModal
                isOpen={userCasesModal}
                onClose={() => setUserCasesModal(false)}
                title="Випадки користувачів"
                userCases={userCasesData}
            />
        </MainLayout>
    );

};

export default FSPFormularPage;