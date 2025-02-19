import { LANDS_INFO } from "../../constants/lands";
import {
   choose_region_text,
   languagesMainMenu,
   main_menu_items,
} from "../../constants/translation/main_menu";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";

import "./main_menu.css";

const MainMenuPage = () => {
   const {
      selectedLanguage: language,
      redirectToRegionPage,
      handleChangePage,
      selectedRegion,
   } = useGetGlobalInfo();

   const returnLandDesc = () => {
      const desc = LANDS_INFO?.find((land) => land?.name === selectedRegion)
         ?.desc[language];

      if (desc) {
         return desc;
      } else return desc;
   };

   return (
      <MainLayout>
         <div className="page page1 containerSmall mt-20">
            <div className="firstPageImageBlock"></div>
            <div className={"main_menu__content"}>
               <div className={"main_menu_wrapper"}>
                  {!selectedRegion && (
                     <div className={"main_menu_text__wrapper"}>
                        <div>{languagesMainMenu[language]?.firstSent}</div>
                        {languagesMainMenu[language]?.mainText
                           .split("\n")
                           .map((sentence, index) => (
                              <div
                                 className={"sentence"}
                                 key={`${index}langText`}
                              >
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

                  <div className={"main_menu__sections"}>
                     {main_menu_items?.sections
                        ?.sort((a, b) => a?.order - b?.order)
                        ?.map((section, sectionIndex) => (
                           <div
                              className="main_menu__section"
                              key={`${sectionIndex}menu`}
                           >
                              <img
                                 className={"main_menu__settion_icon"}
                                 src={section.icon}
                                 alt=""
                              />

                              <div>
                                 <div className="main_menu_section_title">
                                    {section.title[language]}
                                 </div>

                                 {section.items.map((item, optionIdex) => {
                                    if (
                                       sectionIndex === 2 &&
                                       optionIdex !== 0 &&
                                       !selectedRegion
                                    ) {
                                       return (
                                          <div
                                             key={`${optionIdex}opt`}
                                             className={"wrapper_with_choose"}
                                          >
                                             <a
                                                className={
                                                   "main_menu_section_link disabled"
                                                }
                                                href={item?.link}
                                                target={item?.link?.startsWith("https") ? "_blank" : "_self"}
                                                key={optionIdex}
                                             >
                                                <div>{item[language]}</div>
                                             </a>
                                             <a
                                                onClick={redirectToRegionPage}
                                                className={"choose_region_link"}
                                             >
                                                {choose_region_text[language]}
                                             </a>
                                          </div>
                                       );
                                    }
                                    if (
                                       sectionIndex === 1 &&
                                       optionIdex > 1 &&
                                       !selectedRegion
                                    ) {
                                       return (
                                          <div
                                             key={`${optionIdex}opt`}
                                             className={"wrapper_with_choose"}
                                          >
                                             <a
                                                className={
                                                   "main_menu_section_link disabled"
                                                }
                                                href={item?.link}
                                                target={item?.link?.startsWith("https") ? "_blank" : "_self"}
                                                key={optionIdex}
                                             >
                                                <div>{item[language]}</div>
                                             </a>
                                             <a
                                                onClick={redirectToRegionPage}
                                                className={
                                                   "choose_region_link2"
                                                }
                                             >
                                                {choose_region_text[language]}
                                             </a>
                                          </div>
                                       );
                                    }
                                    if (
                                       sectionIndex === 3 &&
                                       optionIdex === 6 &&
                                       !selectedRegion
                                    ) {
                                       return (
                                          <div
                                             className={"wrapper_with_choose"}
                                          >
                                             <a
                                                className={
                                                   "main_menu_section_link disabled"
                                                }
                                                href={item?.link}
                                                target={item?.link?.startsWith("https") ? "_blank" : "_self"}
                                                key={optionIdex}
                                             >
                                                <div>{item[language]}</div>
                                             </a>
                                             <a
                                                onClick={redirectToRegionPage}
                                                className={
                                                   "choose_region_link2"
                                                }
                                             >
                                                {choose_region_text[language]}
                                             </a>
                                          </div>
                                       );
                                    }

                                    if (
                                       sectionIndex === 1 &&
                                       optionIdex === 1 &&
                                       selectedRegion
                                    ) {
                                       return (
                                          <div
                                             className={"wrapper_with_choose"}
                                          >
                                             <a
                                                className={
                                                   "main_menu_section_link"
                                                }
                                                href={
                                                   LANDS_INFO?.find(
                                                      (land) =>
                                                         land?.name ===
                                                         selectedRegion
                                                   )?.main_link
                                                }
                                                target={item?.link?.startsWith("https") ? "_blank" : "_self"}
                                                key={`${optionIdex}dlas`}
                                             >
                                                <div>{item[language]}</div>
                                             </a>
                                          </div>
                                       );
                                    }

                                    if (
                                       sectionIndex === 1 &&
                                       optionIdex === 2 &&
                                       selectedRegion
                                    ) {
                                       return (
                                          <div
                                             className={"wrapper_with_choose"}
                                          >
                                             <a
                                                className={
                                                   "main_menu_section_link"
                                                }
                                                href={
                                                   LANDS_INFO?.find(
                                                      (land) =>
                                                         land?.name ===
                                                         selectedRegion
                                                   )?.doctor_palat
                                                }
                                                target={item?.link?.startsWith("https") ? "_blank" : "_self"}
                                                key={`${optionIdex}dlas`}
                                             >
                                                <div>{item[language]}</div>
                                             </a>
                                          </div>
                                       );
                                    }

                                    return (
                                       <a
                                          className={"main_menu_section_link"}
                                          href={item?.link}
                                          target={item?.link?.startsWith("https") ? "_blank" : "_self"}
                                          key={`${optionIdex}lala`}
                                       >
                                          <div>{item[language]}</div>
                                       </a>
                                    );
                                 })}
                              </div>
                           </div>
                        ))}
                  </div>
               </div>
               <button
                  className={"main_menu_back"}
                  onClick={() => handleChangePage("/lands")}
               >
                  &#8592;
               </button>
            </div>
         </div>
      </MainLayout>
   );
};

export default MainMenuPage;
