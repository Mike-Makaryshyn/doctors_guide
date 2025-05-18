import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const SubscribeButton = () => {
  const { currentUser, subscriptionStatus } = useAuth();

  const handleSubscribe = async () => {
    if (!currentUser) {
      alert('Будь ласка, увійдіть, щоб підписатися.');
      return;
    }

    try {
      const res = await fetch(
        'https://pgwaxkfsnzqmwujdzxje.supabase.co/functions/v1/create-subscription-session',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${anonKey}`,
            apikey: anonKey,
          },
          body: JSON.stringify({ user_id: currentUser.id }),
        }
      );

      if (!res.ok) {
        const err = await res.json();
        console.error('Subscription session error:', err);
        alert('Помилка при створенні сесії підписки.');
        return;
      }

      const { url } = await res.json();
      window.location.href = url;
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Помилка мережі при створенні сесії підписки.');
    }
  };

  if (subscriptionStatus === 'active') return null;

  return (
    <button onClick={handleSubscribe}>
      Підписатися
    </button>
  );
};

export default SubscribeButton;