import { HoverEffectImage } from "../../components/HoverEffectImage/HoverEffectImage";
import { TextSlideUp } from "../../components/TextSlideUp/TextSlideUp";
import CSSLogo from "../../assets/css.png";
import HTMLLogo from "../../assets/html.png";
import JavascriptLogo from "../../assets/js.png";
import NodeLogo from "../../assets/node.png";
import ReactLogo from "../../assets/react.png";

export const LandingSection = () => {
  return (
    <section className=" min-h-screen flex flex-col items-center justify-center gap-3">
      <h2 className=" text-2xl font-barlow text-center flex flex-wrap justify-center gap-x-1.5 duration-150">
        <div>
          <span className=" font-bold">Hello</span>, I'm a
        </div>

        <TextSlideUp
          words={["Front-End", "MERN-Stack", "Full-Stack"]}
          colors={["#61DAFB", "#47A248", "#F7DF1E"]}
        />

        <span>Developer</span>
      </h2>

      <h1 className=" text-7xl text-center font-barlow font-extrabold lg:text-8xl">
        Xavian Moody
      </h1>

      <div className=" flex justify-center gap-3 mt-5">
        <HoverEffectImage imageSrc={CSSLogo} />
        <HoverEffectImage imageSrc={HTMLLogo} />
        <HoverEffectImage imageSrc={JavascriptLogo} />
        <HoverEffectImage imageSrc={NodeLogo} />
        <HoverEffectImage imageSrc={ReactLogo} />
      </div>
    </section>
  );
};
