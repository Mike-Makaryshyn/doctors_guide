import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./ResourceListPage.module.scss";
import { resourcesData } from "./resourcesData";
import { FaExternalLinkAlt } from "react-icons/fa";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import jobSearchMeta from "../../assets/jobsearchmeta.jpeg";

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
    <>
      <Helmet>
        <title>Ressourcen & Portale für Ärzte in Deutschland – GermanMove</title>
        <meta
          name="description"
          content="Alle wichtigen Portale und Agenturen zur Jobsuche als Arzt in Deutschland auf einen Blick."
        />
        <meta property="og:title" content="Ressourcen & Portale für Ärzte in Deutschland" />
        <meta
          property="og:description"
          content="Entdecken Sie Portale und Agenturen zur Unterstützung Ihrer Jobsuche als Arzt in Deutschland."
        />
        <meta property="og:image" content={jobSearchMeta} />
        <meta property="og:image:alt" content="Portale und Agenturen für Ärzte in Deutschland" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ressourcen & Portale für Ärzte in Deutschland" />
        <meta
          name="twitter:description"
          content="Portale und Agenturen, die Ihnen bei der Jobsuche als Arzt in Deutschland helfen."
        />
        <meta name="twitter:image" content={jobSearchMeta} />
      </Helmet>
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
    </>
  );
};

export default ResourceListPage;