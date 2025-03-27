// SomeParent.jsx
import React, { useState } from "react";
import StageMenu from "../pages/ApprobationPage/StageMenu";
import Avatar from "../components/Avatar/Avatar";

const SomeParent = () => {
  // Стан активного етапу
  const [activeStage, setActiveStage] = useState(1);

  // Функція для оновлення активного етапу
  const handleStageSelect = (newStage) => {
    console.log("Selected stage:", newStage);
    setActiveStage(newStage);
  };

  // Додаткове логування, щоб перевірити, яке значення activeStage зараз у SomeParent
  console.log("SomeParent activeStage:", activeStage);

  return (
    <div>
      <StageMenu
        activeStage={activeStage}
        onStageSelect={handleStageSelect}
        stagesProgress={[10, 20, 30, 40, 50, 60, 70, 80, 90]}
        educationRegion="EU"
        isRegistration={false}
      />
      <Avatar stageId={activeStage} />
    </div>
  );
};

export default SomeParent;