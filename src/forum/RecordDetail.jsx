// src/forum/RecordDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import styles from "./RecordDetail.module.scss";

const RecordDetail = () => {
  const { recordId } = useParams();

  // У реальному випадку ти б завантажував запис із бази
  // Тут – фейкові дані для прикладу
  const [record, setRecord] = useState({
    id: recordId,
    title: "Демо заголовок",
    content: "Демо текст запису...",
    createdAt: new Date().toISOString(),
    comments: [],
  });

  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: Date.now().toString(),
        text: comment,
        createdAt: new Date().toISOString(),
      };
      setRecord({
        ...record,
        comments: [...record.comments, newComment],
      });
      setComment("");
    }
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>{record.title}</h1>
        <p className={styles.createdAt}>
          Створено: {new Date(record.createdAt).toLocaleString()}
        </p>
        <p>{record.content}</p>

        <div className={styles.commentsSection}>
          <h2>Коментарі</h2>
          {record.comments.length === 0 ? (
            <p>Коментарів поки що немає.</p>
          ) : (
            <ul className={styles.commentsList}>
              {record.comments.map((c) => (
                <li key={c.id} className={styles.commentItem}>
                  <p>{c.text}</p>
                  <small>{new Date(c.createdAt).toLocaleString()}</small>
                </li>
              ))}
            </ul>
          )}

          <div className={styles.addComment}>
            <textarea
              placeholder="Залиште коментар..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button onClick={handleAddComment}>Додати</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RecordDetail;