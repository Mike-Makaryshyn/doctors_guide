import {
   languageFlags,
   languages,
   DEFAULT_LANGUAGE,
} from "../../constants/translation/global";
import { localStorageGet, localStorageSet } from "../../utils/localStorage";
import { useNavigate, useLocation } from "react-router-dom";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import cn from "classnames";
import styles from "./header.module.scss";

const Header = () => {
   const selectedLanguage = localStorageGet(
      "selectedLanguage",
      DEFAULT_LANGUAGE
   );

   const { selectedRegion } = useGetGlobalInfo();

   const navigate = useNavigate();
   const location = useLocation();

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
            Germanmove
         </h2>
         <span className={"sRegion"}>
            {location?.pathname !== "/lands" && selectedRegion}
         </span>
         <div className={cn(styles.hide_mobile, "flexBt")}>
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
