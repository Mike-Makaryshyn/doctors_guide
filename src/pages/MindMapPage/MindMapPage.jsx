import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import D3MindMap from "./D3MindMap";
import { headacheMindMap, headacheListData } from "./topics/headache";
import { strokeMindMap, strokeListData } from "./topics/stroke"; 
import { subarachnoidMindMap, subarachnoidListData } from "./topics/subarachnoid";
import { migraeneMindMap, migraeneListData } from "./topics/migrean";
import { sampleMindMap, sampleListData } from "./topics/sampler";
import { FaCog, FaList, FaSitemap } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./MindMapPage.module.scss";

export default function MindMapPage() {
  const [selectedTopicId, setSelectedTopicId] = useState("headache");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomValue, setZoomValue] = useState(1.0);
  const [viewMode, setViewMode] = useState("list");
  const modalRef = useRef(null);

  // Підбираємо дані залежно від вибраного режиму (list або mindmap)
  const topics = [
    {
      id: "headache",
      label: "Kopfschmerz",
      data: viewMode === "list" ? headacheListData : headacheMindMap
    },
    {
      id: "stroke",
      label: "Schlaganfall",
      data: viewMode === "list" ? strokeListData : strokeMindMap
    },
    {
      id: "subarachnoid",
      label: "Subarachnoidalblutung",
      data: viewMode === "list" ? subarachnoidListData : subarachnoidMindMap
    },
    {
      id: "migraen",
      label: "Migräne",
      data: viewMode === "list" ? migraeneListData : migraeneMindMap
    },
    {
      id: "sampler",
      label: "SAMPLE-Schema",
      data: viewMode === "list" ? sampleListData : sampleMindMap
    }
  ];

  // Закриваємо модалку при кліку поза її межами
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const handleTopicChange = (e) => {
    setSelectedTopicId(e.target.value);
  };

  const selectedTopic = topics.find((topic) => topic.id === selectedTopicId);

  return (
    <MainLayout>
      {/* Контейнер, що тягнеться на всю висоту та дозволяє прокрутку */}
      <div className={styles.fullScreenContainer}>
        {/* D3MindMap рендерить або майндмеп, або список (через MindMapListView) */}
        <D3MindMap
          key={viewMode}
          data={selectedTopic.data}
          externalZoom={zoomValue}
          externalViewMode={viewMode}
        />

        {/* Кнопка налаштувань в правому нижньому куті */}
        <div className={styles.bottomRightSettings}>
          <button
            className={styles.settingsButton}
            onClick={() => setIsModalOpen(true)}
          >
            <FaCog />
          </button>
        </div>

        {/* Модальне вікно налаштувань */}
        {isModalOpen && (
          <div
            className={
              window.innerWidth > 768
                ? styles.popupContainerDesktop
                : styles.popupContainerMobile
            }
          >
            <div className={styles.popup} ref={modalRef}>
              <button
                className={styles.modalCloseButton}
                onClick={() => setIsModalOpen(false)}
              >
                      ×
              </button>
              <h2 className={styles.modalTitle}>Thema</h2>
              <select
                value={selectedTopicId}
                onChange={handleTopicChange}
                className={styles.modalSelect}
              >
                {topics.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.label}
                  </option>
                ))}
              </select>

              <h2 className={styles.modalTitle}>Mindmap / List</h2>
              <div className={styles.iconSelectorContainer}>
                <div
                  className={`${styles.iconSelector} ${viewMode === "mindmap" ? styles.active : ""}`}
                  onClick={() => setViewMode("mindmap")}
                >
                  <FaSitemap size={24} />
                </div>
                <div
                  className={`${styles.iconSelector} ${viewMode === "list" ? styles.active : ""}`}
                  onClick={() => setViewMode("list")}
                >
                  <FaList size={24} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}