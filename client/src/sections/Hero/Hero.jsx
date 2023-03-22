import React, { useEffect, useRef } from "react";
import { useObserver } from "../../hooks/useObserver";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Hero = ({ setSection }) => {
  const { ref, inView, entry } = useObserver();

  useEffect(() => {
    if (inView) {
      setSection(0);
    }
  }, [inView]);

  return (
    <section ref={ref} id="home" className="flex justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg">Hi, my name is</p>
        <h1 className="tracking-in-expand text-7xl font-bold">Xavian Moody</h1>
        <p>Front-End / Full-Stack Developer</p>

        <ul className="mt-2 flex gap-2">
          <TwitterIcon></TwitterIcon>
          <LinkedInIcon></LinkedInIcon>
          <GitHubIcon></GitHubIcon>
        </ul>
      </div>
    </section>
  );
};
