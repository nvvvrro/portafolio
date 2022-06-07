import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "hooks";
import style from "./Logo.module.css";

const logoVariants = {
  animate: {
    opacity: 1,
    transition: {
      duration: 8,
      when: "afterChildren",
    },
  },
};

export const Logo: FC = () => {
  const [theme] = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const activeAnimation = {
    start: () => {
      theme === "dark" &&
        document
          .getElementById("container_logo")
          ?.classList.add(style.logo_text_motion);
    },
    complete: () => {
      theme === "dark" &&
        document
          .getElementById("container_logo")
          ?.classList.remove(style.logo_text_motion);
    },
  };

  return (
    <>
      {mounted && (
        <motion.div
          id="container_logo"
          variants={logoVariants}
          animate="animate"
          onAnimationStart={activeAnimation.start}
          onAnimationComplete={activeAnimation.complete}
          className={`${theme === "dark" && style.logo_text}`}
        >
          <div
            id="div_logo"
            className="p-6 relative h-12 sm:h-16 cursor-pointer"
          >
            <span
              className={`flex items-center justify-center font-bold tracking-widest p-5 text-3xl sm:text-4xl md:text-5xl -translate-y-10 sm:-translate-y-9 md:-translate-y-11 ${
                theme === "light" &&
                "text-transparent  bg-clip-text bg-gradient-to-r from-dark-second to-[#086aab]"
              }`}
            >
              nvvvrro
            </span>
          </div>
        </motion.div>
      )}
    </>
  );
};
