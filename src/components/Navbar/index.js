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
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

const NavbarIndex = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div>
        <Navbar id="hideNav" className="navbar navbar-expand-lg navbar-dark main-navbar-bg fixed-top">
          <NavbarBrand href="/">
            <img alt="Logo" className="Navlogo" src={Logo} />
          </NavbarBrand>

          <NavbarToggler className="border-0" onClick={toggle} />

          <Collapse id="toggler" isOpen={isOpen} navbar>
            <Nav className="text-center mx-auto me-auto mx-5" navbar>
              <NavItem>
                <NavLink id="navitem" href="#About">
                  About
                </NavLink>
              </NavItem>
              <hr className="navbar-expand-lg line m-auto w-50 mb-0 mt-0" />
              <NavItem>
                <NavLink id="navitem" href="#Projects">
                  Projects
                </NavLink>
              </NavItem>
              <hr className="line m-auto w-50 mb-0 mt-0" />
              <NavItem>
                <NavLink id="navitem" href="#Experience">
                  Experience
                </NavLink>
              </NavItem>
              <hr className="line m-auto w-50 mb-0 mt-0" />
              <NavItem>
                <NavLink id="navitem" href="#Education">
                  Education
                </NavLink>
              </NavItem>

              <hr className="line m-auto w-50 mb-0 mt-0" />
              <NavItem>
                <NavLink id="navitem" href="#Contact">
                  Contact
                </NavLink>
              </NavItem>
              <hr className="line m-auto w-50 mb-0 mt-0" />
              <UncontrolledDropdown className="template-dropdown" nav inNavbar>
                <DropdownToggle className="template-item-title" nav caret>
                  Website Templates
                </DropdownToggle>
                <DropdownMenu className="dropdown-sm">
                  <DropdownItem
                    className="dropdown-item"
                    target="_blank"
                    href="/CV-Template"
                    rel="noreferrer"
                  >
                    CV Template
                  </DropdownItem>
                  <DropdownItem className="dropdown-item" href="/portfolio-Template">
                    Portfolio
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className="dropdown=item" href="#template-href">
                    Read more
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <div>
              <div>
                <a target="_blank" id="social" rel="noreferrer" href="https://www.linkedin.com/in/hussain-alnakhli-880739222/">
                  <i className="bi bi-linkedin" />
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
