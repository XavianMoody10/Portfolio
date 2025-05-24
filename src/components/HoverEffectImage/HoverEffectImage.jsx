import { motion } from "motion/react";

export const HoverEffectImage = ({ imageSrc }) => {
  return <motion.img whileHover={{ scale: 1.2 }} src={imageSrc} width={40} />;
};
