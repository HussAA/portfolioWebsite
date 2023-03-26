import * as React from "react";
import {Button} from 'reactstrap'
const AboutMe = () => {
  return (
    <>
      <div className="container margin-content">
        <div className="row">
          <div className="col-6 mb-5">
            <h3>About Me.</h3>
          </div>
        </div>
        <div className="row border-start border-dark p-3 pb-4 pt-4">
          <div className="col">
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
          </div>
          <div>
            <Button className="about-button">Contact Me</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
