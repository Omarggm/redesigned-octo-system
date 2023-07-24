import React, { useState } from "react";
import "../../assets/styles/contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let valid = true;
    if (name.trim().length === "") {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }
    if (email.trim().length === "") {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }
    if (valid) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={handleNameChange}
            type="text"
            id="name"
          />{" "}
          {nameError && <p className="error-message">{nameError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={handleEmailChange}
            type="text"
            id="email"
          />{" "}
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            value={message}
            onChange={handleMessageChange}
            id="message"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
