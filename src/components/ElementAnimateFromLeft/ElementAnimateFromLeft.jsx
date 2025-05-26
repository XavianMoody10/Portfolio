import { motion, useInView } from "motion/react";
import { useRef } from "react";

export const ElementAnimateFromLeft = ({ children }) => {
  const fromLeftElRef = useRef();
  const fromLeftElIsInView = useInView(fromLeftElRef, { once: true });

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={fromLeftElIsInView ? { x: 0, opacity: 1 } : null}
      transition={{ duration: 0.5, stiffness: 0 }}
      ref={fromLeftElRef}
    >
      {children}
    </motion.div>
  );
};
