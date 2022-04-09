import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import "../styles/global.css";



function MyApp({ Component, pageProps, router }: AppProps) {
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsFirstMount(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <AnimatePresence exitBeforeEnter>
        <Component
          isFirstMount={isFirstMount}
          key={router.route}
          {...pageProps}
        />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
