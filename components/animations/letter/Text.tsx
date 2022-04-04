import { FC } from "react";
import { motion, Variants } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export interface TextProps extends HTMLMotionProps<"div"> {
  delay?: number;
  staggerChildren?: number;
  text: string;
}

export const Text: FC<TextProps> = ({
  className,
  delay = 0.5,
  staggerChildren = 0.04,
  text,
}) => {
  const letters = Array.from(text);

  const sentence: Variants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delay, staggerChildren } },
  };

  const letter: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className={`text-lg text-gray-900 dark:text-gray-100 ${className}`}
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={letter}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};
