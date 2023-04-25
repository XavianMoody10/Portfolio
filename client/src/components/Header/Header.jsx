import React from "react";
import logo from "../../assets/logo.png";

export const Header = () => {
  // List of links
  const sections = [
    {
      section: "Home",
      href: "#home",
    },
    {
      section: "About",
      href: "#about",
    },
    {
      section: "Projects",
      href: "#projects",
    },
    {
      section: "Contact",
      href: "#contact",
    },
  ];

  // Render links to page
  const sectionsLinksMap = sections.map(({ section, href }) => {
    return (
      <a
        key={section}
        href={href}
        className=" font-georama font-semibold text-lg text-white hover:border-b"
      >
        {section}
      </a>
    );
  });

  return (
    <div className=" fixed top-0 flex justify-between items-center p-8 w-full z-10">
      <img src={logo} alt="logo" width={120} />

      <ul className=" flex gap-5">{sectionsLinksMap}</ul>
    </div>
  );
};
