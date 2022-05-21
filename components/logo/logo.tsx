import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
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
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const dark = resolvedTheme === "dark" ? true : false;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const activeAnimation = {
    start: () => {
      dark &&
        document
          .getElementById("container_logo")
          ?.classList.add(style.logo_text_motion);
    },
    complete: () => {
      dark &&
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
          className={`${dark ? style.logo_text : "text-pink-800"}`}
        >
          <div
            id="div_logo"
            className="p-6 relative h-12 sm:h-16 cursor-pointer"
          >
            <span
              className={`flex items-center justify-center font-bold tracking-widest p-5 text-3xl sm:text-4xl md:text-5xl -translate-y-10 sm:-translate-y-9 md:-translate-y-11 `}
            >
              nvvvrro
            </span>
          </div>
        </motion.div>
      )}
    </>
  );
};
