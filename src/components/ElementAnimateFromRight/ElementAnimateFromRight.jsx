import { useRef } from "react";
import { motion, useInView } from "motion/react";

export const ElementAnimateFromRight = ({ children }) => {
  const fromRightElRef = useRef();
  const fromRightElIsInView = useInView(fromRightElRef);

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={fromRightElIsInView ? { x: 0, opacity: 1 } : null}
      transition={{ duration: 0.5, stiffness: 0 }}
      ref={fromRightElRef}
    >
      {children}
    </motion.div>
  );
};
