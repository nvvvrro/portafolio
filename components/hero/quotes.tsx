import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const characters = [
  {
    value: "asombroso",
    icon: "🔥",
    color: "#f43f5e",
  },
  { value: "creativo", icon: "🚀", color: "#ec4899" },
  { value: "fabuloso", icon: "🎉", color: "#d946ef" },
  { value: "inteligente", icon: "💡", color: "#a855f7" },
  { value: "seguro", icon: "🔒", color: "#8b5cf6" },
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
      delay: 0.3,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: {
      delay: 0.4,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export const Quotes = ({ className = "" } = {}) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 4 * 1000);
    return () => clearInterval(interval);
  }, []);

  const quote = characters[seconds % characters.length];
  const color = `${quote.color}`;

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.span
        className={`${className} drop-shadow-md shadow-black`}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={quoteVariants}
        key={seconds}
        style={{ color }}
      >
        {quote.value}
        <p className="text-3xl justify-center mt-0 sm:mt-1 lg:mt-2">
          {quote.icon}
        </p>
      </motion.span>
    </AnimatePresence>
  );
};
