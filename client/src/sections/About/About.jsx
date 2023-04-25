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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            neque non augue vehicula molestie ut quis sapien. Duis vestibulum
            metus nunc, vel laoreet tellus hendrerit eu. Praesent hendrerit
            commodo nulla, auctor eleifend magna hendrerit vitae. Donec sit amet
            elit in odio molestie suscipit. Sed euismod ex nec lorem ornare, id
            congue enim dignissim. Curabitur eget nibh vel neque scelerisque
            imperdiet vel vel ante.
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
