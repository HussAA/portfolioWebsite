import React from "react";
import { Button } from "reactstrap";

const Contact = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleClick = () => {
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    console.log("the link was clicked");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  return (
    <>
      <div className="container-fluid contact-margin">
        <div className="row">
          <div className="contact-padding col-xl-6">
            <div>
              <h1 className="contact-title pb-5">Contact.</h1>
            </div>
            <div className="border-start border-dark border-2 pt-4 pb-4">
              <form>
                <input
                  onChange={handleChange}
                  value={form.name}
                  name="name"
                  placeholder="Name*"
                  type="text"
                />
                <input
                onChange={handleChange}
                  value={form.email}
                  name="email"
                  placeholder="Email*"
                  type="email"
                />
                <input
                  onChange={handleChange}
                  value={form.subject}
                  name="subject"
                  placeholder="Subject*"
                  type="text"
                />
                <textarea
                  onChange={handleChange}
                  value={form.message}
                  name="message"
                  placeholder="How can I help?*"
                  type="text"
                  rows="4"
                  cols="50"
                />
                <div className="d-flex flex-inline">
                  <div>
                    <Button className="contact-button">Send Message</Button>
                  </div>
                  <div>
                    <Button onClick={handleClick} className="contact-clear-btn">
                      Clear
                    </Button>
                  </div>
                </div>
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
