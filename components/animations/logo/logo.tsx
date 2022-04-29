import { FC, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import style from "./Logo.module.css";
import clsx from "clsx";

const Container = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 8 } },
};

export const Logo: FC = () => {

  const activeAnimation = {
    animationStart: () => {
      document.getElementById("div_logo")?.classList.add(style.div_on);
    },
    animationComplete: () => {
      document.getElementById("div_logo")?.classList.remove(style.div_on);
    },
  };

  const divStyle = clsx({
    "text-5xl tracking-widest font-bold border-4 border-solid, p-5 relative h-16 cursor-pointer text-[#e685a4]":
      true,
    [style.div_animate]: true,
  });

  return (
    <motion.div
      id="div_logo"
      variants={Container}
      initial="initial"
      animate="animate"
      onAnimationStart={activeAnimation.animationStart}
      onAnimationComplete={activeAnimation.animationComplete}
      className={divStyle}
    >
      <span className={`${style.span} flex items-center justify-center`}>
        nvvvrro
      </span>
    </motion.div>
  );
};
