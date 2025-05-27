import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

export default function ConfirmEmailPage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("Перевірка електронної пошти...");

  useEffect(() => {
    (async () => {
      const { error } = await supabase.auth.getSessionFromUrl({ storeSession: true });
      if (error) {
        setStatus("Не вдалося підтвердити електронну пошту. Спробуйте ще раз.");
      } else {
        setStatus("Дякуємо за підтвердження електронної пошти! Тепер ви можете увійти в свій обліковий запис.");
      }
    })();
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      padding: '2rem'
    }}>
      <h2 style={{
        fontSize: '1.5rem',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        {status}
      </h2>
      <button
        onClick={() => navigate('/auth')}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          cursor: 'pointer'
        }}
      >
        Увійти
      </button>
    </div>
  );
}