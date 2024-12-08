import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase"; // Шлях до Firebase залежить від вашого проєкту

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Завантаження...</div>; // Індикація завантаження
  }

  if (!user) {
    return <Navigate to="/auth" replace />; // Перенаправлення на сторінку авторизації
  }

  return children; // Відображення сторінки, якщо користувач авторизований
};

export default ProtectedRoute;