import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export const TextSlideUp = ({ words, colors, height }) => {
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
        key={`${w}${colors[i]}`}
        style={{ color: colors[i], height: height || "32px" }}
        className={` font-bold whitespace-nowrap w-fit`}
      >
        {w}
      </span>
    );
  });

  return (
    <div
      className={`${widths[animationCount]} overflow-hidden w-fit`}
      style={{ height: height || "32px" }}
    >
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
        {spans}
      </motion.div>
    </div>
  );
};
