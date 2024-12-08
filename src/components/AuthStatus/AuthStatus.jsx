import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const AuthStatus = () => {
  const [user] = useAuthState(auth);

  return (
    <div style={{ marginBottom: "20px" }}>
      {user ? (
        <p style={{ color: "green" }}>
          Ви увійшли як: <strong>{user.email || "Анонімний користувач"}</strong>
        </p>
      ) : (
        <p style={{ color: "red" }}>Ви не авторизовані</p>
      )}
    </div>
  );
};

export default AuthStatus;