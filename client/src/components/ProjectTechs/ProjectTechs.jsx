import React from "react";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import javascriptIcon from "../../assets/javascript.png";
import reactIcon from "../../assets/react.png";
import nodeIcon from "../../assets/node.png";
import expressIcon from "../../assets/express.png";

export const ProjectTechs = ({ reverse, techs }) => {
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
      return <img key={tech} src={nodeIcon} alt="" width={100} />;
    } else if (tech === "express") {
      return <img key={tech} src={expressIcon} alt="" width={120} />;
    }
  });

  return (
    <ul
      className={`flex items-center gap-2 mt-3 ${reverse ? "justify-end" : ""}`}
    >
      {techsMap}
    </ul>
  );
};
