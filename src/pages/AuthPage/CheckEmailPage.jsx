import React from "react";
import { Link } from "react-router-dom";

export default function CheckEmailPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Fast fertig!</h2>
      <p>
        Wir haben dir eine E-Mail geschickt. Bitte öffne deine Mail und klicke den Bestätigungslink.
      </p>
      <p>
        Hast du den Link schon geklickt? <Link to="/auth/confirm">Hier weiter</Link>.
      </p>
    </div>
  );
}