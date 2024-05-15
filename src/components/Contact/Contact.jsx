import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lvoqsjd",
        "template_7n4i428",
        form.current,
        "GNaKVR5CAlnTFRgw4"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Oops! An error occurred. Please try again.");
        }
      );
  };

  return (
    <div className="contact">
      <h6>Or send me a message!</h6>
      <p>
        Have a question, proposal, or simply want to say hello? Don't hesitate
        to reach out!
      </p>
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="row">
          <div className="column">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="column">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Write me something :D"
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <input type="submit" value="Send email" />
          </div>
        </div>
      </form>
    </div>
  );
};
