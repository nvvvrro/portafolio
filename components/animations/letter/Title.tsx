import { FC } from "react";
import { motion, Variants } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export interface TitleProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  text: string;
}

export const Title: FC<TitleProps> = ({
  delay = 0,
  duration = 0.5,
  text,
  ...props
}) => {
  const letters = Array.from(text);

  const sentence: Variants = {
    hidden: {
      opacity: 0,
    },
    show: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const letter: Variants = {
    show: {
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
      },
    },
    hidden: {
      y: "100%",
    },
  };

  return (
    <motion.div
      className="flex overflow-hidden text-3xl text-gray-900 dark:text-gray-100"
      variants={sentence}
      initial="hidden"
      animate="show"
      {...props}
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={letter}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};
