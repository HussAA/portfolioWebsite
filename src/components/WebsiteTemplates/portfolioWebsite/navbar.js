import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "hamburger-react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const ContactButton = styled.button`
  padding: 8px 30px 8px 30px;
  color: #e3e3e3;
  font-size: 19px;
  border: 0;
  background-color: #0f100f;
  transition: 0.2s;
  &:hover {
    background-color: #333333;
  }
  @media screen {
    font-size: 15px;
  }
`;
const ContactLink = styled(NavLink)`
  padding: 3px 20px 3px 20px;
  color: white;
  font-size: 16px;
  background-color: #0f100f;
  transition: 0.2s;
  width: fit-content;
  margin-top: 5px;
  &:hover {
    background-color: #333333;
    color: white;
  }
`;
const UnderBar = styled.nav`
  background-color: #ffffff;
  width: 100%;
  height: 65px;
  /* box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.17); */
`;

const NavbarPortfolioIndex = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar className="navbar navbar-expand-md bar">
        {/* Navbar Brand mobile mode */}
        <NavbarBrand className="offset-fullname d-md-none text-uppercase">
          John Doe
        </NavbarBrand>
        {/* Socials web mode */}
        <div className="col-md-2 d-none d-md-block">
          <div className="d-inline-flex">
            <div className="social-div">
              <a
                target="_blank"
                className="navbar-socials"
                rel="noreferrer"
                href="https://github.com/HussAA"
              >
                <i className="bi bi-facebook" />
              </a>
            </div>
            <div className="social-div">
              <a
                target="_blank"
                className="navbar-socials"
                rel="noreferrer"
                href="/"
              >
                <i className="bi bi-linkedin" />
              </a>
            </div>
            <div className="social-div">
              <a
                target="_blank"
                className="navbar-socials"
                rel="noreferrer"
                href="/"
              >
                <i className="bi bi-instagram" />
              </a>
            </div>
          </div>
        </div>
        {/* Navbar Brand web mode */}
        <NavbarBrand className="offset-fullname d-none d-md-block text-uppercase">
        John Doe
        </NavbarBrand>
        {/* Socials web mode */}
        <ContactButton className="order-md-3 d-none d-md-block text-uppercase">
          Contact Me
        </ContactButton>
        {/* Socials mobile mode */}
        <div className="d-md-none d-inline-flex align-items-center">
          <div className="d-inline-flex me-2">
            <div className="social-div">
              <a
                target="_blank"
                className="navbar-socials"
                rel="noreferrer"
                href="https://github.com/HussAA"
              >
                <i className="bi bi-facebook" />
              </a>
            </div>
            <div className="social-div">
              <a
                target="_blank"
                className="navbar-socials"
                rel="noreferrer"
                href="/"
              >
                <i className="bi bi-linkedin" />
              </a>
            </div>
            <div className="social-div">
              <a
                target="_blank"
                className="navbar-socials"
                rel="noreferrer"
                href="/"
              >
                <i className="bi bi-instagram" />
              </a>
            </div>
          </div>
          {/* toggler mobile mode */}
          <Hamburger distance="lg" size={25} toggled={isOpen} toggle={setIsOpen} rounded />
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-4 mt-5 mb-3 d-md-none toggler-order" navbar>
            <NavItem className="navItem">
              <NavLink className="navLink text-uppercase" href="#Welcome">
                About Me
              </NavLink>
            </NavItem>

            <NavItem className="navItem">
              <NavLink className="navLink text-uppercase" href="#Services">
                Services
              </NavLink>
            </NavItem>

            <NavItem className="navItem">
              <NavLink className="navLink text-uppercase" href="#Experience">
                Experience
              </NavLink>
            </NavItem>

            <NavItem className="navItem">
              <NavLink className="navLink text-uppercase" href="#Education">
                Education
              </NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink className="navLink text-uppercase" href="#Gallery">
                Gallery
              </NavLink>
            </NavItem>
            <NavItem className="navItem">
              <ContactLink
                className="navLink text-uppercase text-nowrap"
                href="#Contact"
              >
                Contact Me
              </ContactLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      {/* Under Navbar web mode */}
      <UnderBar className="d-none d-md-block">
        <Nav className="d-flex flex-row justify-content-center fs-5" navbar>
          <NavItem>
            <NavLink className="underbarItem text-uppercase" href="#Welcome">
              About Me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="underbarItem text-uppercase" href="/">
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="underbarItem text-uppercase" href="/">
              Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="underbarItem text-uppercase" href="/">
              Gallery
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="underbarItem text-uppercase" href="/">
              Education
            </NavLink>
          </NavItem>
        </Nav>
      </UnderBar>
    </>
  );
};

export default NavbarPortfolioIndex;

