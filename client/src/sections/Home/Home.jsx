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
          A hardworking and creative teamplayer looking forward to all
          challenges and experiences in web development. Proficient in coding
          and problem solving. Eager to gain experience, learn, and mature
          professionally while working within the career field. Worked and
          learned from professional developers from a young age.
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
        <a
          href="https://twitter.com/XavianM2"
          target="_blank"
          className={socialLinksStyles}
        >
          <TwitterIcon color="white" size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/xavian-moody-65bb77206/"
          target="_blank"
          className={socialLinksStyles}
        >
          <LinkedinIcon color="white" size={20} />
        </a>

        <a
          href="https://github.com/XavianMoody10"
          target="_blank"
          className={socialLinksStyles}
        >
          <GitIcon color="white" size={20} />
        </a>
      </ul>
    </section>
  );
};
