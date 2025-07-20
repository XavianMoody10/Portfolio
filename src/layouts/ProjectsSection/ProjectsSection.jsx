import { ElementAnimateFromLeft } from "../../components/ElementAnimateFromLeft/ElementAnimateFromLeft";
import { ElementAnimateFromRight } from "../../components/ElementAnimateFromRight/ElementAnimateFromRight";
import { Project } from "../../components/Project/Project";
import { TextSlideUp } from "../../components/TextSlideUp/TextSlideUp";
import Trafalgar from "../../assets/trafalgar.jpg";
import Waves from "../../assets/waves.jpg";
import Popcornscore from "../../assets/popcornscore.png";

export const ProjectsSection = () => {
  const projectsCollection = [
    {
      name: "Waves",
      description:
        "Responsive Digital Agency Website (Community) made with HTML, SCSS, and JavaScript",
      image: Waves,
      sourceCodeLink: "https://github.com/XavianMoody10/Waves",
      liveViewLink: "https://waves-xavian.netlify.app/",
    },

    {
      name: "Trafalgar",
      description:
        "Trafalgar Landing Page (Community) made with HTML, SCSS, and JavaScript",
      image: Trafalgar,
      sourceCodeLink: "https://github.com/XavianMoody10/Trafalgar",
      liveViewLink: "https://trafalgar-xavian.netlify.app/",
    },

    {
      name: "Popcornscore",
      description:
        "A full-stack MERN application that allows users to rate and leave reviews for movies and TV shows.",
      image: Popcornscore,
      sourceCodeLink: "https://github.com/XavianMoody10/Popcornscore",
      liveViewLink: "https://popcornscore.onrender.com",
    },
  ];

  const projects = projectsCollection.map((p, i) => {
    const direction = i % 2;

    if (direction) {
      return (
        <ElementAnimateFromRight key={p.name}>
          <Project
            name={p.name}
            description={p.description}
            sourceCodeLink={p.sourceCodeLink}
            liveViewLink={p.liveViewLink}
            image={p.image}
          />
        </ElementAnimateFromRight>
      );
    } else {
      return (
        <ElementAnimateFromLeft key={p.name}>
          <Project
            name={p.name}
            description={p.description}
            sourceCodeLink={p.sourceCodeLink}
            liveViewLink={p.liveViewLink}
            image={p.image}
          />
        </ElementAnimateFromLeft>
      );
    }
  });

  return (
    <section id="projects" className=" pt-24">
      <h3 className=" text-4xl border-b border-black/25 pb-3 font-semibold">
        <TextSlideUp
          words={["PROJECTS", "PROJECTS", "PROJECTS"]}
          colors={["#F28C8C", "#66BB6A", "#64B5F6"]}
          height={"44px"}
        />
      </h3>

      <div className=" w-full grid grid-cols-1 gap-10 mt-10 min-[700px]:grid-cols-2">
        {projects}
      </div>
    </section>
  );
};
