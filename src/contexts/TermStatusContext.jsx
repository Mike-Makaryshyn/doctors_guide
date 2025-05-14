import { useState, useEffect, useRef, createContext, useContext } from "react";
import { supabase } from "../supabaseClient";
import { useAuth } from "../hooks/useAuth"; // or your existing hook that provides current user

const TermStatusContext = createContext();

export const TermStatusProvider = ({ children }) => {
  const { user } = useAuth();
  const [termStatuses, setTermStatuses] = useState({});
  const unsavedChanges = useRef({});

  // Реф для debounce-таймера
  const flushTimeoutRef = useRef(null);

  // Завантаження даних з Supabase та LocalStorage
  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        setTermStatuses({});
        return;
      }
      const { data, error } = await supabase
        .from("term_statuses")
        .select("term_id, status, correct_count, updated_at")
        .eq("user_id", user.id);
      if (error) {
        console.error("Error fetching term statuses:", error);
        return;
      }
      const loaded = {};
      data.forEach(row => {
        loaded[row.term_id] = {
          status: row.status,
          correctCount: row.correct_count,
          updatedAt: new Date(row.updated_at).getTime(),
        };
      });
      setTermStatuses(loaded);
      localStorage.setItem("termStatuses", JSON.stringify(loaded));
      unsavedChanges.current = {};
    };
    fetchData();
  }, [user]);

  useEffect(() => {
    localStorage.setItem("termStatuses", JSON.stringify(termStatuses));
  }, [termStatuses]);

  // Оновлена функція збереження змін – тепер ми НЕ видаляємо записи для "unlearned"
  const saveChangesToSupabase = async () => {
    if (!user) {
      // only localStorage
      setTermStatuses(prev => {
        const newStatuses = { ...prev };
        for (const [termId, data] of Object.entries(unsavedChanges.current)) {
          newStatuses[termId] = data;
        }
        localStorage.setItem("termStatuses", JSON.stringify(newStatuses));
        return newStatuses;
      });
      unsavedChanges.current = {};
      return;
    }
    const entries = Object.entries(unsavedChanges.current);
    if (entries.length === 0) return;
    const upserts = entries.map(([termId, data]) => ({
      user_id: user.id,
      term_id: termId,
      status: data.status,
      correct_count: data.correctCount,
      updated_at: new Date(data.updatedAt).toISOString(),
    }));
    const { error } = await supabase
      .from("term_statuses")
      .upsert(upserts, { onConflict: ["user_id", "term_id"] });
    if (error) {
      console.error("Error upserting term statuses:", error);
      return;
    }
    unsavedChanges.current = {};
    console.log("Term statuses saved to Supabase.");
  };

  const flushChanges = () => {
    console.log("flushChanges() викликано. Зберігаємо негайно.");
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

  const setStatus = (termId, status) => {
    const now = Date.now();
    setTermStatuses((prev) => {
      const prevData = prev[termId] || {};
      return {
        ...prev,
        [termId]: {
          ...prevData,
          status,
          updatedAt: now,
          correctCount: status === "paused" ? 0 : (prevData.correctCount || 0),
        },
      };
    });
    const current = termStatuses[termId] || {};
    unsavedChanges.current[termId] = {
      ...current,
      status,
      updatedAt: now,
      correctCount: status === "paused" ? 0 : (current.correctCount || 0),
    };
  };

  const toggleStatus = (termId, newStatus) => {
    const currentStatus = termStatuses[termId]?.status || "unlearned";
    const updatedStatus = currentStatus === newStatus ? "unlearned" : newStatus;
    console.log(`Перемикання статусу для term ${termId}: ${currentStatus} -> ${updatedStatus}`);
    setStatus(termId, updatedStatus);
  };

  const recordCorrectAnswer = (termId, increment = 1) => {
    const now = Date.now();
    setTermStatuses((prev) => {
      const current = prev[termId] || { status: "unlearned", correctCount: 0 };
      const newCount = (current.correctCount || 0) + increment;
      const newStatus = newCount >= 5 ? "learned" : current.status;
      return {
        ...prev,
        [termId]: {
          status: newStatus,
          correctCount: newCount,
          updatedAt: now,
        },
      };
    });
    const oldData = termStatuses[termId] || { status: "unlearned", correctCount: 0 };
    const newCount = (oldData.correctCount || 0) + increment;
    const newStatus = newCount >= 5 ? "learned" : oldData.status;
    unsavedChanges.current[termId] = {
      status: newStatus,
      correctCount: newCount,
      updatedAt: now,
    };
    console.log(`Term ${termId} -> correctCount: ${newCount}, status: ${newStatus}`);
  };

  return (
    <TermStatusContext.Provider
      value={{
        termStatuses,
        setStatus,
        toggleStatus,
        recordCorrectAnswer,
        flushChanges,
        scheduleFlushChanges,
      }}
    >
      {children}
    </TermStatusContext.Provider>
  );
};

export const useTermStatus = () => useContext(TermStatusContext);