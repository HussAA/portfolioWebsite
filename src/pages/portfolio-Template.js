import React from "react";
import PortfolioTemp from "../components/WebsiteTemplates/portfolioWebsite";
import ComingSoon from "../components/ComingSoon";


const PortfolioTemplate = () => {
  return (
    <>
      <section>
        <ComingSoon text="In Development" className="coming-soon-body" />
      </section>
  
      <section>
        <PortfolioTemp />
      </section>

      
    </>
  );
};

export default PortfolioTemplate;
export const Head = () => <title>Portfolio Template</title>;
