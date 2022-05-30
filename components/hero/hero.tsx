import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const characters = [
  {
    value: "asombroso",
    color: "red",
  },
  { value: "creativo", color: "blue" },
  { value: "fabuloso", color: "green" },
  { value: "inteligente", color: "yellow" },
  { value: "calidad", color: "purple" },
];

const quoteVariants = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export const Quotes = ({ className }: any) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 3 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.span
        className={className}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={quoteVariants}
        key={seconds}
      >
        {characters[seconds % characters.length].value}
      </motion.span>
    </AnimatePresence>
  );
};

export const Hero = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <div className="items-end z-0">
        <span className="flex text-6xl font-normal  z-10">Desarrollando </span>

        <span className="flex text-5xl font-light tracking-wide  z-10">
          Software&nbsp;
          <Quotes className="text-5xl font-light tracking-wide" />
        </span>

        <span className="text-5xl font-semibold tracking-wide"></span>
      </div>
    </div>
  );
};
