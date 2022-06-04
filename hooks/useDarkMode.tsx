import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setTheme(resolvedTheme);
  }, [resolvedTheme]);

  return [theme, setTheme];
};
