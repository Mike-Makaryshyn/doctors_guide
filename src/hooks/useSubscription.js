import { useContext } from 'react';
import { SubscriptionContext } from '../contexts/SubscriptionContext';

/**
 * Хук для доступу до статусу підписки
 * @returns {{status: string, endsAt: string|null, refresh: Function}}
 */
export function useSubscription() {
  return useContext(SubscriptionContext);
}