import React from "react";
import NavbarPortfolioIndex from "./navbar";
import MainSection from "./mainSection";
import PortfolioAboutMe from "./Aboutme";
import PortfolioServices from "./Services";
import { styled } from "styled-components";



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
        <section style={{marginBottom: "150px"}}>
          <PortfolioAboutMe />
        </section>
        <div style={{marginBottom:"300px"}}>
          <PortfolioServices/>
        </div>
      </body>
      <footer></footer>
    </>
  );
};

export default PortfolioTemp;
