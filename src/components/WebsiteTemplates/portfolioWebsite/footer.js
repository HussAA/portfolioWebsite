import React from "react";
import { styled } from "styled-components";

const MyportfolioLink = styled.a`
  text-decoration: none;
`;
const PortfolioFooter = () => {
  return (
    <>
      <footer className="col">
        <div
          className="footer-bg p-2"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "middle",
          }}
        >
          <div className="right-border-cv-footer text-center">
            Built by
            <span>
              <MyportfolioLink href="/"> Hussain Alnakhli</MyportfolioLink>
            </span>
            © {new Date().getFullYear()}
          </div>

          <div style={{ marginLeft: "10px" }}>
            <a
              // target="_blank"
              className="footer-socials-cv-footer"
              href="/"
              // rel="noreferrer"
            >
              <i className="bi bi-envelope-plus-fill" />
            </a>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <a
              // target="_blank"
              className="footer-socials-cv-footer"
              href="/"
              // rel="noreferrer"
            >
              <i className="bi bi-facebook" />
            </a>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <a
              // target="_blank"
              className="footer-socials-cv-footer"
              href="/"
              // rel="noreferrer"
            >
              <i className="bi bi-instagram" />
            </a>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <a
              // target="_blank"
              className="footer-socials-cv-footer"
              href="/"
              // rel="noreferrer"
            >
              <i className="bi bi-twitter" />
            </a>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <a
              // target="_blank"
              className="footer-socials-cv-footer"
              // rel="noreferrer"
              href="/"
            >
              <i className="bi bi-github" />
            </a>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <a
              // target="_blank"
              className="footer-socials-cv-footer"
              // rel="noreferrer"
              href="/"
            >
              <i className="bi bi-youtube" />
            </a>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <a
              // target="_blank"
              className="footer-socials-cv-footer"
              // rel="noreferrer"
              href="/"
            >
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PortfolioFooter;
