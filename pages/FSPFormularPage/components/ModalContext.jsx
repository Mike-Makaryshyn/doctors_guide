// src/contexts/ModalContext.jsx

import React, { createContext, useState, useContext } from "react";
import AdditionalInfoModal from "./AdditionalInfoModal";

// Створюємо контекст
const ModalContext = createContext();

// Провайдер контексту
export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalTitle, setModalTitle] = useState("");

    // Функція відкриття модального вікна
    const openModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setIsModalOpen(true);
    };

    // Функція закриття модального вікна
    const closeModal = () => setIsModalOpen(false);

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <AdditionalInfoModal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={modalTitle}
                additionalInfo={modalContent}
            />
        </ModalContext.Provider>
    );
};

// Кастомний хук для використання контексту
export const useModal = () => useContext(ModalContext);