import {
   languageFlags,
   languages,
   DEFAULT_LANGUAGE,
} from "../../constants/translation/global";
import { localStorageGet, localStorageSet } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import "./header.css";

const Header = () => {
   const selectedLanguage = localStorageGet(
      "selectedLanguage",
      DEFAULT_LANGUAGE
   );

   const { selectedRegion } = useGetGlobalInfo();

   const navigate = useNavigate();

   const handleChangeLanguage = (event) => {
      const newLanguage = event.target.value;
      localStorageSet("selectedLanguage", newLanguage);
      window.location.reload();
   };

   return (
      <header className="header flexBt">
         <h2
            onClick={() => {
               navigate("/main_menu");
            }}
            className="upcase mainLogo"
         >
            Germanmovein
         </h2>
         <span>{selectedRegion}</span>
         <div className="flexBt">
            <span style={{ marginRight: "20px" }}>
               {languages[selectedLanguage].language}
            </span>
            <select
               className="langSelect"
               value={selectedLanguage}
               onChange={handleChangeLanguage}
            >
               {languages[selectedLanguage].options.map((option) => (
                  <option key={option.value} value={option.value}>
                     {languageFlags[option.value]} {option.label}
                  </option>
               ))}
            </select>
         </div>
      </header>
   );
};

export default Header;
