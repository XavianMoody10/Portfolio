import React, { useEffect } from "react";
import { useObserver } from "../../hooks/useObserver";

export const Contact = ({ setSection }) => {
  const { ref, inView, entry } = useObserver();

  useEffect(() => {
    if (inView) {
      setSection(3);
    }
  }, [inView]);

  return (
    <section id="contact" ref={ref}>
      Contact
    </section>
  );
};
