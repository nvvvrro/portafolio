import { NavItem, DarkMode, Logo } from "components";
import { routes } from "config/config";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import style from "./Navbar.module.css";

const borderVariants = {
  animate: {
    opacity: 1,
    transition: {
      duration: 8,
      when: "afterChildren",
    },
  },
};

export const Navbar: FC = () => {
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
          .getElementById("nav_border")
          ?.classList.add(style.nav_border_motion);
    },
    complete: () => {
      dark &&
        document
          .getElementById("nav_border")
          ?.classList.remove(style.nav_border_motion);
    },
  };
  return (
    <>
      <header className="container flex-wrap relative sm:sticky mx-auto top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-5 shadow-sm min-w-full ">
        {mounted && (
          <motion.div
            id="nav_border"
            animate="animate"
            variants={borderVariants}
            onAnimationStart={activeAnimation.start}
            onAnimationComplete={activeAnimation.complete}
            className={`${
              dark
                ? style.nav_border
                : "border-opacity-60 border-b-2 border-b-dark-third"
            } transition-all duration-500`}
          >
            <nav className="flex flex-col max-w-7xl mx-auto gap-2">
              <div className="flex items-center justify-center h-20 sm:px-8  ">
                <Logo />

                <div className="hidden sm:block flex-auto w-full py-6 gap-4 items-center justify-end pl-4 pr-8 md:pr-20">
                  <ul className="flex md:space-x-14 space-x-8 items-center justify-end font-medium md:text-md text-sm text-pink-700 dark:text-dark-third uppercase">
                    {routes.map((route, index) => (
                      <NavItem key={index} href={route.path} {...route} />
                    ))}
                  </ul>
                </div>
                <DarkMode />
              </div>
            </nav>
          </motion.div>
        )}
      </header>
    </>
  );
};
