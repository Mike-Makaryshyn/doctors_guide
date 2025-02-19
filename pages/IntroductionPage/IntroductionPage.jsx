import { localStorageGet } from "../../utils/localStorage";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";

const IntroductionPage = ({ handleNextPage }) => {
   const { selectedLanguage, languages, handleChangePage } = useGetGlobalInfo();

   return (
      <MainLayout>
         <div className={"main_menu_wrapper"}>
            <div className="page page1">
               <div className="firstPageImageBlock"></div>
               <div className="containerSmall firstPageContent">
                  <h1>{languages[selectedLanguage].welcome}</h1>
                  <ul className="req">
                     <h2>{languages[selectedLanguage].requirements.title}</h2>
                     <li>
                        {languages[selectedLanguage].requirements.medEducation}
                     </li>
                     <li>{languages[selectedLanguage].requirements.aip}</li>
                     <li>{languages[selectedLanguage].requirements.license}</li>
                     <li>
                        {
                           languages[selectedLanguage].requirements
                              .languageSkills
                        }
                     </li>
                     <p>{languages[selectedLanguage].requirements.note}</p>
                  </ul>
                  <button onClick={()=> handleChangePage('/lands')}>
                     {languages[selectedLanguage].next}
                  </button>
               </div>
            </div>
         </div>
      </MainLayout>
   );
};

export default IntroductionPage;
