import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { email, message, name } = formData;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSendMessage = () => {
    setLoading((prev) => true);
    setIsFormSubmitted((prev) => false);
    const contact = {
      _type: "contact",
      ...formData,
    };
    client
      .create(contact)
      .then(() => {
        setLoading((prev) => false);
        setIsFormSubmitted((prev) => true);
      })
      .catch((error) => {
        console.log("submit error :", error);
        setIsFormSubmitted(false);
        setLoading(false);
      });
  };
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:abdul2001sh@gmail.com" className="p-text">
            abdul2001sh@gmail.com
          </a>
        </div>
        {/* </div>
      <div className="app__footer-cards"> */}
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +967 773225233" className="p-text">
            +967 773225233
          </a>
        </div>
      </div>

      {isFormSubmitted ? (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      ) : (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Email"
              value={email}
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <textarea
              name="message"
              value={message}
              onChange={handleInputChange}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="button"
            className="p-text"
            onClick={handleSendMessage}
            disabled={loading}
          >
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
