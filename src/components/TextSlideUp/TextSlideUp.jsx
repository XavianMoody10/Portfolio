import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export const TextSlideUp = ({ words, colors }) => {
  const containerRef = useRef(null);
  const [animationCount, setAnimationCount] = useState(0);
  const [widths, setWidths] = useState([]);

  useEffect(() => {
    if (containerRef.current) {
      const childNodes = containerRef.current.children;

      const newWidths = Array.from(childNodes).map(
        (child) => child.getBoundingClientRect().width
      );

      setWidths(newWidths);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () =>
        setAnimationCount((prev) => {
          if (prev > 1) {
            return 0;
          } else {
            return prev + 1;
          }
        }),
      4000
    );

    return () => clearInterval(timer);
  }, []);

  const spans = words.map((w, i) => {
    return (
      <span
        key={`${w}${i}`}
        className={` font-bold text-[${[
          colors[i] || null,
        ]}] whitespace-nowrap w-fit`}
      >
        {w}
      </span>
    );
  });

  return (
    <div className={`${widths[animationCount]} h-[32px] overflow-hidden`}>
      <motion.div
        initial={{ y: 0, width: widths[0] }}
        animate={{
          y: `-${animationCount * (100 / 3)}%`,
          width: widths[animationCount],
        }}
        transition={{ duration: 0.2, stiffness: 0 }}
        className=" flex flex-col items-center"
        ref={containerRef}
      >
        {/* <span className=" font-bold text-[#61DAFB] whitespace-nowrap w-fit">
          Front-End
        </span>
        <span className=" font-bold text-[#47A248] whitespace-nowrap w-fit">
          MERN-Stack
        </span>
        <span className=" font-bold text-[#F7DF1E] whitespace-nowrap w-fit">
          Full-Stack
        </span> */}
        {spans}
      </motion.div>
    </div>
  );
};
