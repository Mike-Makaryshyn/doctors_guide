import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { auth, db } from "../firebase"; // скоригуйте шлях, якщо потрібно
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const AbbreviationsStatusContext = createContext();

export const AbbreviationsStatusProvider = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [abbreviationStatuses, setAbbreviationStatuses] = useState({});
  const unsavedChanges = useRef({});
  const flushTimeoutRef = useRef(null);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      setAbbreviationStatuses({});
      return;
    }
    const fetchData = async () => {
      try {
        const docRef = doc(db, "users", user.uid, "abbreviationStatuses", "allAbbreviations");
        const docSnap = await getDoc(docRef);
        let firebaseData = {};
        if (docSnap.exists()) {
          firebaseData = docSnap.data()?.statuses || {};
        }
        console.log("Data from Firestore (abbreviationStatuses):", firebaseData);
        const localData = localStorage.getItem("abbreviationStatuses");
        const localStatuses = localData ? JSON.parse(localData) : {};
        const merged = Object.keys(localStatuses).length > 0 ? localStatuses : firebaseData;
        setAbbreviationStatuses(merged);
        localStorage.setItem("abbreviationStatuses", JSON.stringify(merged));
        unsavedChanges.current = {};
      } catch (error) {
        console.error("Error fetching abbreviation data:", error);
      }
    };
    fetchData();
  }, [user, loading]);

  useEffect(() => {
    localStorage.setItem("abbreviationStatuses", JSON.stringify(abbreviationStatuses));
  }, [abbreviationStatuses]);

  const saveChangesToFirebase = async () => {
    if (!user) {
      console.log("No user (abbreviations) – saving locally only.");
      setAbbreviationStatuses((prev) => {
        const newStatuses = { ...prev };
        for (const [abbrId, data] of Object.entries(unsavedChanges.current)) {
          newStatuses[abbrId] = data;
        }
        localStorage.setItem("abbreviationStatuses", JSON.stringify(newStatuses));
        return newStatuses;
      });
      unsavedChanges.current = {};
      return;
    }
    const changes = { ...unsavedChanges.current };
    if (Object.keys(changes).length === 0) {
      console.log("No unsaved changes (abbreviations).");
      return;
    }
    unsavedChanges.current = {};
    try {
      console.log("Saving changes to Firestore (abbreviations):", changes);
      const newStatuses = { ...abbreviationStatuses };
      for (const [abbrId, data] of Object.entries(changes)) {
        newStatuses[abbrId] = data;
      }
      setAbbreviationStatuses(() => {
        localStorage.setItem("abbreviationStatuses", JSON.stringify(newStatuses));
        return newStatuses;
      });
      const docRef = doc(db, "users", user.uid, "abbreviationStatuses", "allAbbreviations");
      await setDoc(docRef, { statuses: newStatuses }, { merge: true });
      console.log("Changes saved to Firestore (abbreviations).");
    } catch (error) {
      console.error("Error saving to Firebase (abbreviations):", error);
      unsavedChanges.current = { ...changes, ...unsavedChanges.current };
    }
  };

  const flushChanges = () => {
    console.log("flushChanges() called (abbreviations), saving immediately.");
    saveChangesToFirebase();
  };

  const scheduleFlushChanges = () => {
    if (flushTimeoutRef.current) {
      clearTimeout(flushTimeoutRef.current);
    }
    flushTimeoutRef.current = setTimeout(() => {
      flushChanges();
      flushTimeoutRef.current = null;
    }, 3000);
  };

  const setStatus = (abbrId, status) => {
    const now = Date.now();
    setAbbreviationStatuses((prev) => {
      const prevData = prev[abbrId] || {};
      return {
        ...prev,
        [abbrId]: {
          ...prevData,
          status,
          updatedAt: now,
        },
      };
    });
    const current = abbreviationStatuses[abbrId] || {};
    unsavedChanges.current[abbrId] = {
      ...current,
      status,
      updatedAt: now,
    };
  };

  const toggleStatus = (abbrId, newStatus) => {
    const currentStatus = abbreviationStatuses[abbrId]?.status || "unlearned";
    const updatedStatus = currentStatus === newStatus ? "unlearned" : newStatus;
    console.log(`Toggling status for abbreviation ${abbrId}: ${currentStatus} -> ${updatedStatus}`);
    setStatus(abbrId, updatedStatus);
  };

  const recordCorrectAnswer = (abbrId, increment = 1) => {
    const now = Date.now();
    setAbbreviationStatuses((prev) => {
      const current = prev[abbrId] || { status: "unlearned", correctCount: 0 };
      const newCount = (current.correctCount || 0) + increment;
      const newStatus = newCount >= 5 ? "learned" : current.status;
      return {
        ...prev,
        [abbrId]: {
          status: newStatus,
          correctCount: newCount,
          updatedAt: now,
        },
      };
    });
    const oldData = abbreviationStatuses[abbrId] || { status: "unlearned", correctCount: 0 };
    const newCount = (oldData.correctCount || 0) + increment;
    const newStatus = newCount >= 5 ? "learned" : oldData.status;
    unsavedChanges.current[abbrId] = {
      status: newStatus,
      correctCount: newCount,
      updatedAt: now,
    };
    console.log(`Abbreviation ${abbrId} -> correctCount: ${newCount}, status: ${newStatus}`);
  };

  return (
    <AbbreviationsStatusContext.Provider
      value={{
        abbreviationStatuses,
        setStatus,
        toggleStatus,
        recordCorrectAnswer,
        flushChanges,
        scheduleFlushChanges,
      }}
    >
      {children}
    </AbbreviationsStatusContext.Provider>
  );
};

export const useAbbreviationsStatus = () => useContext(AbbreviationsStatusContext);