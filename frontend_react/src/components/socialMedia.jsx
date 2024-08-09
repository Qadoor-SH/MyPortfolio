import React from "react";
import { BsTwitter, BsInstagram, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsWhatsapp />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <BsTwitterX />
      </div>
      <div>
        <FaFacebookF />
      </div>
    </div>
  );
};

export default SocialMedia;
