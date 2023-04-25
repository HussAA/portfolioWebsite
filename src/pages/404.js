import * as React from "react";




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
