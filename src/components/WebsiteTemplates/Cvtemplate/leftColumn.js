import React from "react";

const LeftColumn = () => {
  return (
    <div className="col-md-4 left-column-cv shadow-cvTemplate column-background cv-template-icon">
      <div className="row">
        <div className="col">
          {/* Avatar Column */}
          <div className="row">
            <div className="col avatar">
              <div className="avatar-name">[Full Name]</div>
            </div>
          </div>
          {/* Social Column */}
          <div className="row mb-4 mt-3">
            <div className="col">
              <div className="row mb-2">
                <div className="col leftCol-font-item">
                  <i className="bi bi-briefcase me-3" />
                  [Job Title]
                </div>
              </div>
              <div className="row mb-2">
                <div className="col leftCol-font-item">
                  <i className="col bi bi-house-door me-3" />
                  [Address]
                </div>
              </div>
              <div className="row mb-2">
                <div className="col leftCol-font-item">
                  <i className="col bi bi-envelope me-3" />
                  [Email Address]
                </div>
              </div>
              <div className="row">
                <div className="col leftCol-font-item">
                  <i className="col bi bi-telephone me-3" />
                  [Phone Number]
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
                <div className="col leftCol-font-item">[skill]</div>
              </div>
              <div className="row mb-2">
                <div className="col skill-bar-full-90">
                  <div className="skill-bar-90">90%</div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col leftCol-font-item">[skill]</div>
              </div>
              <div className="row mb-2">
                <div className="col skill-bar-full-70">
                  <div className="skill-bar-70">70%</div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col leftCol-font-item">[skill]</div>
              </div>
              <div className="row mb-2">
                <div className="col skill-bar-full-25">
                  <div className="skill-bar-25">25%</div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col leftCol-font-item">[skill]</div>
              </div>
              <div className="row mb-2">
                <div className="col skill-bar-full-45">
                  <div className="skill-bar-45">45%</div>
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
                <div className="col skill-bar-full-80">
                  <div className="skill-bar-80">80%</div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col leftCol-font-item">Arabic</div>
              </div>
              <div className="row mb-2">
                <div className="col skill-bar-full-45">
                  <div className="skill-bar-45">45%</div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col leftCol-font-item">Spanish</div>
              </div>
              <div className="row mb-2">
                <div className="col skill-bar-full-70">
                  <div className="skill-bar-70">70%</div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col leftCol-font-item">French</div>
              </div>
              <div className="row mb-2">
                <div className="col skill-bar-full-25">
                  <div className="skill-bar-25">25%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
