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
        "9_7ruHtItrYhf1m-f"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div class="contact">
      <h1>Or send me a message!</h1>
      <p>
        Have a question, proposal, or simply want to say hello? Don't hesitate
        to reach out!
      </p>
      <form class="contact-form" onSubmit={sendEmail}>
        <div class="row">
          <div class="column">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="user_name" required placeholder="Enter your name"/>
          </div>
          <div class="column">
            <label for="email">Your Email</label>
            <input type="email" id="email" name="user_email" required placeholder="Enter your email"/>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <label for="name">Your Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="Write me something :D"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <input type="submit" value="Send email" />
          </div>
        </div>
      </form>
    </div>
  );
};
