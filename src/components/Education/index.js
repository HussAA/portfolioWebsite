import React from "react";
import classNames from "classnames";

const Education = () => {
  const [slide, setSlide] = React.useState(true);
  const [secSlide, setSecSlide] = React.useState(false);
  const [thirdSlide, setThirdSlide] = React.useState(false);
  return (
    <>
      <div className="container-fluid education-margin">
        <div className="row">
          <div className="education-padding">
            <div>
              <div className="education-title-font pb-5">Education.</div>
            </div>
            <div className="edu-border ps-3 pt-4 pb-4">
              <div className="edu-min-height">
                <span className={classNames({
                    "fade-in": slide,
                  })}>
                  {slide && (
                    <p className="fs-5 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <br />
                      <br />
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  )}
                </span>
                <span
                  className={classNames({
                    "fade-in": secSlide,
                  })}
                >
                  {secSlide && (
                    <p className="fs-5 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  )}
                </span>
                <span className={classNames({
                    "fade-in": thirdSlide,
                  })}>
                  {thirdSlide && (
                    <p className="fs-5 text-white">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat.
                      <br />
                      <br />
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  )}
                </span>
              </div>
              <div className="">
                <button
                  onClick={() =>
                    setSlide(true) | setSecSlide(false) | setThirdSlide(false)
                  }
                  className={classNames("edu-button", {
                    "first-button": slide,
                  })}
                ></button>

                <button
                  onClick={() =>
                    setSecSlide(true) | setSlide(false) | setThirdSlide(false)
                  }
                  className="edu-button"
                ></button>
                <button
                  onClick={() =>
                    setThirdSlide(true) | setSlide(false) | setSecSlide(false)
                  }
                  className="edu-button"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
