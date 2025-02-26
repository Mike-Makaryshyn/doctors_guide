import React, { useState } from "react";
import { TermStatusProvider } from "../../contexts/TermStatusContext";
import AllMedicalTerminologyPage from "./pages/AllMedicalTerminologyPage/AllMedicalTerminologyPage";
import FlashcardGame from "./pages/FlashcardGame/FlashcardGame";
import SimpleChoiceGame from "./pages/SimpleChoiceGame/SimpleChoiceGame";
import FillInBlankGame from "./pages/FillInBlankGame/FillInBlankGame";
import FortuneWheelGame from "./pages/FortuneWheelGame/FortuneWheelGame"; 

const TerminologyGameApp = () => {
  // Можна використовувати значення: "terminology", "flashcard", "simpleChoice", "fillInBlank"
  const [currentGame, setCurrentGame] = useState("terminology");

  return (
    <TermStatusProvider>
      <nav style={{ marginBottom: "1rem" }}>
        <button onClick={() => setCurrentGame("terminology")}>Terminology</button>
        <button onClick={() => setCurrentGame("flashcard")}>Flashcard</button>
        <button onClick={() => setCurrentGame("simpleChoice")}>Simple Choice</button>
        <button onClick={() => setCurrentGame("fillInBlank")}>Fill In Blank</button>
        <button onClick={() => setCurrentGame("fortuneWheel")}>Fortune Wheel</button> 
      </nav>
      {currentGame === "terminology" && <AllMedicalTerminologyPage />}
      {currentGame === "flashcard" && <FlashcardGame />}
      {currentGame === "simpleChoice" && <SimpleChoiceGame />}
      {currentGame === "fillInBlank" && <FillInBlankGame />}
      {currentGame === "fortuneWheel" && <FortuneWheelGame />}
    </TermStatusProvider>
  );
};

export default TerminologyGameApp;