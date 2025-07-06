// src/hooks/useAuth.js
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      console.warn('Supabase is not configured, skipping auth initialization');
      setUser(null);
      setLoading(false);
      return;
    }

    // початковий запит сесії
    const getSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching session:', error);
        setUser(null);
        setLoading(false);
      }
    };
    getSession();

    // відслідковуємо зміни авторизації
    const { data } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => data.subscription.unsubscribe();
  }, []);

  return { user, loading };
}