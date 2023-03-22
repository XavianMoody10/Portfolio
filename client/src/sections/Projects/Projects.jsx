import React, { useEffect } from "react";
import { useObserver } from "../../hooks/useObserver";

export const Projects = ({ setSection }) => {
  const { ref, inView, entry } = useObserver();

  useEffect(() => {
    if (inView) {
      setSection(2);
    }
  }, [inView]);

  return (
    <section id="projects" ref={ref}>
      Projects
    </section>
  );
};
