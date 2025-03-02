import React, { useState } from "react";
import { MedicationStatusProvider } from "../../contexts/MedicationStatusContext";
import AllMedicationsPage from "./pages/AllMedicationsPage/AllMedicationsPage";

import FlashcardGame from "./pages/FlashcardGame/FlashcardGame";
import SimpleChoiceGame from "./pages/SimpleChoiceGame/SimpleChoiceGame";
import FillInBlankGame from "./pages/FillInBlankGame/FillInBlankGame";
import FortuneWheelGame from "./pages/FortuneWheelGame/FortuneWheelGame";

const MedicationsGameApp = () => {
  const [currentGame, setCurrentGame] = useState("medications");

  return (
    <MedicationStatusProvider>
      <nav style={{ marginBottom: "1rem" }}>
        <button onClick={() => setCurrentGame("medications")}>All Medications</button>
        {/* Додаткові кнопки для інших ігор */}
      </nav>
      {currentGame === "medications" && <AllMedicationsPage />}
      {currentGame === "flashcard" && <FlashcardGame />}
      {currentGame === "simpleChoice" && <SimpleChoiceGame />}
      {currentGame === "fillInBlank" && <FillInBlankGame />}
      {currentGame === "fortuneWheel" && <FortuneWheelGame />} */
    </MedicationStatusProvider>
  );
};

export default MedicationsGameApp;