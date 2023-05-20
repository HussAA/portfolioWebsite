import React from "react";
import PortfolioTemp from "../components/WebsiteTemplates/portfolioWebsite";
import ComingSoon from "../components/ComingSoon";
import ScrollArrow from "../components/scrollButton/scrollButton"

const PortfolioTemplate = () => {
  return (
    <>
      <section>
        <ComingSoon text="In Development" className="coming-soon-body" />
      </section>
  
      <section>
        <PortfolioTemp />
      </section>
      <ScrollArrow/>
      
    </>
  );
};

export default PortfolioTemplate;
export const Head = () => <title>Portfolio Template</title>;
