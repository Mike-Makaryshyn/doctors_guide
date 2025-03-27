import { LANDS_INFO } from "../../constants/lands";
import {
   choose_region_text,
   languagesMainMenu,
} from "../../constants/translation/main_menu";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import newsData from "./newData";

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

   return (
      <MainLayout>
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
      <div className="news_content" id={`news-content-${index}`}>
        {news.fullText[language]}
      </div>
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