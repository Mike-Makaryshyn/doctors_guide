import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./ResourceListPage.module.scss";
import { resourcesData } from "./resourcesData";
import { FaExternalLinkAlt } from "react-icons/fa";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { useParams } from "react-router-dom";

// "Alle", "Portale", "Agenturen"
const categories = ["Alle", "Portale", "Agenturen"];

const ResourceListPage = () => {
  const { selectedLanguage: language = "uk" } = useGetGlobalInfo();
  const { cat } = useParams();
  const category =
    cat?.toLowerCase() === "portale"
      ? "Portale"
      : cat?.toLowerCase() === "agenturen"
      ? "Agenturen"
      : "Alle";

  // Filtered list
  const visibleResources =
    category === "Alle"
      ? [...resourcesData.Portale, ...resourcesData.Agenturen]
      : resourcesData[category];

  // Render
  return (
    <MainLayout>
      <div className={styles.container}>

        {/* Tiles */}
        <div className={styles.tilesContainer}>
          {visibleResources.map((res) => (
            <div key={res.id} className={styles.tile}>
              <h3 className={styles.tileHeader}>{res.name}</h3>
              <p className={styles.tileDescription}>
                {res.descriptions[language] ??
                  res.descriptions[(language || "").split("-")[0]] ??
                  res.descriptions.en ??
                  res.descriptions.uk}
              </p>
              {res.url ? (
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tileLink}
                >
                  <FaExternalLinkAlt style={{ marginRight: 6 }} />
                  {res.url.replace(/^https?:\/\//, "")}
                </a>
              ) : (
                <span className={styles.tileLink}>
                  <FaExternalLinkAlt style={{ marginRight: 6 }} />
                  Link N/A
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ResourceListPage;