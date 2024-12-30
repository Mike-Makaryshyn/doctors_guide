import React, { useState, useEffect } from "react";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Шлях до файлу firebase.js
import styles from "./FeedbackSection.module.scss"; // Імпортуємо стилі

const FeedbackSection = React.forwardRef((props, ref) => {
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const fetchFeedback = async () => {
    const docRef = doc(db, "sections", "feedback");
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setFeedback(snapshot.data().feedback || "");
    }
  };

  const saveData = async () => {
    const docRef = doc(db, "sections", "feedback");
    if (feedback.trim()) {
      await setDoc(docRef, { feedback });
    } else {
      await deleteDoc(docRef);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  React.useImperativeHandle(ref, () => ({ saveData }));

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Відгук</h2>
      <textarea
        value={feedback}
        onChange={handleChange}
        placeholder="Напишіть відгук"
        className={styles.feedbackArea}
      />
    </div>
  );
});

export default FeedbackSection;