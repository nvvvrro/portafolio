import { FC } from "react";
import { motion } from "framer-motion";
import style from "./Logo.module.css";

const ContainerLogo = {
  animate: {
    opacity: 1,
    transition: {
      duration: 8,
      when: "afterChildren",
    },
  },
};

export const Logo: FC = () => {
  const activeAnimation = {
    animationStart: () => {
      document.getElementById("container_logo")?.classList.add(style.div_on);
    },
    animationComplete: () => {
      document.getElementById("container_logo")?.classList.remove(style.div_on);
    },
  };

  return (
    <motion.div
      id="container_logo"
      variants={ContainerLogo}
      animate="animate"
      onAnimationStart={activeAnimation.animationStart}
      onAnimationComplete={activeAnimation.animationComplete}
      className={style.div_animated}
    >
      <div id="div_logo" className="p-6 relative h-16 cursor-pointer">
        <span
          className={
            "flex items-center justify-center font-bold text-5xl tracking-widest p-5 -translate-y-11"
          }
        >
          nvvvrro
        </span>
      </div>
    </motion.div>
  );
};
