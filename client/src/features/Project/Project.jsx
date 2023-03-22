import React from "react";
import { ProjectDescription } from "../../components/ProjectDescription/ProjectDescription";
import { ProjectImage } from "../../components/ProjectImage/ProjectImage";
import { ProjectLinks } from "../../components/ProjectLinks/ProjectLinks";
import { ProjectTechs } from "../../components/ProjectTechs/ProjectTechs";
import { useObserver } from "../../hooks/useObserver";

export const Project = ({ reverse, project }) => {
  const { title, image, desc, links, techs } = project;
  const { ref, inView, entry } = useObserver(true);

  // use observer to trigger project animations
  return (
    <div
      ref={ref}
      className={` flex items-center ${reverse ? "flex-row-reverse" : null}`}
    >
      <div
        className={`relative opacity-0 ${
          reverse && inView ? "right-10 enter-right" : null
        } bottom-8 h-h-project z-10 ${
          !reverse && inView ? "left-10 enter-left" : null
        } ${!reverse ? "translate-x-left-100" : "translate-x-right-100"}`}
      >
        <h3
          className={` font-semibold text-3xl mb-3 ${
            reverse ? "text-right" : null
          }`}
        >
          {title}
        </h3>

        <ProjectDescription reverse={reverse} desc={desc} />
        <ProjectTechs reverse={reverse} techs={techs} />
        <ProjectLinks reverse={reverse} links={links} />
      </div>

      <ProjectImage reverse={reverse} imageSrc={image}></ProjectImage>
    </div>
  );
};
