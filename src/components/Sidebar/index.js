import * as React from "react";
import Logo2 from "../../assets/images/Logo2.png";
const Sidebar = () => {
  return (
    <>
      <div id="hideside" className="sidebar">
        <div>
          <a href="/">
            <img alt="Logo" className="Sidelogo" src={Logo2} />
          </a>
        </div>
        <div>
          <a href="/About/" className="item link mb-5">
            <i className="bi bi-person-fill">
              <br />
              <span>About Me</span>
            </i>
          </a>
          <hr className="line w-100 mb-5" />
          <a href="/Projects/" className="item link mb-5">
            <i className="bi bi-stack">
              <br />
              <span>Projects</span>
            </i>
          </a>
          <hr className="line w-100 mb-5" />
          <a href="/Experience/" className="item link mb-5">
            <i className="bi bi-lightbulb-fill">
              <br />
              <span>Experience</span>
            </i>
          </a>
          <hr className="line w-100 mb-5" />
          <a href="/Eductaion/" className="item link mb-5">
            <i className="bi bi-building-fill">
              <br />
              <span>Education</span>
            </i>
          </a>
          <hr className="line w-100 mb-5" />
          <a href="/Contact/" className="item link mb-5">
            <i className="bi bi-envelope-plus">
              <br />
              <span>Contact Me</span>
            </i>
          </a>
          <hr className="line w-100" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
