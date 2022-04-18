import { FC, useState, useRef, useEffect } from "react";
import style from "./Logo.module.css";

export const Logo: FC = () => {
  const [isFirstMount, setIsFirstMount] = useState(false);

  const firstMountRef = useRef(true);

  console.log(firstMountRef);

  useEffect(() => {
    if (firstMountRef.current) {
      (async () => {
        await new Promise((resolve) => setTimeout(resolve, 10000));
        setIsFirstMount(true);
      })();
      firstMountRef.current = false;
    }
  }, [isFirstMount]);

  return (
    <div
      className={`text-4xl tracking-widest text-[#24102f] font-bold border-4 border-solid, p-5 relative h-24 cursor-pointer ${
        isFirstMount ? style.div_on : style.div
      }`}
    >
      <span className={`absolute top-1/2 ${style.span}`}>NVVVRRO</span>
    </div>
  );
};
