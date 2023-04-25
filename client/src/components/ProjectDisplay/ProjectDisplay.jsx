import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdComputer as ComputerIcon } from "react-icons/md";
import { AiFillGithub as GitIcon } from "react-icons/ai";

export const ProjectDisplay = ({ reverse, project }) => {
  const { title, image, desc, links, techs } = project;
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  // Display tech stack list
  const techMap = [...techs].map((tech) => {
    return <li>{tech}</li>;
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
          className=" absolute h-full w-full bg-custom-blue rounded-lg text-white flex flex-col p-3"
          animate={
            !reverse
              ? inView
                ? { top: 20, left: 20 }
                : { top: 0, left: 0 }
              : inView
              ? { top: 20, left: -20 }
              : { top: 0, left: 0 }
          }
        >
          <h2 className=" border-b border-gray-600 text-center text-2xl pb-3 mb-6 font-bold">
            {title}
          </h2>
          <ul className=" list-disc list-inside text-sm flex flex-col gap-2">
            {techMap}
          </ul>

          <div className=" flex gap-2 text-2xl mt-auto ml-auto">
            <a href={links.live} target="_blank">
              <ComputerIcon />
            </a>
            <a href={links.code} target="_blank">
              <GitIcon />
            </a>
          </div>
        </motion.div>
      </div>

      <div
        className="bg-black w-[600px] h-full mt-7 bg-center bg-cover bg-no-repeat relative cursor-pointer"
        onClick={() => {
          window.open(links.live, "_blank");
        }}
        style={{ backgroundImage: `url(${image})` }}
      >
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={{ opacity: isHovered ? 0 : 0.8 }}
          className=" absolute w-full h-full bg-black opacity-80 flex items-center justify-center text-center p-2"
        >
          <p className=" text-white text-2xl">{desc}</p>
        </motion.div>
      </div>
    </div>
  );
};
