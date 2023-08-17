import React from "react";
import { Button } from "reactstrap";
const Experience = () => {
  return (
    <>
      <div className="container-fluid experience-margin">
        <div className="row">
          <div className="experience-padding col-xl-6 pb-lg-5">
            <div>
              <div className="experience-font pb-5">Experience.</div>
            </div>
            <div className="border-start border-dark border-2 ps-4 pt-4 pb-4">
              <p className="fs-5">
                I have diverse experiences that have shaped my skills and
                expertise. As a freelance web developer, I've enjoyed the
                flexibility to work remotely, collaborate with clients from
                different parts of the world, and create impactful online
                experiences. Additionally, My internship with Compufix provided me with a
                diverse range of opportunities to enhance my technical skills
                and expand my knowledge in the field. 
              </p>
              <p className="fs-5">
                Please don't hesitate to contact me for any business inquiries
                or other questions you may have.
              </p>
              <div>
                <Button href="#Contact" className="experience-button">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>

          <div className="col-xl-6 mt-5 align-self-center all-content">
            <div className="row mb-md-4">
              <div className="col-md-6 d-flex flex-nowrap mb-3">
                <div className="">
                  <i className="experience-logo bi bi-code-slash" />
                </div>
                <div className="px-3">
                  <div className="fs-5 experience-icons-font fw-bold">Web Developer, Freelance</div>
                </div>
              </div>

              <div className="col-md-6 d-flex flex-nowrap mb-3">
                <div className="">
                  <i className="experience-logo bi bi-laptop" />
                </div>
                <div className="px-3">
                  <div className="fs-5 experience-icons-font fw-bold">IT Specialist, Co-op</div>
                  
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 d-flex flex-nowrap mb-3">
                <div className="">
                  <i className="experience-logo bi bi-cup-straw" />
                </div>
                <div className="px-3">
                  <div className="fs-5 experience-icons-font fw-bold">
                    Busser, The Keg Steakhouse + Bar
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex flex-nowrap mb-3">
                <div className="">
                  <i className="experience-logo bi bi-motherboard" />
                </div>
                <div className="px-3">
                  <div className="fs-5 experience-icons-font fw-bold">Full Stack, Internship</div>
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
