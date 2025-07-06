// src/contexts/AuthContext.jsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Helper to handle user metadata
  const handleUser = (user) => {
    setCurrentUser(user);
  };

  useEffect(() => {
    if (!supabase) {
      console.warn('Supabase is not configured, skipping auth initialization');
      setLoading(false);
      return;
    }

    // Fetch initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      handleUser(session?.user || null);
      setLoading(false);
    }).catch((error) => {
      console.error('Error fetching session:', error);
      setLoading(false);
    });

    // Listen for future auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        console.log('Auth state change:', session?.user);
        handleUser(session?.user || null);
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};