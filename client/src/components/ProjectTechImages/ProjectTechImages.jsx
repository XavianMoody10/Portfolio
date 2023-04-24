import React from "react";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import javascriptIcon from "../../assets/javascript.png";
import reactIcon from "../../assets/react.png";
import nodeIcon from "../../assets/node.png";
import expressIcon from "../../assets/express.png";
import tailwindIcon from "../../assets/tailwind.png";
import mongodbIcon from "../../assets/mongodb.png";

export const ProjectTechImages = ({ reverse, techs }) => {
  const techsMap = techs.map((tech) => {
    if (tech === "html") {
      return <img key={tech} src={htmlIcon} alt="" width={50} />;
    } else if (tech === "css") {
      return <img key={tech} src={cssIcon} alt="" width={50} />;
    } else if (tech === "javascript") {
      return <img key={tech} src={javascriptIcon} alt="" width={40} />;
    } else if (tech === "react") {
      return <img key={tech} src={reactIcon} alt="" width={40} />;
    } else if (tech === "node") {
      return <img key={tech} src={nodeIcon} alt="" width={70} />;
    } else if (tech === "express") {
      return <img key={tech} src={expressIcon} alt="" width={110} />;
    } else if (tech === "tailwind") {
      return <img key={tech} src={tailwindIcon} alt="" width={110} />;
    } else if (tech === "mongodb") {
      return <img key={tech} src={mongodbIcon} alt="" width={110} />;
    }
  });

  return (
    <ul
      className={` flex flex-wrap items-center justify-start content-between gap-2 mt-3 w-60 ${
        reverse ? "justify-end ml-auto" : ""
      }`}
    >
      {techsMap}
    </ul>
  );
};
