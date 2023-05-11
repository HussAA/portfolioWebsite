import React from "react";
import styled from "styled-components";

const PresentBg = styled.span`
  background-color: #8b5400;
  color: white;
  padding: 3px 7px 3px 7px;
  border-radius: 7px;
`;
const MyResume = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row p-4">
          {/* Left Column */}
          <div className="col-md-4 left-column-cv shadow-cvTemplate column-background cv-template-icon">
            <div className="row">
              <div className="col">
                {/* Avatar Column */}
                <div className="row">
                  <div className="col avatar">
                    <div className="avatar-name">Hussain Alnakhli</div>
                  </div>
                </div>
                {/* Social Column */}
                <div className="row mb-4 mt-3">
                  <div className="col">
                    <div className="row mb-2">
                      <div className="col leftCol-font-item">
                        <i className="bi bi-briefcase me-3" />
                        Web developer
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col leftCol-font-item">
                        <i className="col bi bi-house-door me-3" />
                        Kingston, ON
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col leftCol-font-item">
                        <i className="col bi bi-envelope me-3" />
                        mah.hussain@gmail.com
                      </div>
                    </div>
                    <div className="row">
                      <div className="col leftCol-font-item">
                        <i className="col bi bi-telephone me-3" />
                        6138932003
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line w-75 mx-auto mb-4" />
                {/* Skills */}
                <div className="row mb-4">
                  <div className="col">
                    <div className="row mb-4">
                      <div className="col fs-5">
                        <i className="col bi bi-asterisk me-3" />
                        Skills
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col leftCol-font-item">Javascript</div>
                    </div>
                    <div className="row mb-2">
                      <div className="col skill-bar-full">
                        <div className="skill-bar-75">75%</div>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col leftCol-font-item">HTML/CSS</div>
                    </div>
                    <div className="row mb-2">
                      <div className="col skill-bar-full">
                        <div className="skill-bar-90">90%</div>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col leftCol-font-item">NodeJS</div>
                    </div>
                    <div className="row mb-2">
                      <div className="col skill-bar-full">
                        <div className="skill-bar-25">25%</div>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col leftCol-font-item">ReactJS</div>
                    </div>
                    <div className="row mb-2">
                      <div className="col skill-bar-full">
                        <div className="skill-bar-65">65%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line w-75 mx-auto mb-4" />
                {/* Languages */}
                <div className="row mb-5">
                  <div className="col">
                    <div className="row">
                      <div className="col mb-4 fs-5">
                        <i className="col bi bi-globe-americas me-3" />
                        Languages
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col leftCol-font-item">English</div>
                    </div>
                    <div className="row mb-2">
                      <div className="col skill-bar-full">
                        <div className="skill-bar-80">80%</div>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col leftCol-font-item">Arabic</div>
                    </div>
                    <div className="row mb-2">
                      <div className="col skill-bar-full">
                        <div className="skill-bar-75">75%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Colmun */}
          <div className="col-md-7 column-background right-column-cv shadow-cvTemplate cv-template-icon">
            <div className="row">
              <div className="col">
                {/* Work Experience */}
                <div className="row mb-3">
                  <div className="col m-3">
                    {/* Title */}
                    <div className="row mb-5">
                      <div className="col fs-1">
                        <i className="bi bi-briefcase-fill me-3" />
                        Work Experience
                      </div>
                    </div>
                    {/* First Experience Block */}
                    <div className="row ms-1 mb-5">
                      <div className="col">
                        <div className="row mb-2">
                          <div className="col fs-4">
                            It specialist (Co-op) / CompuFix
                          </div>
                        </div>
                        <div className="row mb-2 ms-1 fs-5">
                          <div className="col orange-color">
                            <i className="bi bi-calendar3 me-3" />
                            May 2023 - Aug 2023
                          </div>
                        </div>
                        <div className="row mb-2 ms-1 fs-6">
                          <div className="col">
                            [Job Description] Lorem ipsum dolor sit amet. magnam
                            consectetur vel in deserunt aspernatur est
                            reprehenderit sunt hic.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Second Experience Block */}
                    <div className="row ms-1 mb-5">
                      <div className="col">
                        <div className="row mb-2">
                          <div className="col fs-4">
                            Web Developer / Freelance
                          </div>
                        </div>
                        <div className="row mb-2 ms-1 fs-5">
                          <div className="col orange-color">
                            <i className="bi bi-calendar3 me-3" />
                            Jan 2022 - <PresentBg>Present</PresentBg>
                          </div>
                        </div>
                        <div className="row mb-2 ms-1 fs-6">
                          <div className="col">
                            [Job Description] Lorem ipsum dolor sit amet. magnam
                            consectetur vel in deserunt aspernatur est
                            reprehenderit sunt hic.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Third Experience Block */}
                    <div className="row ms-1 mb-5">
                      <div className="col">
                        <div className="row mb-2">
                          <div className="col fs-4">
                            Busser / The Keg Steakhouse + Bar
                          </div>
                        </div>
                        <div className="row mb-2 ms-1 fs-5">
                          <div className="col orange-color">
                            <i className="bi bi-calendar3 me-3" />
                            Oct 2020 - Nov 2021
                          </div>
                        </div>
                        <div className="row mb-2 ms-1 fs-6">
                          <div className="col">
                            [Job Description] Lorem ipsum dolor sit amet. magnam
                            consectetur vel in deserunt aspernatur est
                            reprehenderit sunt hic.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="line w-75 mx-auto" />
                {/* Education */}
                <div className="row mb-3">
                  <div className="col m-3">
                    {/* Title */}
                    <div className="row mb-5">
                      <div className="col fs-1">
                        <i className="bi bi-buildings-fill me-3" />
                        Education
                      </div>
                    </div>
                    {/* First Education Block */}
                    <div className="row ms-1 mb-5">
                      <div className="col">
                        <div className="row mb-2">
                          <div className="col fs-4">
                            Computer Systems Technician Diploma
                          </div>
                        </div>
                        <div className="row mb-2 ms-1 fs-5">
                          <div className="col orange-color">
                            <i className="bi bi-calendar3 me-3" />
                            Sep 2021 - April 2023
                          </div>
                        </div>
                        <div className="row mb-2 ms-1 fs-6">
                          <div className="col fs-5">St. Lawrence College</div>
                        </div>
                      </div>
                    </div>
                    {/* Second Education Block */}
                    <div className="row ms-1 mb-5">
                      <div className="col">
                        <div className="row mb-2">
                          <div className="col fs-4">
                            REACTJS/JAVASCRIPT/HTML&CSS
                          </div>
                        </div>
                        <div className="row mb-2 ms-1 fs-5">
                          <div className="col orange-color">
                            <i className="bi bi-calendar3 me-3" />
                            Jan 2022 - <PresentBg>Present</PresentBg>
                          </div>
                        </div>
                        <div className="row mb-2 ms-1 fs-6">
                          <div className="col fs-5">Online Courses</div>
                        </div>
                      </div>
                    </div>
                    {/* Third Education Block */}
                    <div className="row ms-1 mb-5">
                      <div className="col">
                        <div className="row mb-2">
                          <div className="col fs-4">
                            Ontario Secondary School Diploma
                          </div>
                        </div>
                        <div className="row mb-2 ms-1 fs-5">
                          <div className="col orange-color">
                            <i className="bi bi-calendar3 me-3" />
                            Sep 2014 - Jun 2019
                          </div>
                        </div>
                        <div className="row mb-2 ms-1 fs-6">
                          <div className="col fs-5">
                            Kingston Collegiate and Vocational Institute
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <footer className="col">
          <div
            className="cv-footer-color p-4"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "middle",
            }}
          >
            <div
              className="right-border-cv-footer"
              style={{ color: "black", fontSize: 20 }}
            >
              Hussain Alnakhli © {new Date().getFullYear()}
            </div>

            <div style={{ marginLeft: "10px" }}>
              <a
                target="_blank"
                className="footer-socials-cv-footer"
                href="mailto:mah.hussaina@gmail.com"
                rel="noreferrer"
              >
                <i className="bi bi-envelope-plus-fill" />
              </a>
            </div>

            <div style={{ marginLeft: "10px" }}>
              <a
                target="_blank"
                className="footer-socials-cv-footer"
                rel="noreferrer"
                href="https://github.com/HussAA"
              >
                <i className="bi bi-github" />
              </a>
            </div>

            <div style={{ marginLeft: "10px" }}>
              <a
                target="_blank"
                className="footer-socials-cv-footer"
                rel="noreferrer"
                href="/"
              >
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MyResume;
