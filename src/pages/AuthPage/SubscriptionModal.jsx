import React from 'react';
import PropTypes from 'prop-types';
import { useSubscription } from '../../contexts/SubscriptionContext';
import { useNavigate } from 'react-router-dom';
import useGetGlobalInfo from '../../hooks/useGetGlobalInfo';
import subscriptionTranslations from '../../constants/translation/subscription';
import styles from './SubscriptionModal.module.scss';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../supabaseClient';

const SubscriptionModal = ({ isOpen, onClose }) => {
  const { status, endsAt, refresh } = useSubscription();
  const navigate = useNavigate();

  const { selectedLanguage: language = 'de' } = useGetGlobalInfo();
  const t = subscriptionTranslations[language] || subscriptionTranslations['de'];

  const { currentUser } = useAuth();

  const handleSubscribe = async () => {
    if (!currentUser || !currentUser.email) {
      alert("Користувач не авторизований або email недоступний.");
      return;
    }
    const { data: { session } } = await supabase.auth.getSession();
    const accessToken = session?.access_token;
    if (!accessToken) {
      alert("Не вдалося отримати токен авторизації.");
      return;
    }
    const userId = currentUser?.id ?? currentUser?.user?.id;
    try {
      const response = await fetch(
        "https://pgwaxkfsnzqmwujdzxje.functions.supabase.co/create-subscription-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            email: currentUser.email,
            user_id: userId,
          }),
        }
      );
      if (!response.ok) throw new Error();
      const data = await response.json();
      if (data.url) window.location.href = data.url;
      else alert("Не вдалося створити сесію підписки.");
    } catch (error) {
      console.error(error);
      alert("Щось пішло не так при створенні підписки.");
    }
  };

  if (!isOpen) return null;

  const handleManage = () => {
    // Перенаправляємо на сторінку керування підпискою
    navigate('/dashboard/subscription');
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>&times;</button>
        <h2 className={styles.modalTitle}>
          {status === 'active' ? t.activeTitle : t.inactiveTitle}
        </h2>
        {status === 'active' && endsAt ? (
          <p style={{ color: 'blue' }}>
            {t.activeText}{' '}
            {new Date(endsAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        ) : (
          <p style={{ color: '#013b6e' }}>{t.inactiveText}</p>
        )}
        {status === 'active' ? (
          <button onClick={handleManage} className={styles.loginButton}>
            {t.manageButton}
          </button>
        ) : (
          <button
            onClick={handleSubscribe}
            className={styles.loginButton}
            style={{ color: '#ffffff' }}
          >
            {t.subscribeButtonLabel}
          </button>
        )}
      </div>
    </div>
  );
};

SubscriptionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SubscriptionModal;
