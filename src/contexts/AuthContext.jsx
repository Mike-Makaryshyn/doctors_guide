// src/contexts/AuthContext.jsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { createSubscriptionSession, createTokenSession } from '../supabaseClient';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [subscriptionEnd, setSubscriptionEnd] = useState(null);
  const [tokensBalance, setTokensBalance] = useState(0);

  // Helper to handle user metadata
  const handleUser = (user) => {
    setCurrentUser(user);
    if (user?.user_metadata) {
      const meta = user.user_metadata;
      setSubscriptionStatus(meta.subscription_status || 'inactive');
      setSubscriptionEnd(meta.subscription_end ? new Date(meta.subscription_end) : null);
      setTokensBalance(meta.tokens_balance ?? 0);
      console.log('AuthContext: subscriptionStatus =', meta.subscription_status, 
                  'subscriptionEnd =', meta.subscription_end, 
                  'tokensBalance =', meta.tokens_balance);
    } else {
      setSubscriptionStatus('inactive');
      setSubscriptionEnd(null);
      setTokensBalance(0);
      console.log('AuthContext: no user_metadata, set subscriptionStatus = inactive, tokensBalance = 0');
    }
  };

  useEffect(() => {
    // Fetch initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      handleUser(session?.user || null);
      setLoading(false);
    }).catch(() => setLoading(false));

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

  // Function to initiate subscription checkout
  const subscribe = async () => {
    if (!currentUser) return;
    const url = await createSubscriptionSession(currentUser.id);
    window.location.href = url;
  };

  // Function to initiate token purchase checkout
  const buyTokens = async (count) => {
    if (!currentUser) return;
    const url = await createTokenSession(currentUser.id, count);
    window.location.href = url;
  };

  const value = {
    currentUser,
    subscriptionStatus,
    subscriptionEnd,
    tokensBalance,
    subscribe,
    buyTokens,
    // Можна додати додаткові методи, наприклад, реєстрація, вхід, вихід
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};