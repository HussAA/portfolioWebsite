import React, { useState } from "react";
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
        <Navbar id="hideNav" className="navbar navbar-dark bg-dark">
          <NavbarBrand className="fs-3" href="/">Hussain <br/> Alnakhli</NavbarBrand>
          <NavbarToggler  onClick={toggle}/>
          <Collapse id="toggler" isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">About Me</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">Projects</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">Experience</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">Education</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">Contact Me</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarIndex;
