import React, { useState } from "react";
import { Button } from "reactstrap";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
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
    await fetch("https://iyvtfduswobmzt2wa5fktqltrq0lddtr.lambda-url.us-east-2.on.aws/sendEmail", {
      method: "POST",
      body: JSON.stringify({ form }),

      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsSent(true);
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
            <div className="row">
              <div className="col">
                <div>
                  <div className="contact-title pb-5">Contact.</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="border-start border-dark border-2 pt-4 pb-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col">
                        <input
                          className="contact-input-textarea"
                          onChange={handleChange}
                          value={form.full_name}
                          name="full_name"
                          placeholder="Full Name*"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <input
                          className="contact-input-textarea"
                          onChange={handleChange}
                          value={form.email}
                          name="email"
                          placeholder="Email*"
                          type="email"
                          required
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <input
                          className="contact-input-textarea"
                          onChange={handleChange}
                          value={form.subject}
                          name="subject"
                          placeholder="Subject"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <textarea
                          className="contact-input-textarea"
                          onChange={handleChange}
                          value={form.message}
                          name="message"
                          placeholder="How can I help?*"
                          type="text"
                          rows="4"
                          cols="50"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="d-flex flex-inline">
                          <div className="row">
                            <div className="col">
                              {isSent ? (
                                <Button className="contact-sent-btn" disabled>
                                  <span className="contact-fade-in">Sent &#x2713;</span>
                                </Button>
                              ) : (
                                <Button
                                  type="submit"
                                  className="contact-button"
                                >
                                  Send
                                </Button>
                              )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <Button
                                onClick={handleClear}
                                className="contact-clear-btn"
                              >
                                Clear
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-pic col-xl-6"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
