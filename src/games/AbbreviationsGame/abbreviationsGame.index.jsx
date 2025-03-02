import React, { useState } from "react";
import { AbbreviationsStatusProvider } from "../../contexts/AbbreviationsStatusContext";
import AllMedicalAbbreviationsPage from "./pages/AllMedicalAbbreviationsPage/AllMedicalAbbreviationsPage";

// Імпортуємо ігрові компоненти (поки що – лише заглушки чи існуючі компоненти)
// Зверніть увагу, що для гри fill‑in‑blank тут не потрібна.
import FlashcardGame from "./pages/FlashcardGame/FlashcardGame";
import SimpleChoiceGame from "./pages/SimpleChoiceGame/SimpleChoiceGame";
import ElectiveLanguageGame from "./pages/ElectiveLanguageGame/ElectiveLanguageGame";
import TermMatchingGame from "./pages/TermMatchingGame/TermMatchingGame";
import FortuneWheelGame from "./pages/FortuneWheelGame/FortuneWheelGame";

const AbbreviationsGameApp = () => {
  const [currentGame, setCurrentGame] = useState("abbreviations");

  return (
    <AbbreviationsStatusProvider>
      <nav style={{ marginBottom: "1rem" }}>
        <button onClick={() => setCurrentGame("abbreviations")}>All Abbreviations</button>
        <button onClick={() => setCurrentGame("flashcard")}>Flashcard</button>
        <button onClick={() => setCurrentGame("simpleChoice")}>Simple Choice</button>
        <button onClick={() => setCurrentGame("electiveLanguage")}>Elective Language</button>
        <button onClick={() => setCurrentGame("termMatching")}>Term Matching</button>
        <button onClick={() => setCurrentGame("fortuneWheel")}>Fortune Wheel</button>
      </nav>
      {currentGame === "abbreviations" && <AllMedicalAbbreviationsPage />}
      {currentGame === "flashcard" && <FlashcardGame />}
      {currentGame === "simpleChoice" && <SimpleChoiceGame />}
      {currentGame === "electiveLanguage" && <ElectiveLanguageGame />}
      {currentGame === "termMatching" && <TermMatchingGame />}
      {currentGame === "fortuneWheel" && <FortuneWheelGame />}
    </AbbreviationsStatusProvider>
  );
};

export default AbbreviationsGameApp;