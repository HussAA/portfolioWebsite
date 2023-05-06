import React from "react";

const Projects = () => {
  return (
    <>
      <div className="container-fluid project-margin">
        <div className="row text-center">
          <div className="col">
            <div className="project-font">Projects.</div>
            <p style={{ color: "#787878" }}>
              Explore my portfolio of dynamic and responsive websites that
              prioritize user experience.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <a
              href="https://funny-smakager-17640b.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-link-rm"
            >
              <div className="project-card">
                <div className="row">
                  <div className="col">
                    <i className="project-logo bi bi-car-front" />
                  </div>
                </div>
                <div className="row project-height-title">
                  <div className="col">
                    <div className="project-card-title">
                      Limestone Car Detailing
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="project-p">
                      Limestone Car Detailing is a professional car detailing
                      service that provides exceptional cleaning and detailing
                      services for vehicles of all types.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-sm-6">
            <a
              href="https://www.limestonecardetailing.com"
              target="_blank"
              rel="noreferrer"
              className="project-link-rm"
            >
              <div className="project-card">
                <div className="row">
                  <div className="col">
                    <i className="project-logo bi bi-car-front-fill" />
                  </div>
                </div>
                <div className="row project-height-title">
                  <div className="col">
                    <div className="project-card-title">
                      Limestone Car Detailing V2
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="project-p">
                      Limestone Car Detailing V2 is an updated version that
                      features a custom layout provided by the client, offering
                      a modern design, improved user experience, and additional
                      features.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-sm-6" id="template-href">
            <a
              href="/CV-Template"
              target="_blank"
              rel="noreferrer"
              className="project-link-rm"
            >
              <div className="project-card">
                <div className="row">
                  <div className="col">
                    <i className="project-logo bi bi-card-list" />
                  </div>
                </div>
                <div className="row project-height-title">
                  <div className="col">
                    <div className="project-card-title">CV/Resume Template</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="project-p">
                      I created this template to provide a professional and
                      visually appealing CV/resume template that can help job
                      seekers to stand out from the crowd and showcase their
                      skills and experience.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-sm-6" id="template-href">
            <div className="project-card">
              <div className="row">
                <div className="col">
                  <i className="project-logo bi bi-file-earmark-person-fill" />
                </div>
              </div>
              <div className="row project-height-title">
                <div className="col">
                  <div className="project-card-title">
                    Portfolio Website Template
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="project-p">
                    This portfolio website template was created to highlight my
                    skills as a web developer and provide clients with a useful
                    layout that can be used for job applications or other
                    business purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
