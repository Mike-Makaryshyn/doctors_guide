import React, { createContext, useState, useEffect, useContext } from "react";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "./AuthContext"; // Припустимо, що user зберігається тут

const GlobalStageContext = createContext();

export const GlobalStageProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [activeStage, setActiveStage] = useState(null);
  const [tasks, setTasks] = useState([]);

  // Наприклад, підписуємося на активний етап із Firestore (якщо він зберігається там)
  useEffect(() => {
    if (!user) return;
    const docRef = doc(db, "users", user.uid);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.activeStage) {
          setActiveStage(data.activeStage);
        }
      }
    });
    return () => unsubscribe();
  }, [user]);

  // Якщо завдання теж потрібно зберігати глобально, можна зробити подібну підписку
  // або створити функцію для їх завантаження за activeStage.

  return (
    <GlobalStageContext.Provider value={{ activeStage, setActiveStage, tasks, setTasks }}>
      {children}
    </GlobalStageContext.Provider>
  );
};

export const useGlobalStage = () => useContext(GlobalStageContext);