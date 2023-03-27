import * as React from "react";
import { Button } from "reactstrap";
const AboutMe = () => {
  return (
    <>
      <div className="container-full margin-content">
        <div className="row">
          <div className="about-padding col-xl-6 pb-5 border-start border-dark">
            <div>
              <h3 className="about-font pb-5">About Me.</h3>
            </div>
            <p className="fs-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="fs-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <div>
              <Button className="about-button">Contact Me</Button>
            </div>
          </div>
          <div className="laptop-pic col-xl-6"></div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
