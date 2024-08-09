import React from "react";

const NavigationDots = ({ active }) => {
  const navItems = [
    "home",
    "about",
    "work",
    "skills",
    "testimonials",
    "contact",
  ];
  return (
    <div className="app__navigation">
      {navItems.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { background: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
