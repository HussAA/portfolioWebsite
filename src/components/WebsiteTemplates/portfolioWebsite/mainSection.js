import React from "react";
import styled from "styled-components";

const SectionTitles = styled.div`
    font-size: 11pt;
    color: #7D7D7D;
    font-family: system-ui;
    margin-top: 80px;
`;
const Slogan = styled.div`
    font-size: 25pt;
    font-family: system-ui;
    font-style: italic;
    color: black;
`;
const SloganPortfolio = () => {
  return (
    <>
      <div className="container text-center">
        <SectionTitles className="text-uppercase mb-2">
            Welcome
        </SectionTitles>
        <Slogan>
            "Capture the moments, freeze the emotions."
        </Slogan>
      </div>
    </>
  );
};

const MainSection = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="portfolio-main-pic"></div>
      </div>
      <SloganPortfolio/>
    </>
  );
};

export default MainSection;
