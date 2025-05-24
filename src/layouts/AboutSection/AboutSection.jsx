import { ElementAnimateFromRight } from "../../components/ElementAnimateFromRight/ElementAnimateFromRight";
import { ElementAnimateFromLeft } from "../../components/ElementAnimateFromLeft/ElementAnimateFromLeft";

export const AboutSection = () => {
  return (
    <section className=" min-h-screen flex flex-col justify-center space-y-16">
      <h3 className=" text-2xl border-b border-black/25 pb-3 font-semibold">
        About
      </h3>

      <div className=" flex flex-col items-center justify-between gap-14 lg:flex-row lg:items-baseline">
        <ElementAnimateFromLeft>
          <p className=" font-barlow text-xl lg:max-w-[500px] md:text-xl lg:text-3xl">
            "Everybody in this country should learn to program a computer,
            because it teaches you how to think. Computer science is not just
            about coding—it’s about problem-solving, creativity, and building a
            better future." — Steve Jobs
          </p>
        </ElementAnimateFromLeft>

        <ElementAnimateFromRight>
          <div className=" flex flex-col gap-5 lg:max-w-[600px] md:text-lg">
            <p>
              I hold an Associate of Science degree in Software Development and
              have been honing my skills in coding for the past three years. My
              passion lies in frontend development, where I enjoy crafting
              responsive, user-friendly interfaces. I also have experience with
              MERN-stack development, allowing me to build dynamic full-stack
              applications. I take pride in turning ideas into functional,
              polished digital products.
            </p>

            <p>
              What drives me most is solving real-world problems through
              technology. I love developing applications that serve as practical
              solutions for both individuals and businesses. Whether it's
              improving efficiency or enhancing user experience, I strive to
              make a meaningful impact with my work. With a strong technical
              foundation and a creative approach, I’m always excited to tackle
              new challenges in the tech space.
            </p>
          </div>
        </ElementAnimateFromRight>
      </div>
    </section>
  );
};
