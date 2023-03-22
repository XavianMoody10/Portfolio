import React, { useEffect } from "react";
import { useObserver } from "../../hooks/useObserver";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import javascriptIcon from "../../assets/javascript.png";
import reactIcon from "../../assets/react.png";
import taiwindIcon from "../../assets/tailwind.png";
import nodeIcon from "../../assets/node.png";
import expressIcon from "../../assets/express.png";

export const About = ({ setSection }) => {
  const { ref, inView, entry } = useObserver();

  useEffect(() => {
    if (inView) {
      setSection(1);
    }
  }, [inView]);

  return (
    <section id="about" ref={ref} className="flex items-center justify-center">
      <div className=" flex flex-col items-center gap-10">
        <div>
          <h3 className=" text-center text-2xl mb-3 font-medium">About Me</h3>
          <p className=" w-w-paragraph text-center leading-6">
            My name is <strong>Xavian Moody</strong>. I currently attend{" "}
            <strong>Broward Community College</strong> where I’ve earned my
            <strong> Associate's in Software Development</strong>. I began
            learning to code in 2020. Since the start of my coding journey, I’ve
            learned so much and have{" "}
            <strong>
              gained so much confidence in my skills to become a valuable asset
              to any team or company.
            </strong>
          </p>
        </div>

        <div>
          <h3 className=" text-center text-2xl mb-3 font-medium">
            Skills Acquired
          </h3>
          <div className=" flex items-center justify-center gap-4">
            <img src={htmlIcon} alt="" width={70} />
            <img src={cssIcon} alt="" width={70} />
            <img src={javascriptIcon} alt="" width={60} />
            <img src={reactIcon} alt="" width={60} />
            <img src={taiwindIcon} alt="" width={190} />
            <img src={nodeIcon} alt="" width={110} />
            <img src={expressIcon} alt="" width={160} />
          </div>
        </div>
      </div>
    </section>
  );
};
