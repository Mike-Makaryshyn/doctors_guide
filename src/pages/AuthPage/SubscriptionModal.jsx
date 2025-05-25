import React from 'react';
import PropTypes from 'prop-types';
import { useSubscription } from '../../contexts/SubscriptionContext';
import { useNavigate } from 'react-router-dom';
import styles from './AuthModal.module.scss';

const SubscriptionModal = ({ isOpen, onClose }) => {
  const { status, endsAt, refresh } = useSubscription();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubscribe = () => {
    // Перенаправляємо на сторінку оформлення підписки
    navigate('/pricing');
    onClose();
  };

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
          {status === 'active' ? 'Ваша підписка активна' : 'Підписка відсутня'}
        </h2>
        {status === 'active' && endsAt ? (
          <p>
            Ваша підписка дійсна до{' '}
            {new Date(endsAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        ) : (
          <p>Щоб отримати доступ до повного контенту, оформіть підписку.</p>
        )}
        {status === 'active' ? (
          <button onClick={handleManage} className={styles.loginButton}>
            Управління підпискою
          </button>
        ) : (
          <button onClick={handleSubscribe} className={styles.loginButton}>
            Оформити підписку
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
