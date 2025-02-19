import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { LANGUAGE_STUDY_INFO } from "../../constants/translation/language-study";
import { LANDS_INFO } from "../../constants/lands";
import styles from "./styles.module.scss";

// Імпортуємо зображення для банерів
import vhsBanner from "../../assets/vhsbaner.png.webp";
import bamfLogo from "../../assets/bamflogo.png";
import goetheLogo from "../../assets/goetelogo.png";

const GoogleAdBanner = () => {
    React.useEffect(() => {
        if (window.adsbygoogle) {
            window.adsbygoogle.push({});
        }
    }, []);

    return (
        <div>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-2725262234054386"
                data-ad-slot="7516972524"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
};

const LanguageStudyPage = () => {
    const {
        selectedLanguage: language,
        selectedRegion,
        handleChangePage,
    } = useGetGlobalInfo();

    // Отримуємо інформацію про вибрану землю
    const regionalData = LANDS_INFO.find((land) => land.name === selectedRegion) || {};

    // Ресурси для обраного регіону
    const regionalResources = regionalData.resources || [];
    const regionalDescription =
        regionalData.desc?.[language] || regionalData.desc?.en || "No description available.";

    // Статичні банери для "Загальних ресурсів"
    const generalResourcesBanners = [
        {
            imageUrl: vhsBanner,
            altText: "VHS Banner",
            linkUrl: "https://www.volkshochschule.de",
            description: LANGUAGE_STUDY_INFO[language]?.general?.vhsDescription,
        },
        {
            imageUrl: bamfLogo,
            altText: "BAMF Banner",
            linkUrl: "https://www.bamf.de",
            description: LANGUAGE_STUDY_INFO[language]?.general?.bamfDescription,
        },
        {
            imageUrl: goetheLogo,
            altText: "Goethe-Institut Banner",
            linkUrl: "https://www.goethe.de",
            description: LANGUAGE_STUDY_INFO[language]?.general?.goetheDescription,
        },
    ];

    return (
        <MainLayout>
            <div className="page container mt-20">
                <button
                    className={styles.mainMenuBack}
                    onClick={() => handleChangePage("/main_menu")}
                >
                    &#8592; Back
                </button>

                {/* Заголовок сторінки */}
                <h1>
                    {language === "uk" ? "Вивчення мови" : "Language Study"}
                </h1>

                {/* Регіональні ресурси */}
                <section>
                    <h2 className={styles.sectionTitle}>
                        {LANGUAGE_STUDY_INFO[language]?.regional?.title ||
                            "Regional Resources"}
                    </h2>
                    <p className={styles.regionDescription}>
                        {regionalResources.length > 0
                            ? regionalDescription
                            : language === "uk"
                            ? "Немає регіональних ресурсів."
                            : "No regional resources available."}
                    </p>
                    <div className={styles.bannerContainer}>
                        {regionalResources.length > 0 ? (
                            regionalResources.map((resource, index) => (
                                <div key={index} className={styles.banner}>
                                    <a
                                        href={resource.linkUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={resource.imageUrl}
                                            alt={resource.altText}
                                        />
                                    </a>
                                    <p className={styles.bannerDescription}>
                                        {resource.description?.[language] ||
                                            resource.description?.en}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <GoogleAdBanner />
                        )}
                    </div>
                </section>

                {/* Загальні ресурси */}
                <section>
                    <h2 className={styles.sectionTitle}>
                        {LANGUAGE_STUDY_INFO[language]?.general?.title ||
                            "General Resources"}
                    </h2>
                    <div className={styles.generalBannerContainer}>
                        {generalResourcesBanners.map((banner, index) => (
                            <div key={index} className={styles.bannerWithDescription}>
                                <div className={styles.banner}>
                                    <a
                                        href={banner.linkUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={banner.imageUrl}
                                            alt={banner.altText}
                                        />
                                    </a>
                                </div>
                                <p className={styles.bannerDescription}>
                                    {banner.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};

export default LanguageStudyPage;