import React from "react";
import { ProjectDescription } from "../../components/ProjectDescription/ProjectDescription";
import { ProjectImage } from "../../components/ProjectImage/ProjectImage";
import { ProjectLinks } from "../../components/ProjectLinks/ProjectLinks";
import { ProjectTechs } from "../../components/ProjectTechs/ProjectTechs";

export const Project = ({ reverse, project }) => {
  const { title, image, desc, links, techs } = project;

  return (
    <div className={` flex items-center ${reverse ? "flex-row-reverse" : ""}`}>
      <div
        className={`relative ${
          reverse ? "right-10" : "left-10"
        } bottom-8 h-h-project`}
      >
        <h3
          className={` font-semibold text-3xl mb-3 ${
            reverse ? "text-right" : ""
          }`}
        >
          {title}
        </h3>

        <ProjectDescription reverse={reverse} desc={desc} />
        <ProjectTechs reverse={reverse} techs={techs} />
        <ProjectLinks reverse={reverse} links={links} />
      </div>

      <ProjectImage imageSrc={image}></ProjectImage>
    </div>
  );
};
