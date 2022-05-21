import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export const DarkMode: FC = () => {
  const { theme, setTheme } = useTheme();

  const dark = theme === "dark" ? true : false;

  const [darken, setDarken] = useState(dark);
  const [mounted, setMounted] = useState(false);

  const handleTheme = (theme: boolean) => {
    setDarken(theme);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setTheme(darken ? "dark" : "light");
  }, [darken, setTheme]);

  if (!mounted) return null;

  return (
    <div className="absolute sm:top-0 md:right-6 right-2 z-10">
      <motion.button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-12 h-12 p-2 rounded focus:outline-none"
        onClick={() => handleTheme(!darken)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.5 }}
      >
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
            fill="currentColor"
            stroke="currentColor"
            className="md:w-10 md:h-10 w-11 h-11 text-yellow-400 dark:text-yellow-500"
          >
            {darken ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
        )}
      </motion.button>
    </div>
  );
};
