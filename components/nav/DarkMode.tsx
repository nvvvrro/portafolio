import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  const [darken, setDarken] = useState(false);

  useEffect(() => {
    setDarken(true);
  }, []);

  const handleTheme = useCallback(() => {
    darken && setTheme(theme === "light" ? "dark" : "light");
  }, [darken, theme, setTheme]);

  return (
    <div className="absolute top-2 md:right-6 right-0 z-20">
      <motion.button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-10 h-10 p-3 rounded focus:outline-none"
        onClick={handleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.5 }}
      >
        {darken && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 34 34"
            fill="currentColor"
            stroke="currentColor"
            className="md:w-12 md:h-12 w-9 h-9 text-yellow-400 dark:text-yellow-500"
          >
            {theme === "dark" ? (
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
