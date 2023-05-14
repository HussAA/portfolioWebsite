import React from "react";

const CvFooter = () => {
  return (
    <footer className="col">
      <div
        className="cv-footer-color p-4"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "middle",
        }}
      >
        <div
          className="right-border-cv-footer"
          style={{ color: "black", fontSize: 20 }}
        >
          Built by Hussain Alnakhli © {new Date().getFullYear()}
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
  );
};

export default CvFooter;
