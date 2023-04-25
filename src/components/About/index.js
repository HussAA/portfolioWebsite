import * as React from "react";
import { Button } from "reactstrap";
const AboutMe = () => {
  return (
    <>
      <div className="container-fluid margin-content">
        <div className="row">
          <div className="about-padding col-xl-6 pb-5">
            <div>
              <div className="about-font pb-5">About.</div>
            </div>
            <div className="border-start border-dark border-2 ps-4 pt-4 pb-4">
              <p className="fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <p className="fs-5">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <div>
                <Button href="#Contact" className="about-button">Contact Me</Button>
              </div>
            </div>
          </div>
          <div className="laptop-pic col-xl-6"></div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
