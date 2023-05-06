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
                <span
                  className={classNames({
                    "fade-in": slide,
                  })}
                >
                  {slide && (
                    <p className="fs-5 text-white">
                      I completed the{" "}
                      <span className="fw-bold">
                        Computer Systems Technician
                      </span>{" "}
                      program at
                      <span className="fw-bold">
                        {" "}
                        St. Lawrence College,
                      </span>{" "}
                      equipping me with a strong foundation in troubleshooting
                      and maintaining computer systems. The program provided me
                      with hands-on experience in hardware and software
                      installation, network configuration, and system
                      administration.
                      <br />
                      <br />
                      Through practical projects and coursework, I gained the
                      skills necessary to effectively address technical issues
                      and support computer systems in a professional
                      environment.
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
                      I've begun on my web development journey by enrolling in
                      online courses from various websites. These courses have
                      greatly aided my understanding of the fundamental tools
                      for building interactive web applications, namely
                      <span className="fw-bold">
                        {" "}
                        HTML, CSS, JavaScript, and ReactJS.
                      </span>
                      <br />
                      <br /> Currently, I am getting into backend development to
                      expand my knowledge and build more full-stack websites
                      like this one.
                    </p>
                  )}
                </span>
                <span
                  className={classNames({
                    "fade-in": thirdSlide,
                  })}
                >
                  {thirdSlide && (
                    <p className="fs-5 text-white">
                      I graduated from{" "}
                      <span className="fw-bold">
                        KCVI with a high school diploma.</span> During my high school years at KCVI, I enrolled in a
                      programming course which I struggled to comprehend
                      initially due to the language barrier of English. However,
                      my passion for web development grew exponentially.
                      <br />
                      <br />I began coding in JavaScript and discovered React,
                      which sparked my deep love and passion for web
                      development.
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
                  className={classNames("edu-button", {
                    "second-button": secSlide,
                  })}
                ></button>
                <button
                  onClick={() =>
                    setThirdSlide(true) | setSlide(false) | setSecSlide(false)
                  }
                  className={classNames("edu-button", {
                    "third-button": thirdSlide,
                  })}
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
