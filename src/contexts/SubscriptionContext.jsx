// src/contexts/SubscriptionContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from './AuthContext';

const SubscriptionContext = createContext({
  status: 'inactive',
  endsAt: null,
  refresh: ()=>{},
});

export const useSubscription = () => useContext(SubscriptionContext);

export function SubscriptionProvider({ children }) {
  const { currentUser } = useAuth();
  const [status, setStatus] = useState('inactive');
  const [endsAt, setEndsAt] = useState(null);

  const fetchSub = async () => {
    if (!currentUser) {
      setStatus('inactive');
      setEndsAt(null);
      console.log('SubscriptionContext: no user detected, status=inactive, endsAt=null');
      return;
    }
    // 1) читаємо прямо з таблиці subscriptions
    const { data, error } = await supabase
      .from('subscriptions')
      .select('status, current_period_end')
      .eq('user_id', currentUser.id)
      .single();

    if (!error && data) {
      setStatus(data.status);
      setEndsAt(data.current_period_end);
      console.log('SubscriptionContext: status =', data.status, 'endsAt =', data.current_period_end);
    } else {
      setStatus('inactive');
      setEndsAt(null);
      console.log('SubscriptionContext: error or no subscription, status=inactive', error);
    }
  };

  useEffect(() => {
    fetchSub();
    // можна слухати події auth change, якщо треба
  }, [currentUser]);

  return (
    <SubscriptionContext.Provider value={{
      status,
      endsAt,
      refresh: fetchSub
    }}>
      {children}
    </SubscriptionContext.Provider>
  );
}