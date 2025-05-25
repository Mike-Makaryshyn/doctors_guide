import React, { useEffect, useState } from 'react';
import { useSubscription } from '../../contexts/SubscriptionContext';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import styles from './SubscriptionManagement.module.scss';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import useGetGlobalInfo from '../../hooks/useGetGlobalInfo';
import { languages, DEFAULT_LANGUAGE } from '../../constants/translation/SubscriptionManagementPage';

const SubscriptionManagement = () => {
  const { status, endsAt, refresh } = useSubscription();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { selectedLanguage } = useGetGlobalInfo();
  const t = languages[selectedLanguage] || languages[DEFAULT_LANGUAGE];

  // Grace-Period: 'canceled' aber noch nicht abgelaufen → treat as subscribed
  const isSubscribed =
    status === 'active' ||
    (status === 'canceled' && endsAt && new Date(endsAt) > new Date());

  useEffect(() => {
    refresh();
  }, [refresh]);

  const handleUpgrade = () => {
    navigate('/pricing');
  };

  return (
    <MainLayout>
      <div className={styles.modalWrapper}>
        <h1 className={styles.modalTitle}>{t.title}</h1>

        {/* Immer Status anzeigen */}
        <p className={styles.infoText}>
          {t.statusLabel}: <strong>{isSubscribed ? t.active : t.noSubscription}</strong>
        </p>

        {/* Ablaufdatum nur bei Subscription */}
        {isSubscribed && endsAt && (
          <p className={styles.infoText}>
            {t.validUntil}: <strong>{new Date(endsAt).toLocaleDateString()}</strong>
          </p>
        )}

        {/* Ein Button: bei Subscription deaktiviert, ansonsten "Subscribe" */}
        <button
          onClick={isSubscribed ? undefined : handleUpgrade}
          className={styles.subscriptionButton}
          disabled={isSubscribed || loading}
        >
          {isSubscribed ? t.active : t.subscribeButton}
        </button>
      </div>
      <button
        onClick={() => navigate('/dashboard')}
        className={styles.mainMenuBack}
        title="Back to Dashboard"
      >
        ←
      </button>
    </MainLayout>
  );
};

export default SubscriptionManagement;