import { FC } from "react";
import { motion } from "framer-motion";

const blackBoxVariants = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      delay: 2.5,
      when: "afterChildren",
    },
  },
};

export const IntroTransition: FC = () => {
  const handleAnimation = {
    animationStart: () => {
      document.getElementById("intro")?.classList.add("overflow-hidden");
    },
    animationComplete: () => {
      document.getElementById("intro")?.classList.remove("overflow-hidden");
    },
  };

  return (
    <motion.div
      id="intro"
      className="absolute z-50 flex flex-col items-center justify-center bottom-0 left-0 right-0 top-0 bg-black dark:bg-white"
      initial="initial"
      animate="animate"
      variants={blackBoxVariants}
      onAnimationStart={handleAnimation.animationStart}
      onAnimationComplete={handleAnimation.animationComplete}
    >
      <motion.div
        variants={textVariants}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <h1 className="sm:text-4xl text-2xl font-bold dark:text-gray-900 text-gray-100">
          Hola! yo soy <span className="text-pink-700 ">Navarro</span>
        </h1>
        <h2 className="sm:text-2xl text-xl font-thin dark:text-gray-900 text-gray-100">
          Desarrollador de software
        </h2>
      </motion.div>
    </motion.div>
  );
};

export default IntroTransition;
