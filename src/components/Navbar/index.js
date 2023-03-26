import React, { useState } from "react";
import Logo from "../../assets/images/Logo2.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavbarIndex = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div>
        <Navbar id="hideNav" className="navbar navbar-expand-lg navbar-dark">
          <NavbarBrand href="/">
            <img alt="Logo" className="Navlogo" src={Logo} />
          </NavbarBrand>

          <NavbarToggler className="border-0" onClick={toggle} />

          <Collapse id="toggler" isOpen={isOpen} navbar>
            <Nav className="text-center me-auto mx-5" navbar>
              <NavItem>
                <NavLink id="navitem" href="#About">
                  About Me
                </NavLink>
              </NavItem>
              <hr className="navbar-expand-lg line m-auto w-50 mb-0 mt-0" />
              <NavItem>
                <NavLink id="navitem" href="/Experience/">
                Experience
                </NavLink>
              </NavItem>
              <hr className="line m-auto w-50 mb-0 mt-0" />
              <NavItem>
                <NavLink id="navitem" href="/Projects/">
                Projects
                </NavLink>
              </NavItem>
              <hr className="line m-auto w-50 mb-0 mt-0" />
              <NavItem>
                <NavLink id="navitem" href="/Education/">
                  Education
                </NavLink>
              </NavItem>
              <hr className="line m-auto w-50 mb-0 mt-0" />
              <NavItem>
                <NavLink id="navitem" href="/Contact/">
                  Contact Me
                </NavLink>
              </NavItem>
            </Nav>
            <div>
              <div>
                <a
                  target="_blank"
                  id="social"
                  href="mailto:mah.hussaina@gmail.com"
                  rel="noreferrer"
                >
                  <i className="bi bi-envelope-plus" />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  id="social"
                  rel="noreferrer"
                  href="https://github.com/HussAA"
                >
                  <i className="bi bi-github" />
                </a>
              </div>
            </div>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarIndex;
