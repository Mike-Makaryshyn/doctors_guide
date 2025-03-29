import React, { useState, useEffect, useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { headacheMindMap } from "./topics/headache"; // приклад імпорту даних
import { FaCog } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Xarrow from "react-xarrows";
import styles from "./MindMapPage.module.scss";

// Масив тем для майнд мепа
const topics = [
  {
    id: "headache",
    label: "Болі голови",
    data: headacheMindMap
  }
  // Додайте інші теми за потребою
];

/**
 * Рекурсивно збирає зв’язки між вузлами.
 */
function collectEdges(node) {
  let edges = [];
  if (node.children && node.children.length > 0) {
    node.children.forEach((child) => {
      edges.push({ parentId: node.id, childId: child.id });
      edges = edges.concat(collectEdges(child));
    });
  }
  return edges;
}

/**
 * Рекурсивний компонент для відображення вузлів.
 */
function MindMapNode({ node, onNodeClick, selectedNodes }) {
  const isSelected = selectedNodes.includes(node.id);

  return (
    <div className={styles.nodeContainer}>
      <div
        id={`node-${node.id}`}
        className={styles.node}
        style={{ backgroundColor: isSelected ? "green" : "transparent" }}
        onClick={(e) => {
          e.stopPropagation();
          onNodeClick(node.id);
        }}
      >
        {node.label}
      </div>
      {node.children && node.children.length > 0 && (
        <div className={styles.childrenContainer}>
          {node.children.map((child) => (
            <MindMapNode
              key={child.id}
              node={child}
              onNodeClick={onNodeClick}
              selectedNodes={selectedNodes}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MindMapPage() {
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [selectedTopicId, setSelectedTopicId] = useState("headache");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleNodeClick = (nodeId) => {
    setSelectedNodes((prevSelected) =>
      prevSelected.includes(nodeId)
        ? prevSelected.filter((id) => id !== nodeId)
        : [...prevSelected, nodeId]
    );
  };

  const selectedTopic = topics.find((topic) => topic.id === selectedTopicId);

  // Закриття модального вікна при кліку поза ним
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
    setSelectedNodes([]); // скидання вибору при зміні теми
  };

  // Збираємо зв’язки (edges) з дерева даних
  const edges = collectEdges(selectedTopic.data);

  return (
    <MainLayout>
      {/* Блочний контейнер, який займає весь екран */}
      <div className={styles.fullScreenContainer}>
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={3}
          wheel={{ step: 0.1 }}
          onZoom={() => {
            Xarrow.updateAll(); // оновлення ліній при зумі
          }}
        >
          <TransformComponent>
            <div className={styles.mapContent}>
              <MindMapNode
                node={selectedTopic.data}
                onNodeClick={handleNodeClick}
                selectedNodes={selectedNodes}
              />
              {edges.map((edge, idx) => (
                <Xarrow
                  key={idx}
                  start={`node-${edge.parentId}`}
                  end={`node-${edge.childId}`}
                  strokeWidth={2}
                  color="black"
                />
              ))}
            </div>
          </TransformComponent>
        </TransformWrapper>

        {/* Кнопка налаштувань (вибір теми) */}
        <div className={styles.bottomRightSettings}>
          <button
            className={styles.settingsButton}
            onClick={() => setIsModalOpen(true)}
          >
            <FaCog />
          </button>
        </div>

        {/* Модальне вікно */}
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
                <AiOutlineClose />
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
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}