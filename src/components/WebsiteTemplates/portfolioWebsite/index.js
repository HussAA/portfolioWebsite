import React from "react";
import NavbarPortfolioIndex from "./navbar";
import MainSection from "./mainSection";

const PortfolioTemp = () => {
  return (
    <>
      <body>
        <header>
          <NavbarPortfolioIndex />
        </header>

        <section style={{ minHeight: "1000px" }}>
          <MainSection />
        </section>
        <footer></footer>
      </body>
    </>
  );
};

export default PortfolioTemp;
