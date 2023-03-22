import React from "react";
import { useObserver } from "../../hooks/useObserver";

export const ProjectImage = ({ imageSrc, reverse }) => {
  const { ref, inView, entry } = useObserver(true);

  return (
    <img
      ref={ref}
      className={` h-96 object-cover opacity-0 ${
        !reverse && inView ? "enter-right translate-x-right-50" : null
      }

        ${reverse && inView ? "enter-left translate-x-left-50" : null}
      }`}
      src={imageSrc}
      alt=""
      width={700}
    />
  );
};
