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
                I created this portfolio website to showcase my work and
                demonstrate the range of skills and services that I offer as a
                web developer. Having gained experience as a self-taught web
                developer through creating websites for various businesses, my
                focus is always on delivering high-quality work that meets and
                exceeds client expectations.
              </p>
              <p className="fs-5">
                Please don't hesitate to contact me for any business inquiries
                or other questions you may have.
              </p>
              <div>
                <Button href="#Contact" className="about-button">
                  Contact Me
                </Button>
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
