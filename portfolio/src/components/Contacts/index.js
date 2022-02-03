import React, { useState } from "react";
import "./style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDedault();
    console.log(formData);
  };
  return (
    <div className="contact-page">
      <h1>Contact your boy here!</h1>
      <div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            onChange={(e) => setFormData(e.target.value)}
            value={formData.name}
          />

          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setFormData(e.target.value)}
            value={formData.email}
          />

          <label className="label-tx" htmlFor="message">
            Message
          </label>
          <textarea
            type="text"
            onChange={(e) => setFormData(e.target.value)}
            value={formData.message}
          />

          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
