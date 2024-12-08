import {
   languageFlags,
   languages,
   DEFAULT_LANGUAGE,
} from "../../constants/translation/global";
import { localStorageGet, localStorageSet } from "../../utils/localStorage";
import { useNavigate, useLocation } from "react-router-dom";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import styles from "./styles.module.scss";
import cn from "classnames";

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
      <header className={cn(styles.header, "flexBt")}>
         <h2
            onClick={() => {
               navigate("/main_menu");
            }}
            className={cn(styles.mainLogo, "upcase")}
         >
            Germanmove
         </h2>
         <span className={styles.sRegion}>
            {location?.pathname !== "/lands" && selectedRegion}
         </span>

         <div className="flexBt">
            <span style={{ marginRight: "20px" }}>
               {languages[selectedLanguage].language}
            </span>
            <select
               className={styles.langSelect}
               value={selectedLanguage}
               onChange={handleChangeLanguage}
            >
               {languages[selectedLanguage].options.map((option) => (
                  <option key={option.value} value={option.value}>
                     {languageFlags[option.value]} {option.label}
                  </option>
               ))}
            </select>

            <a href={"/dashboard"}>DASHBOARD</a>
         </div>
      </header>
   );
};

export default Header;
