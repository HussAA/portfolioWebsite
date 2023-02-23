import React, { useState } from "react";
import Logo from "../../assets/images/Logo.png";
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
        <Navbar
          id="hideNav"
          className="navbar navbar-expand-lg navbar-dark bg-dark shadow"
        >
          <NavbarBrand href="/">
            <img className="Navlogo" src={Logo} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse id="toggler" isOpen={isOpen} navbar>
            <Nav className="text-center me-auto" navbar>
              <NavItem>
                <NavLink id="navitem" href="/About/">
                  About Me
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink id="navitem" href="/Projects/">
                  Projects
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink id="navitem" href="/Experience/">
                  Experience
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink id="navitem" href="/Education/">
                  Education
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink id="navitem" href="/Contact/">
                  Contact Me
                </NavLink>
              </NavItem>
            </Nav>
            <div>
              <div>
                <a target="_blank" id="social" href="mailto:mah.hussaina@gmail.com">
                  <i className="bi bi-envelope" />
                </a>
              </div>
              <div>
                <a target="_blank" id="social" href="https://github.com/HussAA">
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
