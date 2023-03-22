import React from "react";
import logo from "../../assets/logo.png";

export const Header = ({ section, setSection }) => {
  const unactive = "text-unactive-link";
  const linksArray = ["Home", "About", "Projects", "Contact"];

  const linksMap = linksArray.map((link, index) => {
    return (
      <a
        onClick={() => setSection(index)}
        key={index}
        href={`#${link.toLowerCase()}`}
        className={section === index ? unactive : null}
      >
        {link}
      </a>
    );
  });

  return (
    <header className="flex items-center justify-between px-9 py-4 fixed top-0 w-screen bg-white z-20">
      <img src={logo} alt="logo" width={100} />

      <ul className="flex gap-4">{linksMap}</ul>
    </header>
  );
};
