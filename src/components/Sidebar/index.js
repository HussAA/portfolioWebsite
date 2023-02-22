import * as React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="firstname">
            Hussain
        </div>
        <div className="lastname">
            Alnakhli
        </div>
        <div>
          <a href="#" className="link">
            <i className="bi bi-person-fill">
              <br />
              <span>About Me</span>
            </i>
          </a>

          <a href="#">
            <i></i>
          </a>

          <a href="#">
            <i></i>
          </a>

          <a href="#">
            <i></i>
          </a>

          <a href="#">
            <i></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
