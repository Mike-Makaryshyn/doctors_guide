import { Helmet } from "react-helmet";
import { LANDS_INFO } from "../../constants/lands";
import {
   choose_region_text,
   languagesMainMenu,
} from "../../constants/translation/main_menu";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import newsData from "./newData";
import logoMeta from "../../assets/logometagen.jpeg";

import "./main_menu.css";

const MainMenuPage = () => {
   const {
      selectedLanguage: language,
      selectedRegion,
   } = useGetGlobalInfo();

   const returnLandDesc = () => {
      const desc = LANDS_INFO?.find((land) => land?.name === selectedRegion)?.desc[language];
      return desc || "";
   };

   // Оновлений опис для метаданих
   const metaDescription =
      language === "de"
         ? "GermanMove - Ihr umfassender Wegweiser zur Approbation in Deutschland. Wir unterstützen Sie auf dem gesamten Weg, von Dokumenten bis zur medizinischen Anerkennung."
         : "GermanMove - Your comprehensive guide to Approbation in Germany. We support you throughout the entire journey, from documents to full medical recognition.";

   const metaKeywords =
      language === "de"
         ? "Approbation, medizinische Anerkennung, Dokumente, Unterstützung, Wegweiser, GermanMove"
         : "Approbation, medical recognition, documents, support, guide, GermanMove";

   const metaTitle =
      language === "de"
         ? "GermanMove - Ihr Wegweiser zur Approbation"
         : "GermanMove - Your Guide to Approbation";

   return (
      <MainLayout>
         <Helmet>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={logoMeta} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={logoMeta} />
         </Helmet>
         <div className="page page1 containerSmall mt-20">
            <div className="firstPageImageBlock"></div>
            <div className="main_menu__content">
               <div className="main_menu_wrapper">
                  {!selectedRegion && (
                     <div className="main_menu_text__wrapper">
                        <div>{languagesMainMenu[language]?.firstSent}</div>
                        {languagesMainMenu[language]?.mainText
                           .split("\n")
                           .map((sentence, index) => (
                              <div className="sentence" key={`${index}langText`}>
                                 {sentence}
                              </div>
                           ))}
                     </div>
                  )}

                  {selectedRegion && (
                     <div className="main_menu_text__wrapper">
                        {returnLandDesc()}
                     </div>
                  )}

                  <div className="news_tiles">
                     {newsData.map((news, index) => (
                        <div
                           className="news_tile"
                           key={index}
                           onClick={() => {
                              const content = document.getElementById(`news-content-${index}`);
                              content.classList.toggle("open");
                           }}
                        >
                           <div className="news_header">
                              <div className="news_title">{news.title[language]}</div>
                              <div className="news_date">{news.date}</div>
                           </div>
                           <div className="news_summary">{news.summary[language]}</div>
                           <div
                             className="news_content"
                             id={`news-content-${index}`}
                             dangerouslySetInnerHTML={{ __html: news.fullText[language] }}
                           ></div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </MainLayout>
   );
};

export default MainMenuPage;