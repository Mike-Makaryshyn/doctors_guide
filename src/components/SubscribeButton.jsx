import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const SubscribeButton = () => {
  const { currentUser, subscriptionStatus, subscribe } = useAuth();

  const handleSubscribe = () => {
    if (!currentUser) {
      alert('Будь ласка, увійдіть, щоб підписатися.');
      return;
    }
    subscribe();
  };

  if (subscriptionStatus === 'active') return null;

  return (
    <button onClick={handleSubscribe}>
      Підписатися
    </button>
  );
};

export default SubscribeButton;