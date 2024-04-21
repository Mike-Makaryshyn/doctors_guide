import React, { useEffect, useState } from "react";
import { localStorageGet, localStorageSet } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { pathList } from "../../routes/path";
import Header from "../../components/Header/Header";

import cn from "classnames";
import styles from "./styles.module.scss";

const GERMAN_MAP_PAGE = 3;
const initialPage = "";

const MainLayout = ({ children }) => {
   const navigate = useNavigate();

   return (
      <div className={cn(styles.mainLayout)}>
         <div className={cn(styles.content)}>
            <Header />
            <div className={cn(styles.children)}>{children}</div>
         </div>
      </div>
   );
};

export default MainLayout;
