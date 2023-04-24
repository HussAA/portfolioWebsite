import React, { useState } from "react";
import { Button } from "reactstrap";

const Contact = () => {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleClear = () => {
    setForm({
      full_name: "",
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

  const addData = async (form) => {
    await fetch("http://localhost:3000/sendEmail", {
      method: "POST",
      body: { form },

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(form);
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
              <form onSubmit={handleSubmit}>
                <input
                  onChange={handleChange}
                  value={form.full_name}
                  name="full_name"
                  placeholder="Full Name*"
                  type="text"
                  required
                />
                <input
                  onChange={handleChange}
                  value={form.email}
                  name="email"
                  placeholder="Email*"
                  type="email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
                <input
                  onChange={handleChange}
                  value={form.subject}
                  name="subject"
                  placeholder="Subject"
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
                  required
                />
                <div className="d-flex flex-inline">
                  <div>
                    <Button type="submit" className="contact-button">
                      Send Message
                    </Button>
                  </div>
                  <div>
                    <Button onClick={handleClear} className="contact-clear-btn">
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
