import React, { useMemo, useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { FaCog } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

// Імпортуємо напряму файли з даними
import THUERINGEN_DATA from "../../constants/translation/Fall/Thüringen.js";
import BAYERN_DATA from "../../constants/translation/Fall/Bayern.js";
import BERLIN_DATA from "../../constants/translation/Fall/Berlin.js";
import BRANDENBURG_DATA from "../../constants/translation/Fall/Brandenburg.js";
import BREMEN_DATA from "../../constants/translation/Fall/Bremen.js";
import HAMBURG_DATA from "../../constants/translation/Fall/Hamburg.js";
import HESSEN_DATA from "../../constants/translation/Fall/Hessen.js";
import MECKLENBURG_DATA from "../../constants/translation/Fall/Mecklenburg Vorpommern.js";
import NIEDERSACHSEN_DATA from "../../constants/translation/Fall/Niedersachsen.js";
import NRW_DATA from "../../constants/translation/Fall/Nordrhein-Westfalen.js";
import RHEINLAND_DATA from "../../constants/translation/Fall/Rheinland-Pfalz.js";
import SAARLAND_DATA from "../../constants/translation/Fall/Saarland.js";
import SACHSEN_DATA from "../../constants/translation/Fall/Sachsen.js";
import SACHSENANHALT_DATA from "../../constants/translation/Fall/Sachsen-Anhalt.js";
import SCHLESWIGHOLSTEIN_DATA from "../../constants/translation/Fall/Schleswig-Holstein.js";
import WESTFALEN_DATA from "../../constants/translation/Fall/Westfalen-Lippe.js";
import BW_FREIBURG_DATA from "../../constants/translation/Fall/Baden-Württemberg-Freiburg.js";
import BW_KARLSRUHE_DATA from "../../constants/translation/Fall/Baden-Württemberg-Karlsruhe.js";
import BW_STUTTGART_DATA from "../../constants/translation/Fall/Baden-Württemberg-Stuttgart.js";
import BW_REUTLINGEN_DATA from "../../constants/translation/Fall/Baden-Württemberg-Reutlingen.js";

const localizer = momentLocalizer(moment);

/**
 * Мапа для доступу до локальних масивів залежно від назви регіону.
 * Ключі мають збігатися з тим, що ви будете відображати в <option>.
 */
const regionDataMap = {
  "Thüringen": THUERINGEN_DATA,
  "Bayern": BAYERN_DATA,
  "Berlin": BERLIN_DATA,
  "Brandenburg": BRANDENBURG_DATA,
  "Bremen": BREMEN_DATA,
  "Hamburg": HAMBURG_DATA,
  "Hessen": HESSEN_DATA,
  "Mecklenburg Vorpommern": MECKLENBURG_DATA,
  "Niedersachsen": NIEDERSACHSEN_DATA,
  "Nordrhein-Westfalen": NRW_DATA,
  "Rheinland-Pfalz": RHEINLAND_DATA,
  "Saarland": SAARLAND_DATA,
  "Sachsen": SACHSEN_DATA,
  "Sachsen-Anhalt": SACHSENANHALT_DATA,
  "Schleswig-Holstein": SCHLESWIGHOLSTEIN_DATA,
  "Westfalen-Lippe": WESTFALEN_DATA,
  "Baden-Württemberg-Freiburg": BW_FREIBURG_DATA,
  "Baden-Württemberg-Karlsruhe": BW_KARLSRUHE_DATA,
  "Baden-Württemberg-Stuttgart": BW_STUTTGART_DATA,
  "Baden-Württemberg-Reutlingen": BW_REUTLINGEN_DATA,
};

// Кастомний компонент для відображення події
function EventComponent({ event }) {
  return (
    <div style={{ fontSize: "0.9rem", padding: "2px" }}>
      {event.title}
    </div>
  );
}

// Функція для задання стилю події (контейнера)
const eventStyleGetter = (event, start, end, isSelected) => {
  const backgroundColor = isSelected ? "#095b8e" : "#3174ad";
  const style = {
    backgroundColor,
    color: "#fff",
    borderRadius: "4px",
    border: "none",
    padding: "2px 4px",
    display: "block",
    fontSize: "0.85rem",
    cursor: "pointer",
  };
  return {
    style,
  };
};

const CalendarPage = () => {
  // Глобально вибраний регіон (наприклад, "Niedersachsen")
  const { selectedRegion } = useGetGlobalInfo();

  // Локальний стейт, який зберігає поточний регіон
  const [region, setRegion] = useState(selectedRegion || "Bayern");

  useEffect(() => {
    setRegion(selectedRegion || "Bayern");
  }, [selectedRegion]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  /**
   * Беремо дані з regionDataMap залежно від обраного регіону.
   */
  const events = useMemo(() => {
    const dataArray = regionDataMap[region] || [];

    return dataArray
      .filter((item) => item.examDate)
      .map((item) => {
        const [day, month, year] = item.examDate.split(".");
        const dateObj = new Date(+year, +month - 1, +day);

        return {
          title: item.fullName || "Без імені",
          start: dateObj,
          end: dateObj,
          allDay: true,
        };
      });
  }, [region]);

  const handleSelectEvent = (event) => {
    alert(`Подія: ${event.title}`);
  };

  return (
    <MainLayout>
      <div style={{ padding: "1rem" }}>
        <h1>Календар екзаменів: {region}</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <button onClick={handleBack} style={{ padding: "0.5rem 1rem" }}>
            Back
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            style={{ padding: "0.5rem 1rem" }}
          >
            <FaCog /> Settings
          </button>
        </div>

        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "80vh", margin: "1rem 0" }}
          defaultView="month"
          views={["month", "week"]}
          popup
          onSelectEvent={handleSelectEvent}
          components={{
            event: EventComponent,
          }}
          eventPropGetter={eventStyleGetter}
        />

        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ background: "#fff", padding: "1rem", position: "relative" }}>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
              >
                <AiOutlineClose />
              </button>
              <h2>Вибір регіону</h2>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                style={{ padding: "0.5rem", fontSize: "1rem" }}
              >
                {Object.keys(regionDataMap).map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default CalendarPage;