// src/pages/MindMapPage/MindMapPage.jsx
import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import D3MindMap from "./D3MindMap";
import { headacheMindMap } from "./topics/headache";
import { strokeMindMap } from "./topics/stroke"; // нова тема
import { FaCog } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./MindMapPage.module.scss";

const topics = [
  { id: "headache", label: "Болі голови", data: headacheMindMap },
  { id: "stroke", label: "Schlaganfall", data: strokeMindMap },
];

export default function MindMapPage() {
  const [selectedTopicId, setSelectedTopicId] = useState("headache");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomValue, setZoomValue] = useState(1.0);
  const modalRef = useRef(null);

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
      <div className={styles.fullScreenContainer}>
        <D3MindMap data={selectedTopic.data} externalZoom={zoomValue} />
        <div className={styles.bottomRightSettings}>
          <button className={styles.settingsButton} onClick={() => setIsModalOpen(true)}>
            <FaCog />
          </button>
        </div>
        {window.innerWidth < 768 && (
          <div className={styles.zoomSliderContainer}>
            <input
              type="range"
              min="0.2"
              max="5"
              step="0.1"
              value={zoomValue}
              onChange={(e) => setZoomValue(+e.target.value)}
              className={styles.zoomSlider}
            />
          </div>
        )}
        {isModalOpen && (
          <div
            className={
              window.innerWidth > 768
                ? styles.popupContainerDesktop
                : styles.popupContainerMobile
            }
          >
            <div className={styles.popup} ref={modalRef}>
              <button className={styles.modalCloseButton} onClick={() => setIsModalOpen(false)}>
                <AiOutlineClose />
              </button>
              <h2 className={styles.modalTitle}>Thema</h2>
              <select value={selectedTopicId} onChange={handleTopicChange} className={styles.modalSelect}>
                {topics.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}