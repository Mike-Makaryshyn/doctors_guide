import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { supabase } from "../supabaseClient";
import { useAuth } from "../hooks/useAuth";

const AbbreviationsStatusContext = createContext();

export const AbbreviationsStatusProvider = ({ children }) => {
  const { user } = useAuth();
  const [abbreviationStatuses, setAbbreviationStatuses] = useState({});
  const unsavedChanges = useRef({});
  const flushTimeoutRef = useRef(null);

  // Загрузка данных из Supabase и LocalStorage
  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        setAbbreviationStatuses({});
        return;
      }
      const { data, error } = await supabase
        .from("abbreviation_statuses")
        .select("abbr_id, status, correct_count, updated_at")
        .eq("user_id", user.id);
      if (error) {
        console.error("Ошибка загрузки abbreviation statuses:", error);
        return;
      }
      const loaded = {};
      data.forEach(row => {
        loaded[row.abbr_id] = {
          status: row.status,
          correctCount: row.correct_count,
          updatedAt: new Date(row.updated_at).getTime(),
        };
      });
      setAbbreviationStatuses(loaded);
      localStorage.setItem("abbreviationStatuses", JSON.stringify(loaded));
      unsavedChanges.current = {};
    };
    fetchData();
  }, [user]);

  useEffect(() => {
    localStorage.setItem("abbreviationStatuses", JSON.stringify(abbreviationStatuses));
  }, [abbreviationStatuses]);

  const saveChangesToSupabase = async () => {
    if (!user) {
      setAbbreviationStatuses(prev => {
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
    const entries = Object.entries(unsavedChanges.current);
    if (entries.length === 0) {
      console.log("Нет изменений для сохранения.");
      return;
    }
    const upserts = entries.map(([abbrId, data]) => ({
      user_id: user.id,
      abbr_id: abbrId,
      status: data.status,
      correct_count: data.correctCount,
      updated_at: new Date(data.updatedAt).toISOString(),
    }));
    const { error } = await supabase
      .from("abbreviation_statuses")
      .upsert(upserts, { onConflict: ["user_id", "abbr_id"] });
    if (error) {
      console.error("Ошибка сохранения в Supabase:", error);
      return;
    }
    unsavedChanges.current = {};
    console.log("Abbreviation statuses успешно сохранены в Supabase.");
  };

  const flushChanges = () => {
    console.log("flushChanges() вызвано, сохраняем сейчас.");
    saveChangesToSupabase();
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
    setAbbreviationStatuses(prev => {
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
      correctCount: current.correctCount || 0,
    };
  };

  const toggleStatus = (abbrId, newStatus) => {
    const currentStatus = abbreviationStatuses[abbrId]?.status || "unlearned";
    const updatedStatus = currentStatus === newStatus ? "unlearned" : newStatus;
    console.log(`Переключаем статус ${abbrId}: ${currentStatus} -> ${updatedStatus}`);
    setStatus(abbrId, updatedStatus);
  };

  const recordCorrectAnswer = (abbrId, increment = 1) => {
    const now = Date.now();
    setAbbreviationStatuses(prev => {
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