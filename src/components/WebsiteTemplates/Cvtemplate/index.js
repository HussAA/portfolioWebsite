import React from "react";
import CvFooter from "./Cvfooter";
import LeftColumn from "./leftColumn";
import RightColumn from "./rightColumn";
const CvTemplate = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row p-4">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
      <div className="">
        <CvFooter />
      </div>
    </>
  );
};

export default CvTemplate;
