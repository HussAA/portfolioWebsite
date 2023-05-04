import React from "react";

const RightColumn = () => {
  return (
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
                    <div className="col fs-4">[Job Title] / [Company Name]</div>
                  </div>
                  <div className="row mb-2 ms-1 fs-5">
                    <div className="col orange-color">
                      <i className="bi bi-calendar3 me-3" />
                      [Employment Dates]
                    </div>
                  </div>
                  <div className="row mb-2 ms-1 fs-6">
                    <div className="col">
                      [Job Description] Lorem ipsum dolor sit amet.
                      magnam consectetur vel in deserunt aspernatur est
                      reprehenderit sunt hic.
                    </div>
                  </div>
                </div>
              </div>
              {/* Second Experience Block */}
              <div className="row ms-1 mb-5">
                <div className="col">
                  <div className="row mb-2">
                    <div className="col fs-4">[Job Title] / [Company Name]</div>
                  </div>
                  <div className="row mb-2 ms-1 fs-5">
                    <div className="col orange-color">
                      <i className="bi bi-calendar3 me-3" />
                      [Employment Dates]
                    </div>
                  </div>
                  <div className="row mb-2 ms-1 fs-6">
                    <div className="col">
                      [Job Description] Lorem ipsum dolor sit amet.
                      magnam consectetur vel in deserunt aspernatur est
                      reprehenderit sunt hic.
                    </div>
                  </div>
                </div>
              </div>
              {/* Third Experience Block */}
              <div className="row ms-1 mb-5">
                <div className="col">
                  <div className="row mb-2">
                    <div className="col fs-4">[Job Title] / [Company Name]</div>
                  </div>
                  <div className="row mb-2 ms-1 fs-5">
                    <div className="col orange-color">
                      <i className="bi bi-calendar3 me-3" />
                      [Employment Dates]
                    </div>
                  </div>
                  <div className="row mb-2 ms-1 fs-6">
                    <div className="col">
                      [Job Description] Lorem ipsum dolor sit amet.
                      magnam consectetur vel in deserunt aspernatur est
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
                    <div className="col fs-4">[Degree Name]</div>
                  </div>
                  <div className="row mb-2 ms-1 fs-5">
                    <div className="col orange-color">
                      <i className="bi bi-calendar3 me-3" />
                      [Education Date]
                    </div>
                  </div>
                  <div className="row mb-2 ms-1 fs-6">
                    <div className="col">[institution name]</div>
                  </div>
                </div>
              </div>
              {/* Second Education Block */}
              <div className="row ms-1 mb-5">
                <div className="col">
                  <div className="row mb-2">
                    <div className="col fs-4">[Degree Name]</div>
                  </div>
                  <div className="row mb-2 ms-1 fs-5">
                    <div className="col orange-color">
                      <i className="bi bi-calendar3 me-3" />
                      [Education Date]
                    </div>
                  </div>
                  <div className="row mb-2 ms-1 fs-6">
                    <div className="col">[institution name]</div>
                  </div>
                </div>
              </div>
              {/* Third Education Block */}
              <div className="row ms-1 mb-5">
                <div className="col">
                  <div className="row mb-2">
                    <div className="col fs-4">[Degree Name]</div>
                  </div>
                  <div className="row mb-2 ms-1 fs-5">
                    <div className="col orange-color">
                      <i className="bi bi-calendar3 me-3" />
                      [Education Date]
                    </div>
                  </div>
                  <div className="row mb-2 ms-1 fs-6">
                    <div className="col">[institution name]</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
