import React from "react";

export const About = () => {
  return (
    <section
      id="about"
      className=" h-screen bg-custom-gradient flex items-center justify-center"
    >
      <div className=" flex items-start text-white gap-[90px]">
        <div className=" text-center ">
          <h2 className=" text-4xl font-bold mb-4">About Me</h2>
          <p className=" w-[620px] text-xl leading-[55px] font-light">
            I'm a web development enthusiast from Fort Lauderdale, Florida, who
            earned an Associates Degree in Software Development from Broward
            Community College in 2022. I'm eager to learn and grow to become a
            valuable asset to any organization. My dedication to the field is
            evident in my academic achievements, and I'm excited to continue
            expanding my knowledge and skills.
          </p>
        </div>

        <div className=" border mt-14 h-[350px] opacity-25"></div>

        <div className=" w-[310px]">
          <h2 className=" text-4xl font-bold mb-4 text-center">Skills</h2>
          <ul className=" w-fit text-xl leading-[50px] font-light list-disc">
            <li>HTML (HyperText Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
