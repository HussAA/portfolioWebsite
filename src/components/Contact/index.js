import React from "react";
import { Form, Input, FormGroup, Button } from "reactstrap";
const Contact = () => {
  return (
    <>
      <div className="container-fluid contact-margin">
        <div className="row">
          <div className="contact-padding col-xl-6">
            <div>
              <h1 className="contact-title pb-5">Contact.</h1>
            </div>
            <div className="border-start border-dark border-2 ps-1 pt-4 pb-4">
              <form>
                <input name="name" placeholder="Name*" type="text" />

                <input name="email" placeholder="Email*" type="email" />
                <input name="subject" placeholder="Subject*" type="text" />
                <textarea name="question" placeholder="How can I help?*" type="text" rows="4" cols="50"/>
                <Button className="contact-button">Send Message</Button>
              </form>
            </div>
          </div>
          <div className="contact-pic col-xl-6"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
