// src/components/GermanyMap/GermanyMap.jsx

import React, { useEffect } from "react";
import "./map.css";

// SVG:
import state1 from "../../assets/states/Baden-W.svg";
import state2 from "../../assets/states/Brandenburg.svg";
import state3 from "../../assets/states/MecklenburgVorpommern.svg";
import state4 from "../../assets/states/Niedersachsen.svg";
import state5 from "../../assets/states/NRW.svg";
import state6 from "../../assets/states/Saarland.svg";
import state7 from "../../assets/states/Sachsen-Anhalt.svg";
import state8 from "../../assets/states/Sachsen.svg";
import state9 from "../../assets/states/Thüringen.svg";
import state10 from "../../assets/states/Schleswig-Holstein.svg";
import state11 from "../../assets/states/Thüringen.svg";
import state12 from "../../assets/states/Rheinland-Pfalz-t.svg";
import state13 from "../../assets/states/Bayern.svg";
import state14 from "../../assets/states/Berlin.svg";
import state15 from "../../assets/states/Bremen.svg";
import state16 from "../../assets/states/Hessen.svg";
import state17 from "../../assets/states/Hamburg.svg";

// Якщо ви ще десь використовуєте localStorageGet/localStorageSet – приберіть
// або закоментуйте, адже тепер будемо покладатися на глобальний хук
// import { localStorageGet, localStorageSet } from "../../utils/localStorage";

import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

// Компонент для одного “штату” (SVG)
const StateComponent = ({ id, idx, name, img, x, y, onChoose }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: "600px",
        height: "520px",
      }}
      className="map_item"
    >
      <span
        onTouchEnd={() => onChoose(name)}
        onClick={() => onChoose(name)}
        className={`state_${idx}`}
      >
        {name}
      </span>
      <img
        className={`img_${idx}`}
        id={id}
        src={img}
        alt={name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

// Перелік німецьких земель
const germanyStates = [
  {
    id: "BadenW",
    name: "Baden-Württemberg",
    img: state1,
    x: 68,
    y: 128,
  },
  {
    id: "Brandenburg",
    name: "Brandenburg",
    img: state2,
    x: 0,
    y: 40,
  },
  {
    id: "MecklenburgVorpommern",
    name: "Mecklenburg Vorpommern",
    img: state3,
    x: 0,
    y: 40,
  },
  {
    id: "Niedersachsen",
    name: "Niedersachsen",
    img: state4,
    x: 0,
    y: 40,
  },
  {
    id: "NRW",
    name: "Nordrhein-Westfalen",
    img: state5,
    x: 0,
    y: 40,
  },
  {
    id: "Saarland",
    name: "Saarland",
    img: state6,
    x: -30,
    y: 50,
  },
  {
    id: "SachsenAnhalt",
    name: "Sachsen-Anhalt",
    img: state7,
    x: 0,
    y: 40,
  },
  {
    id: "Sachsen",
    name: "Sachsen",
    img: state8,
    x: 0,
    y: 40,
  },
  {
    id: "test",
    name: "Thüringen",
    img: state9,
    x: 0,
    y: 40,
  },
  {
    id: "SchleswigHolstein",
    name: "Schleswig-Holstein",
    img: state10,
    x: 0,
    y: 40,
  },
  {
    id: "Thueringen",
    name: "Thüringen",
    img: state11,
    x: 0,
    y: 40,
  },
  {
    id: "RheinlandPfalz",
    name: "Rheinland-Pfalz",
    img: state12,
    x: -45,
    y: 58,
  },
  {
    id: "WestfalenLippe",
    name: "Westfalen-Lippe",
    img: state13,
    x: -45,
    y: 58,
  },
  { id: "Bayern", name: "Bayern", img: state13, x: 0, y: 40 },
  { id: "Berlin", name: "Berlin", img: state14, x: 0, y: 40 },
  { id: "Bremen", name: "Bremen", img: state15, x: 0, y: 40 },
  { id: "Hessen", name: "Hessen", img: state16, x: 0, y: 40 },
  { id: "Hamburg", name: "Hamburg", img: state17, x: 0, y: 40 },
];

const GermanyMap = () => {
  // Беремо глобальний стан
  const { selectedRegion, handleChangeRegion } = useGetGlobalInfo();

  // Викликатимемо handleChangeRegion, аби записати глобальний вибір
  const handleRegionChoose = (region) => {
    handleChangeRegion(region);
  };

  return (
    <div className="mapContainer">
      {/* Глобально обраний регіон */}
      <div className="selected">{selectedRegion}</div>

      <div
        className="map"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "750px",
        }}
      >
        {germanyStates.map((state, idx) => (
          <StateComponent
            key={state.id}
            idx={idx}
            id={state.id}
            name={state.name}
            img={state.img}
            x={state.x}
            y={state.y}
            onChoose={handleRegionChoose}
          />
        ))}
      </div>
    </div>
  );
};

export default GermanyMap;