import React from "react";
import styled from "styled-components";

const SectionTitles = styled.div`
  font-size: 12pt;
  color: #4d4d4d;
  font-family: system-ui;
  margin-top: 120px;
`;
const Slogan = styled.div`
  font-size: 25pt;
  font-family: system-ui;
  font-style: italic;
  color: black;
  @media screen and (max-width: 767px) {
    font-size: 17pt;
  }
  @media screen and (max-width: 521px) {
    font-size: 12pt;
  }
`;
const SloganPortfolio = () => {
  return (
    <>
      <div className="container text-center">
        <div className="overlay-box shadow">
          <Slogan>"Capture the moments, freeze the emotions."</Slogan>
        </div>
      </div>
    </>
  );
};

const MainSection = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="portfolio-main-pic">
          <SloganPortfolio />
        </div>
        <SectionTitles className="text-center text-uppercase">Welcome</SectionTitles>
      </div>
    </>
  );
};

export default MainSection;
