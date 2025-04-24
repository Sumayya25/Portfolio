import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tnt0cck", 
        "template_7mg2udu", 
        form.current,
        "qWzAA43z6y7kU1Keb" 
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message Sent Successfully! ✅");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Failed to Send Message ❌");
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h2 className="contact-heading">Let's Contact</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Enter your name" required />
          <input type="email" name="user_email" placeholder="Enter your email" required />
          <textarea name="message" placeholder="Enter your message" required></textarea>
          <button type="submit">Send Message</button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
