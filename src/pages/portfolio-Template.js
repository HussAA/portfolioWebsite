import React from "react";
import PortfolioTemp from "../components/WebsiteTemplates/portfolioWebsite";
import ComingSoon from "../components/ComingSoon";
const PortfolioTemplate = () => {
  return (
    <>
      <section>
        <ComingSoon text="In Development" className="coming-soon-body" />
      </section>
      <PortfolioTemp />
    </>
  );
};

export default PortfolioTemplate;
export const Head = () => <title>Portfolio Template</title>;
