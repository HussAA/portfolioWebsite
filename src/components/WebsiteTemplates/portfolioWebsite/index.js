import React from "react";
import NavbarPortfolioIndex from "./navbar";
import MainSection from "./mainSection";
import PortfolioAboutMe from "./Aboutme";
import PortfolioServices from "./Services";
import { styled } from "styled-components";
import Pricing from "./Pricing";
import PortfolioGallery from "./Gallery";

const ServiceSection = styled.div`
  background: #16192c;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const PricingSection = styled.section`
  background: #88bfb1;
  padding-top: 20px;
  padding-bottom: 50px;
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
        <section style={{ marginBottom: "100px" }}>
          <PortfolioAboutMe />
        </section>
        <ServiceSection>
          <PortfolioServices />
        </ServiceSection>

        <PricingSection style={{ marginBottom: "300px" }}>
          <Pricing />
        </PricingSection>
        <section>
          <PortfolioGallery />
        </section>
      </body>
      <footer></footer>
    </>
  );
};

export default PortfolioTemp;
