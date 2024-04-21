import { useState, useEffect } from "react";
import { languages } from "./constants/translation/global";
import "./App.css";
import GermanyMap from "./components/GermanyMap/GermanyMap";
import Header from "./components/Header/Header";
import MainMenu from "./pages/MainMenuPage/MainMenuPage";
import IntroductionPage from "./pages/IntroductionPage/IntroductionPage";
import Routers from "./routes";

const GERMAN_MAP_PAGE = 3;
const DEFAULT_LANGUAGE = "de";

function App() {
   const storedPage = localStorage.getItem("currentPage");
   const storedRegion = localStorage.getItem("selectedRegion");
   const initialPage = storedPage ? parseInt(storedPage, 10) : 2;
   // const selectedLanguage = localStorage.getItem("selectedLanguage") ||  DEFAULT_LANGUAGE;
   // const initialLanguage = storedLanguage ? storedLanguage : "de";
   // const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
   // const [currentPage, setCurrentPage] = useState(initialPage);

   // const handleNextPage = () => {
   //    setCurrentPage(currentPage + 1);
   // };

   // const handleChangeLanguage = (event) => {
   //    const newLanguage = event.target.value;
   //    localStorage.setItem("selectedLanguage", newLanguage);
   // };

   // const handlePrevPage = () => {
   //    setCurrentPage(currentPage - 1);
   // };

   // const redirectToRefionPage = (e) => {
   //    e.preventDefault();
   //    setCurrentPage(GERMAN_MAP_PAGE);
   // };

   // useEffect(() => {
   //    localStorage.setItem("currentPage", currentPage);
   //    window.scrollTo(0, 0);
   // }, [currentPage]);

//    {currentPage === 2 && (
//       <IntroductionPage
//          // selectedLanguage={selectedLanguage}
//          handleNextPage={handleNextPage}
//       />
//    )}

//    {currentPage === 3 && (
//       <div className="page page2">
//          {/* Second page content */}
//          <h2 className="mt-20">
//             {/* {languages[selectedLanguage].choose_region} */}
//          </h2>

//          <GermanyMap />
//          <button onClick={handlePrevPage}>
//             {/* {languages[selectedLanguage].back} */}
//          </button>

//          <button onClick={handleNextPage}>
//             {/* {languages[selectedLanguage].continue} */}
//          </button>
//       </div>
//    )}

//    {currentPage === 4 && (
//       <div className="page page1 containerSmall mt-20">
//          {/* Third page content */}
//          <div className="firstPageImageBlock"></div>
//          <div className={"main_menu__content"}>
//             <MainMenu
//                redirectToRefionPage={redirectToRefionPage}
//                storedRegion={storedRegion}
//                // language={selectedLanguage}
//             />
//             <button
//                className={"main_menu_back"}
//                onClick={handlePrevPage}
//             >
//                &#8592;
//             </button>
//          </div>
//       </div>
//    )}
// </div> 

   return (
      <div className="App">
         {/* Content */}
          <div className="content">
            <Routers />
          </div>
            
      </div>
   );
}

export default App;
