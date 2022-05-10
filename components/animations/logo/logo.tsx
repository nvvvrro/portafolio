import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import style from "./Logo.module.css";
import { useTheme } from "next-themes";

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
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const dark = resolvedTheme === "dark" ? true : false;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const activeAnimation = {
    animationStart: () => {
      dark &&
        document.getElementById("container_logo")?.classList.add(style.div_on);
    },
    animationComplete: () => {
      dark &&
        document
          .getElementById("container_logo")
          ?.classList.remove(style.div_on);
    },
  };

  return (
    <>
      {mounted && (
        <motion.div
          id="container_logo"
          variants={ContainerLogo}
          animate="animate"
          onAnimationStart={activeAnimation.animationStart}
          onAnimationComplete={activeAnimation.animationComplete}
          className={`${
            dark ? style.div_animated : "text-pink-800"
          } hidden sm:flex `}
        >
          <div id="div_logo" className="p-6 relative h-16 cursor-pointer">
            <span
              className={`flex items-center justify-center font-bold text-5xl tracking-widest p-5 -translate-y-11`}
            >
              nvvvrro
            </span>
          </div>
        </motion.div>
      )}
    </>
  );
};
