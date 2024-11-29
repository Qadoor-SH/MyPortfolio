import React, { useState } from "react";
import { motion } from "framer-motion";

import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { contacts, images, socialMediaAccounts } from "../../constants";
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
        setIsFormSubmitted(false);
        setLoading(false);
      });
  };
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <a href={`mailto: ${contacts.email}`} className="p-text">
            <img src={images.email} alt="email" />
            {contacts.email}
          </a>
        </div>
        {/* </div>
      <div className="app__footer-cards"> */}
        <div className="app__footer-card">
          <a href={`tel: ${contacts.mobile}`} className="p-text">
            <img src={images.mobile} alt="mobile" />
            {contacts.mobile}
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
      <div className="app__footer-accounts app__flex">
        {socialMediaAccounts.map(({ icon, link }) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={link}
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
