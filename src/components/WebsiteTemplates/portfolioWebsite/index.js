import React from "react";
import NavbarPortfolioIndex from "./navbar";
import MainSection from "./mainSection";
import PortfolioAboutMe from "./Aboutme";
import { styled } from "styled-components";

const MainImageSection = styled.section`
  min-height: 1000px;

  @media screen and (max-width:991px){
    min-height: 680px !important;
  }
  @media screen and (max-width:767px){
    min-height: 550px !important;
  }
    
  
`;

const PortfolioTemp = () => {
  return (
    <>
      <body>
        <header>
          <NavbarPortfolioIndex />
        </header>

        <MainImageSection style={{ minHeight: "800px"}}>
          <MainSection />
        </MainImageSection>
        <section style={{ minHeight: "1000px" }}>
          <PortfolioAboutMe />
        </section>
        <footer></footer>
      </body>
    </>
  );
};

export default PortfolioTemp;
