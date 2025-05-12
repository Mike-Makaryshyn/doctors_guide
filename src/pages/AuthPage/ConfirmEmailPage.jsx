import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function ConfirmEmailPage() {
  const [status, setStatus] = useState("Verifying your email...");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { error } = await supabase.auth.getSessionFromUrl({ storeSession: true });
      if (error) {
        setStatus("Email verification failed.");
      } else {
        setStatus("Email verified! Redirecting to login...");
        setTimeout(() => navigate("/auth/login"), 2000);
      }
    })();
  }, [navigate]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{status}</h2>
    </div>
  );
}