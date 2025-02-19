// src/hooks/useRegionData.js
import { useContext, useState, useEffect, useCallback } from "react";
import { DataSourceContext } from "../contexts/DataSourceContext";

const useRegionData = (
  initialRegion = "",
  initialSourceType = "local",
  handleGlobalRegionChange
) => {
  const { fetchFirebaseCases } = useContext(DataSourceContext);
  const [localRegion, setLocalRegionState] = useState(initialRegion);
  const [sourceType, setSourceType] = useState(initialSourceType);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Відстеження змін глобального регіону та оновлення локального
  useEffect(() => {
    setLocalRegionState(initialRegion);
  }, [initialRegion]);

  /**
   * setLocalRegion дозволяє встановлювати регіон із контролем над глобальним станом.
   * @param {string} regionValue - Новий регіон.
   * @param {boolean} shouldUpdateGlobalRegion - Чи слід оновлювати глобальний стан регіону.
   */
  const setLocalRegion = useCallback(
    async (regionValue, shouldUpdateGlobalRegion = true) => {
      setLocalRegionState(regionValue);
      // Оновлюємо глобальний стан лише якщо дозволено
      if (handleGlobalRegionChange && shouldUpdateGlobalRegion) {
        handleGlobalRegionChange(regionValue);
      }
      setError(null);
      if (sourceType === "firebase") {
        setLoading(true);
        try {
          await fetchFirebaseCases(regionValue);
        } catch (err) {
          setError("Не вдалося завантажити онлайн випадки. Перевірте права доступу.");
        } finally {
          setLoading(false);
        }
      }
    },
    [fetchFirebaseCases, sourceType, handleGlobalRegionChange]
  );

  const handleSourceTypeChange = useCallback(
    async (type) => {
      setSourceType(type);
      setError(null);
      if (type === "firebase" && localRegion) {
        setLoading(true);
        try {
          await fetchFirebaseCases(localRegion);
        } catch (err) {
          setError("Не вдалося завантажити онлайн випадки. Перевірте права доступу.");
        } finally {
          setLoading(false);
        }
      }
    },
    [fetchFirebaseCases, localRegion]
  );

  return {
    localRegion,
    setLocalRegion,
    sourceType,
    setSourceType: handleSourceTypeChange,
    loading,
    error,
  };
};

export default useRegionData;