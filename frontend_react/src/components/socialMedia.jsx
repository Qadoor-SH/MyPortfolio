import React from "react";
import { socialMediaAccounts } from "../constants";
const SocialMedia = () => {
  return (
    <div className="app__social">
      {socialMediaAccounts.map(({ icon, link }, index) => (
        <div key={link + index}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
