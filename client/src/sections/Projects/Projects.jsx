import React, { useEffect } from "react";
import { useObserver } from "../../hooks/useObserver";
import italianos from "../../assets/projects/italianos.png";
import bestfit from "../../assets/projects/bestfit.png";
import { Project } from "../../features/Project/Project";
import data from "../../data/data";

export const Projects = ({ setSection }) => {
  const { ref, inView, entry } = useObserver();

  useEffect(() => {
    if (inView) {
      setSection(2);
    }
  }, [inView]);

  // Display projects using map method
  const dataMap = data.projects.map((project, index) => {
    // check if index is and even or odd number
    const isEven = index % 2;

    return (
      <Project
        key={project.id}
        // if index is an even number reverse project layout, else use default layout
        reverse={isEven === 0 ? false : true}
        project={project}
      />
    );
  });

  return (
    <section
      id="projects"
      ref={ref}
      className=" flex items-center justify-center"
    >
      <div className=" flex flex-col gap-40 mt-48">
        {/* <Project reverse={false} imageSrc={italianos}></Project>
        <Project reverse={true} imageSrc={bestfit}></Project> */}

        {dataMap}
      </div>
    </section>
  );
};
