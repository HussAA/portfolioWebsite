import React from "react";
import { Button } from "reactstrap";
const Experience = () => {
  return (
    <>
      <div className="container-fluid experince-margin">
        <div className="row">
          <div className="experince-padding col-xl-6 pb-5">
            <div>
              <h3 className="experince-font pb-5">Experience.</h3>
            </div>
            <div className="border-start border-dark border-2 ps-3 pt-4 pb-4">
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
                <Button className="experince-button">Contact Me</Button>
              </div>
            </div>
          </div>

          <div className="col-xl-6 mt-5 align-self-center all-content">
            <div className="row">
              <div className="col-md-6 d-flex flex-nowrap mb-5 ">
                <div className="">
                  <i className="experince-logo bi bi-buildings" />
                </div>
                <div className="px-3">
                  <h5>Web developer, Freelance</h5>
                  <p>incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>

              <div className="col-md-6 d-flex flex-nowrap">
                <div className="">
                  <i className="experince-logo bi bi-buildings" />
                </div>
                <div className="px-3">
                  <h5>Web developer, Freelance</h5>
                  <p>incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 d-flex flex-nowrap">
                <div className="">
                  <i className="experince-logo bi bi-buildings" />
                </div>
                <div className="px-3">
                  <h5>Web developer, Freelance</h5>
                  <p>incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="col-md-6 d-flex flex-nowrap">
                <div className="">
                  <i className="experince-logo bi bi-buildings" />
                </div>
                <div className="px-3">
                  <h5>Web developer, Freelance</h5>
                  <p>incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
