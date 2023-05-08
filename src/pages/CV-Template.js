import React from "react";
import CvTemplate from "../components/WebsiteTemplates/Cvtemplate";
const CVTemplate = () => {
  return (
    <>
      <section className="cv-template-background">
        <CvTemplate />
      </section>
    </>
  );
};

export default CVTemplate;
export const Head = () => <title>CV/Resume Template</title>