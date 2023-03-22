import React, { useEffect } from "react";
import { useObserver } from "../../hooks/useObserver";

export const About = ({ setSection }) => {
  const { ref, inView, entry } = useObserver();

  useEffect(() => {
    if (inView) {
      setSection(1);
    }
  }, [inView]);

  return (
    <section id="about" ref={ref}>
      About
    </section>
  );
};
