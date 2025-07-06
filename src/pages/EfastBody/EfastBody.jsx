import { useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout.jsx";
import styles from "./EfastBody.module.css";

const regions = [
  { id: "heart", name: "Herz (Perikard)", info: "Ausschluss Perikardtamponade (subxiphoidal/parasternal)" },
  { id: "morrison", name: "Oberbauch rechts", info: "Freie Flüssigkeit um Leber/Niere (Morrison-Pouch)" },
  { id: "koller", name: "Oberbauch links", info: "Freie Flüssigkeit um Milz/Niere (Koller-Pouch)" },
  { id: "douglas", name: "Becken (Douglas-Pouch)", info: "Freie Flüssigkeit im Becken" },
  { id: "thoraxR", name: "Thorax rechts", info: "Pneumothorax / Hämatothorax" },
  { id: "thoraxL", name: "Thorax links", info: "Pneumothorax / Hämatothorax" },
];

export default function EfastBody() {
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <MainLayout>
      <div className={styles.efastContainer}>
        <h2>eFAST interaktiv</h2>
        <svg viewBox="0 0 200 400" className={styles.silhouetteSvg}>
          {/* Silhouette – menschliche Figur */}
          <path
            d="M100 20
               C 95 40, 105 40, 100 60
               C 90 90, 110 90, 100 120
               L 100 200
               C 80 220, 120 220, 100 240
               L 100 320
               C 85 340, 115 340, 100 360
               L 100 380"
            fill="#ddd"
          />

          {/* Klickbare Regionen */}
          <rect
            x="80" y="40" width="40" height="20"
            fill="#4caf50"
            opacity="0.3"
            onClick={() => setSelectedRegion(regions[0])}
            className={styles.region}
          />
          <rect
            x="80" y="110" width="20" height="20"
            fill="#2196f3"
            opacity="0.3"
            onClick={() => setSelectedRegion(regions[1])}
            className={styles.region}
          />
          <rect
            x="100" y="110" width="20" height="20"
            fill="#2196f3"
            opacity="0.3"
            onClick={() => setSelectedRegion(regions[2])}
            className={styles.region}
          />
          <rect
            x="90" y="230" width="20" height="20"
            fill="#ff9800"
            opacity="0.3"
            onClick={() => setSelectedRegion(regions[3])}
            className={styles.region}
          />
          <rect
            x="70" y="120" width="10" height="40"
            fill="#9c27b0"
            opacity="0.3"
            onClick={() => setSelectedRegion(regions[4])}
            className={styles.region}
          />
          <rect
            x="120" y="120" width="10" height="40"
            fill="#9c27b0"
            opacity="0.3"
            onClick={() => setSelectedRegion(regions[5])}
            className={styles.region}
          />
        </svg>

        {selectedRegion && (
          <div className={styles.regionDetails}>
            <h3>{selectedRegion.name}</h3>
            <p>{selectedRegion.info}</p>
            <button onClick={() => setSelectedRegion(null)}>Zurück</button>
          </div>
        )}
      </div>
    </MainLayout>
  );
}