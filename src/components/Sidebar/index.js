import * as React from "react";
import Logo2 from "../../assets/images/Logo2.png";
const Sidebar = () => {
  return (
    <>
      <div id="hideside" className="container sidebar">
        <div>
          <a href="/">
            <img alt="Sidebar Logo" className="Sidelogo" src={Logo2} />
          </a>
        </div>
        <div>
          <a href="#About" className="item link sidebar-height-m">
            <i className="bi bi-person-fill">
              <br />
              <span>About</span>
            </i>
          </a>
          <hr className="line w-100" />
          <a href="#Projects" className="item link sidebar-height-m">
            <i className="bi bi-lightbulb-fill">
              <br />
              <span>Projects</span>
            </i>
          </a>
          <hr className="line w-100" />
          <a href="#Experience" className="item link sidebar-height-m">
            <i className="bi bi-stack">
              <br />
              <span>Experience</span>
            </i>
          </a>
          <hr className="line w-100" />
          <a href="#Education" className="item link sidebar-height-m">
            <i className="bi bi-building-fill">
              <br />
              <span>Education</span>
            </i>
          </a>
          <hr className="line w-100" />
          <a href="#Contact" className="item link sidebar-height-m">
            <i className="bi bi-envelope-plus">
              <br />
              <span>Contact</span>
            </i>
          </a>
          <hr className="line w-100" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
