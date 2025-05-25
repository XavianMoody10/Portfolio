import { ElementAnimateFromLeft } from "../../components/ElementAnimateFromLeft/ElementAnimateFromLeft";
import { ElementAnimateFromRight } from "../../components/ElementAnimateFromRight/ElementAnimateFromRight";
import { Project } from "../../components/Project/Project";

export const ProjectsSection = () => {
  const projectsCollection = [
    {
      name: "Waves",
      description:
        "Responsive Digital Agency Website (Community) made with HTML, SCSS, and JavaScript",
      background_image: "",
      sourceCodeLink: "https://github.com/XavianMoody10/Waves",
      liveViewLink: "https://waves-xavian.netlify.app/",
    },

    {
      name: "Trafalgar",
      description:
        "Trafalgar Landing Page (Community) made with HTML, SCSS, and JavaScript",
      background_image: "",
      sourceCodeLink: "https://github.com/XavianMoody10/Trafalgar",
      liveViewLink: "https://trafalgar-xavian.netlify.app/",
    },

    {
      name: "Film Review Application",
      description:
        "A full-stack MERN application that allows users to rate and leave reviews for movies and TV shows.",
      background_image: "",
      sourceCodeLink:
        "https://github.com/XavianMoody10/Film-Review-Application",
      liveViewLink: "https://film-review-application-frontend.onrender.com/",
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
          />
        </ElementAnimateFromRight>
      );
    } else {
      return (
        <ElementAnimateFromLeft key={p.name}>
          <Project
            key={p.name}
            name={p.name}
            description={p.description}
            sourceCodeLink={p.sourceCodeLink}
            liveViewLink={p.liveViewLink}
          />
        </ElementAnimateFromLeft>
      );
    }
  });

  return (
    <section>
      <h3 className=" text-2xl border-b border-black/25 pb-3 font-semibold">
        Projects
      </h3>

      <div className=" w-full grid grid-cols-1 gap-10 mt-10 min-[700px]:grid-cols-2">
        {projects}
      </div>
    </section>
  );
};
