import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import { useNavigate } from "react-router-dom";

import bgVideo from "../../assets/video/first_page_bg.mp4";

const IntroductionPage = () => {
  const { selectedLanguage, languages } = useGetGlobalInfo();
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="introductionPage">
        <div className="main_menu_wrapper">
          <div className="page page1">
            <div className="firstPageImageBlock">
              <video
                className="backgroundVideo"
                autoPlay
                muted
                loop
                playsInline
                src={bgVideo}
              />
            </div>
            <div className="containerSmall firstPageContent">
              <h1>{languages[selectedLanguage].welcome}</h1>
              <ul className="req">
                <h2>{languages[selectedLanguage].requirements.title}</h2>
                <li>{languages[selectedLanguage].requirements.medEducation}</li>
                <li>{languages[selectedLanguage].requirements.aip}</li>
                <li>{languages[selectedLanguage].requirements.license}</li>
                <li>{languages[selectedLanguage].requirements.languageSkills}</li>
                <p>{languages[selectedLanguage].requirements.note}</p>
              </ul>
              <button onClick={() => navigate("/main_menu")}>
                {languages[selectedLanguage].next}
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IntroductionPage;