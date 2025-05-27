import { motion } from "motion/react";
import { useContext } from "react";
import { IoIosClose as CloseIcon } from "react-icons/io";
import { SideNavigationContext } from "../../contexts/SideNavigationContext";

export const SideNavigation = () => {
  const { sideNavigationIsOpen, setNavigationIsOpen } = useContext(
    SideNavigationContext
  );

  return (
    <motion.aside
      initial={{ x: "-100%" }}
      animate={{ x: sideNavigationIsOpen ? 0 : "-100%" }}
      transition={{ duration: 0.5 }}
      className=" bg-white fixed top-0 left-0 w-full h-screen z-10 flex items-center justify-center max-w-[400px] border border-black/20"
    >
      <CloseIcon
        className=" absolute top-5 right-5 cursor-pointer"
        size={50}
        onClick={() => setNavigationIsOpen(false)}
      />

      <nav>
        <ul className=" text-center space-y-16">
          <li className=" overflow-hidden">
            <motion.a
              initial={{ y: "250%" }}
              animate={{ y: sideNavigationIsOpen ? 0 : "250%" }}
              transition={{ ease: "easeOut", delay: 0.5 }}
              href="#home"
              className=" text-4xl font-primary block z-10"
              // onClick={() => setNavigationIsOpen(false)}
            >
              HOME
            </motion.a>
          </li>

          <li className=" overflow-hidden">
            <motion.a
              initial={{ y: "250%" }}
              animate={{ y: sideNavigationIsOpen ? 0 : "250%" }}
              transition={{ ease: "easeOut", delay: 0.5 }}
              href="#about"
              className=" text-4xl font-primary block z-10"
              // onClick={() => setNavigationIsOpen(false)}
            >
              ABOUT
            </motion.a>
          </li>

          <li className=" overflow-hidden">
            <motion.a
              initial={{ y: "250%" }}
              animate={{ y: sideNavigationIsOpen ? 0 : "250%" }}
              transition={{ ease: "easeOut", delay: 0.5 }}
              href="#projects"
              className=" text-4xl font-primary block z-10"
              // onClick={() => setNavigationIsOpen(false)}
            >
              PROJECTS
            </motion.a>
          </li>

          <li className=" overflow-hidden">
            <motion.a
              initial={{ y: "250%" }}
              animate={{ y: sideNavigationIsOpen ? 0 : "250%" }}
              transition={{ ease: "easeOut", delay: 0.5 }}
              href="#contact"
              className=" text-4xl font-primary block z-10"
              // onClick={() => setNavigationIsOpen(false)}
            >
              CONTACT
            </motion.a>
          </li>
        </ul>
      </nav>
    </motion.aside>
  );
};
