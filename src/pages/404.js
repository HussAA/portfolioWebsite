import * as React from "react";
import { Link } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <>
      <div class="message-box text-center position-absolute top-50 start-50 translate-middle">
        <h1 id="hidden-overflow">404</h1>
        <p id="hidden-overflow">Page not found</p>
        <div class="buttons-con">
          <div class="overflow-hidden action-link-wrap">
            <a href="/" class="link-button">
              Go to Home Page
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
