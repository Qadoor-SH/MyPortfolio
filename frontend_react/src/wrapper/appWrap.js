import React from "react";

import { NavigationDots, SocialMedia } from "../components";
import { copyrights } from "../constants";
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            {copyrights.map((right, index) => (
              <p className="p-text" key={right + index}>
                {right}
              </p>
            ))}
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
