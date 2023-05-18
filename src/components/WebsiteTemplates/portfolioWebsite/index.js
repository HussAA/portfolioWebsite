import React from "react";
import NavbarPortfolioIndex from "./navbar";
import MainSection from "./mainSection";
import PortfolioAboutMe from "./Aboutme";
import PortfolioServices from "./Services";
import { styled } from "styled-components";
import Pricing from "./Pricing";

const PricingSection = styled.div`
  background: #AFB5DE;
  padding-top: 20px;
  padding-bottom: 50px;


`;
const SectionTitles = styled.div`
  font-size: 12pt;
  color: #4d4d4d;
  font-family: system-ui;
  margin-top: 150px;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    margin-top: 130px;
    margin-bottom: 20px;
  }
`;
const PortfolioTemp = () => {
  return (
    <>
      <body>
        <header>
          <NavbarPortfolioIndex />
        </header>

        <section>
          <MainSection />
        </section>
        <section style={{ marginBottom: "150px" }}>
          <PortfolioAboutMe />
        </section>
        <section>
          <PortfolioServices />
        </section>
        <SectionTitles id="Packages" className="text-center text-uppercase">
        packages
      </SectionTitles>
        <PricingSection style={{ marginBottom: "300px" }}>
          <Pricing />
        </PricingSection>
      </body>
      <footer></footer>
    </>
  );
};

export default PortfolioTemp;
