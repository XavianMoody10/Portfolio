import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ComputerIcon from "@mui/icons-material/Computer";

export const ProjectLinks = ({ reverse, links }) => {
  const iconsStyles = {
    cursor: "pointer",
  };

  return (
    <ul className={`flex gap-4 ml-3 mt-5 ${reverse ? "justify-end" : ""}`}>
      <a href={links.code} target="true">
        <GitHubIcon sx={iconsStyles}></GitHubIcon>
      </a>

      <a href={links.live} target="true">
        <ComputerIcon sx={iconsStyles}></ComputerIcon>
      </a>
    </ul>
  );
};
