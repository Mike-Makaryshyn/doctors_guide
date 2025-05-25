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

  useEffect(() => {
    refresh();
  }, []);

  const handleCancel = async () => {
    setLoading(true);
    // Виклик функції скасування у backend / webhook
    const { error } = await supabase.rpc('cancel_subscription', { user_id: supabase.auth.user().id });
    if (error) {
      alert(t.errorCancel.replace('{{message}}', error.message));
    } else {
      alert(t.successCancel);
      refresh();
    }
    setLoading(false);
  };

  const handleUpgrade = () => {
    navigate('/pricing');
  };

  return (
    <MainLayout>
      <div className={styles.modalWrapper}>
        <h1 className={styles.modalTitle}>{t.title}</h1>
        {status === 'active' ? (
          <>
            <p className={styles.infoText}>{t.statusLabel}: <strong>{t.active}</strong></p>
            {endsAt && (
              <p className={styles.infoText}>{t.validUntil}: <strong>{new Date(endsAt).toLocaleDateString()}</strong></p>
            )}
            <button
              onClick={handleCancel}
              className={styles.subscriptionButton}
              disabled={loading}
            >
              {loading ? t.processing : t.cancelButton}
            </button>
          </>
        ) : (
          <>
            <p className={styles.infoText}>{t.noSubscription}</p>
            <button
              onClick={handleUpgrade}
              className={styles.subscriptionButton}
            >
              {t.subscribeButton}
            </button>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default SubscriptionManagement;
