import { motion } from "motion/react";
import { FaArrowRight as ArrowIcon } from "react-icons/fa6";

export const Footer = () => {
  const arrow = {
    initial: { x: 0 },
    animate: { x: 10 },
  };

  return (
    <footer className=" max-w-[1300px] mx-auto mt-52 flex flex-col justify-center gap-7 pb-7">
      <h2 className="  text-6xl font-primary font-bold min-[500px]:text-8xl">
        LET'S WORK TOGETHER
      </h2>

      <nav className=" border-b border-black/35 pb-12">
        <ul className=" flex flex-col gap-20 min-[500px]:flex-row">
          <motion.li
            className=" flex items-center gap-4"
            initial="initial"
            whileHover={"animate"}
          >
            <a
              href="mailto:XavianMoody1025@gmail.com"
              target="_blank"
              className=" font-primary font-semibold text-xl"
            >
              EMAIL ME
            </a>

            <motion.div variants={arrow}>
              <ArrowIcon size={27} />
            </motion.div>
          </motion.li>

          <motion.li
            className=" flex items-center gap-4"
            initial="initial"
            whileHover={"animate"}
          >
            <a
              href="https://www.linkedin.com/in/xavian-moody-00a151206/"
              target="_blank"
              className=" font-primary font-semibold text-xl"
            >
              LINKEDIN
            </a>

            <motion.div variants={arrow}>
              <ArrowIcon size={27} />
            </motion.div>
          </motion.li>

          <motion.li
            className=" flex items-center gap-4"
            initial="initial"
            whileHover={"animate"}
          >
            <a
              href="https://github.com/XavianMoody10"
              target="_blank"
              className=" font-primary font-semibold text-xl"
            >
              GITHUB
            </a>
            <motion.div variants={arrow}>
              <ArrowIcon size={27} />
            </motion.div>{" "}
          </motion.li>
        </ul>
      </nav>

      <div className=" flex justify-between">
        <span>POWERED BY XAVIAN MOODY</span>

        <nav>
          <ul className=" flex gap-10">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
