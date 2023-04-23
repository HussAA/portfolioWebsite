import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="text-center">
          <div
            className="p-3"
            style={{
              backgroundColor: "rgb(3, 21, 46)",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              alignContent:"middle"
            }}
          >
            <div className="right-border" style={{ color: "white", fontSize: 17 }}>
              Hussain Alnakhli © {new Date().getFullYear()}
            </div>
            
            <div style={{ marginLeft: "10px" }}>
              <a
                target="_blank"
                className="footer-socials"
                href="mailto:mah.hussaina@gmail.com"
                rel="noreferrer"
              >
                <i className="bi bi-envelope-plus" />
              </a>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <a
                target="_blank"
                className="footer-socials"
                rel="noreferrer"
                href="https://github.com/HussAA"
              >
                <i className="bi bi-github" />
              </a>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <a
                target="_blank"
                className="footer-socials"
                rel="noreferrer"
                href="/"
              >
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
