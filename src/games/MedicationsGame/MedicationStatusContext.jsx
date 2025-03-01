// doctors_guide/src/contexts/MedicationStatusContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";

const MedicationStatusContext = createContext();

export function useMedicationStatus() {
  return useContext(MedicationStatusContext);
}

export function MedicationStatusProvider({ children }) {
  const [user, setUser] = useState(null);
  const [medicationStatuses, setMedicationStatuses] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const ref = collection(db, "users", user.uid, "medicationStatuses");
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      const data = {};
      snapshot.forEach((docItem) => {
        data[docItem.id] = docItem.data();
      });
      setMedicationStatuses(data);
    });
    return () => unsubscribe();
  }, [user]);

  const toggleStatus = async (medId, newStatus) => {
    if (!user) return;
    try {
      await setDoc(doc(db, "users", user.uid, "medicationStatuses", medId.toString()), {
        status: newStatus,
      });
    } catch (error) {
      console.error("Error updating medication status:", error);
    }
  };

  const value = {
    medicationStatuses,
    toggleStatus,
  };

  return (
    <MedicationStatusContext.Provider value={value}>
      {children}
    </MedicationStatusContext.Provider>
  );
}