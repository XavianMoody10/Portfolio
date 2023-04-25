import React from "react";
import { ProjectDisplay } from "../../components/ProjectDisplay/ProjectDisplay";
import { projects } from "../../data/projects";

export const Projects = () => {
  // Display projects
  const projectsMap = projects.map((project, index) => {
    if (index % 2 === 0) {
      return <ProjectDisplay key={project.id} project={project} />;
    } else {
      return (
        <ProjectDisplay key={project.id} reverse={true} project={project} />
      );
    }
  });

  return (
    <section
      id="projects"
      className=" bg-custom-gradient flex justify-center items-center"
    >
      <div className=" mt-[200px] mb-6">
        <h2 className=" text-white text-4xl font-bold text-center mb-14">
          Projects
        </h2>

        <div className=" flex flex-col gap-[100px]">{projectsMap}</div>
      </div>
    </section>
  );
};
