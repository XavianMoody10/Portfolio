import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ProjectDisplay = ({ reverse, project }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div
      className={` h-96 flex gap-14 items-center p-3 ${
        reverse && "flex-row-reverse"
      }`}
    >
      <div className=" h-full w-72 bg-custom-green rounded-lg relative">
        <motion.div
          ref={ref}
          className=" absolute h-full w-full bg-custom-blue rounded-lg"
          animate={
            !reverse
              ? inView
                ? { top: 20, left: 20 }
                : { top: 0, left: 0 }
              : inView
              ? { top: 20, left: -20 }
              : { top: 0, left: 0 }
          }
        ></motion.div>
      </div>

      <div className="bg-black w-[600px] h-full mt-7"></div>
    </div>
  );
};
