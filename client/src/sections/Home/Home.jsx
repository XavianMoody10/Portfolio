import React from "react";
import { BsTwitter as TwitterIcon, BsGithub as GitIcon } from "react-icons/bs";
import { FaLinkedinIn as LinkedinIcon } from "react-icons/fa";

export const Home = () => {
  const buttonStyles =
    "bg-custom-blue text-white border-custom-gray border-2 w-28 p-1 rounded-md hover:bg-slate-200 hover:text-custom-blue";
  const socialLinksStyles =
    " bg-custom-blue border-custom-gray border-2 rounded-full h-10 w-10 flex items-center justify-center duration-75 hover:scale-110";

  // Button click scoll to sections
  const buttonScrollHanlder = (section) => {
    document.getElementById(section).scrollIntoView();
  };

  return (
    <section
      id="home"
      className=" h-screen flex items-center relative bg-custom-gradient"
    >
      <div className=" flex flex-col justify-center items-center text-white w-full">
        <p className=" text-xl">Hi, Im</p>
        <h1 className=" text-5xl font-bold mt-2">Xavian Moody</h1>
        <p className=" mt-3 text-sm">Front-End/Full-Stack Web Developer</p>

        <p className=" mt-7 w-[620px] font-light text-center leading-10 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In
          fermentum et sollicitudin ac orci phasellus egestas tellus. Sit amet
          nisl suscipit adipiscing.
        </p>

        <div className=" mt-7 flex gap-2 font-semibold">
          <button
            className={buttonStyles}
            onClick={() => buttonScrollHanlder("projects")}
          >
            My Work
          </button>
          <button
            className={buttonStyles}
            onClick={() => buttonScrollHanlder("contact")}
          >
            Contact Me
          </button>
        </div>
      </div>

      <ul className=" absolute flex gap-3 bottom-10 left-10">
        <a href="" target="true" className={socialLinksStyles}>
          <TwitterIcon color="white" size={20} />
        </a>
        <a href="" target="true" className={socialLinksStyles}>
          <LinkedinIcon color="white" size={20} />
        </a>
        <a href="" target="true" className={socialLinksStyles}>
          <GitIcon color="white" size={20} />
        </a>
      </ul>
    </section>
  );
};
