// src/forum/UserRecordsPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import styles from "./UserRecordsPage.module.scss";

const UserRecordsPage = () => {
  const { category, land } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Локальний стан для зберігання записів
  const [records, setRecords] = useState([]);

  // Якщо з RecordForm прийшов новий запис, додаємо його до локального стану
  useEffect(() => {
    if (location.state?.newRecord) {
      setRecords((prev) => [...prev, location.state.newRecord]);
      // Очищаємо state, щоб при наступному переході не дублювати запис
      navigate(".", { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  // Натискаємо на «+» → переходимо на форму створення запису
  const handleAddRecord = () => {
    navigate("/forum/new-record", {
      state: { category, land },
    });
  };

  // При кліку на запис → переходимо на сторінку деталей
  const handleRecordClick = (recordId) => {
    navigate(`/forum/record/${recordId}`);
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>
          {category} — {land}
        </h1>
        {records.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Немає записів</p>
            <button className={styles.addButton} onClick={handleAddRecord}>
              +
            </button>
          </div>
        ) : (
          <ul className={styles.recordsList}>
            {records.map((record) => (
              <li
                key={record.id}
                className={styles.recordItem}
                onClick={() => handleRecordClick(record.id)}
              >
                <h3>{record.title}</h3>
                <p className={styles.date}>
                  {new Date(record.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
            <li>
              <button className={styles.addButton} onClick={handleAddRecord}>
                +
              </button>
            </li>
          </ul>
        )}
      </div>
    </MainLayout>
  );
};

export default UserRecordsPage;