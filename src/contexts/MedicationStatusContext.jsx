import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { supabase } from "../supabaseClient";
import { useAuth } from "../hooks/useAuth";

const MedicationStatusContext = createContext();

export const MedicationStatusProvider = ({ children }) => {
  const { user } = useAuth();
  const [medicationStatuses, setMedicationStatuses] = useState({});
  const unsavedChanges = useRef({});
  const flushTimeoutRef = useRef(null);

  /* ---------- Load data from Supabase (or reset if no user) ---------- */
  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        setMedicationStatuses({});
        return;
      }
      const { data, error } = await supabase
        .from("medication_statuses")
        .select("med_id, status, correct_count, updated_at")
        .eq("user_id", user.id);

      if (error) {
        console.error("Error loading medication statuses:", error);
        return;
      }

      const loaded = {};
      data.forEach(row => {
        loaded[row.med_id] = {
          status: row.status,
          correctCount: row.correct_count,
          updatedAt: new Date(row.updated_at).getTime(),
        };
      });

      setMedicationStatuses(loaded);
      localStorage.setItem("medicationStatuses", JSON.stringify(loaded));
      unsavedChanges.current = {};
    };

    fetchData();
  }, [user]);

  /* ---------- Keep localStorage in sync ---------- */
  useEffect(() => {
    localStorage.setItem("medicationStatuses", JSON.stringify(medicationStatuses));
  }, [medicationStatuses]);

  /* ---------- Persist pending changes ---------- */
  const saveChangesToSupabase = async () => {
    if (!user) {
      // No authenticated user – just persist locally
      setMedicationStatuses(prev => {
        const merged = { ...prev, ...unsavedChanges.current };
        localStorage.setItem("medicationStatuses", JSON.stringify(merged));
        return merged;
      });
      unsavedChanges.current = {};
      return;
    }

    const entries = Object.entries(unsavedChanges.current);
    if (entries.length === 0) {
      console.log("No medication changes to save.");
      return;
    }

    const upserts = entries.map(([medId, data]) => ({
      user_id: user.id,
      med_id: medId,
      status: data.status,
      correct_count: data.correctCount,
      updated_at: new Date(data.updatedAt).toISOString(),
    }));

    const { error } = await supabase
      .from("medication_statuses")
      .upsert(upserts, { onConflict: ["user_id", "med_id"] });

    if (error) {
      console.error("Error saving medication statuses to Supabase:", error);
      return;
    }

    unsavedChanges.current = {};
    console.log("Medication statuses saved to Supabase.");
  };

  const flushChanges = () => {
    console.log("flushChanges() called (medications). Saving now.");
    saveChangesToSupabase();
  };

  const scheduleFlushChanges = () => {
    if (flushTimeoutRef.current) clearTimeout(flushTimeoutRef.current);
    flushTimeoutRef.current = setTimeout(() => {
      flushChanges();
      flushTimeoutRef.current = null;
    }, 3000);
  };

  /* ---------- Status helpers ---------- */
  const setStatus = (medId, status) => {
    const now = Date.now();

    setMedicationStatuses(prev => {
      const prevData = prev[medId] || {};
      return {
        ...prev,
        [medId]: { ...prevData, status, updatedAt: now },
      };
    });

    const current = medicationStatuses[medId] || {};
    unsavedChanges.current[medId] = {
      ...current,
      status,
      updatedAt: now,
      correctCount: current.correctCount || 0,
    };

    scheduleFlushChanges();
  };

  const toggleStatus = (medId, newStatus) => {
    const currentStatus = medicationStatuses[medId]?.status || "unlearned";
    const updatedStatus = currentStatus === newStatus ? "unlearned" : newStatus;
    console.log(`Toggle medication ${medId}: ${currentStatus} → ${updatedStatus}`);
    setStatus(medId, updatedStatus);
  };

  const recordCorrectAnswer = (medId, increment = 1) => {
    const now = Date.now();

    setMedicationStatuses(prev => {
      const current = prev[medId] || { status: "unlearned", correctCount: 0 };
      const newCount = (current.correctCount || 0) + increment;
      const newStatus = newCount >= 5 ? "learned" : current.status;
      return {
        ...prev,
        [medId]: { status: newStatus, correctCount: newCount, updatedAt: now },
      };
    });

    const oldData = medicationStatuses[medId] || { status: "unlearned", correctCount: 0 };
    const newCount = (oldData.correctCount || 0) + increment;
    const newStatus = newCount >= 5 ? "learned" : oldData.status;

    unsavedChanges.current[medId] = {
      status: newStatus,
      correctCount: newCount,
      updatedAt: now,
    };

    console.log(`Medication ${medId} → correctCount: ${newCount}, status: ${newStatus}`);
    scheduleFlushChanges();
  };

  /* ---------- Context value ---------- */
  return (
    <MedicationStatusContext.Provider
      value={{
        medicationStatuses,
        setStatus,
        toggleStatus,
        recordCorrectAnswer,
        flushChanges,
        scheduleFlushChanges,
      }}
    >
      {children}
    </MedicationStatusContext.Provider>
  );
};

export const useMedicationStatus = () => useContext(MedicationStatusContext);