import { FC, ReactNode } from "react";
import clsx from "clsx";

type Colors = "red" | "green" | "blue" | "indigo" | "purple" | "pink";

export interface TooltipProps {
  children?: ReactNode;
  className?: string;
  message: string;
  color: Colors;
  id?: string;
}
export const Tooltip: FC<TooltipProps> = ({
  children,
  className,
  message,
  color,
  id,
}) => {
  const clx = clsx({
    "bg-red-500 text-white": color === "red",
    "bg-blue-500 text-white": color === "blue",
    "bg-green-500 text-white": color === "green",
    "bg-indigo-500 text-white": color === "indigo",
    "bg-purple-500 text-white": color === "purple",
    "bg-pink-500 text-white": color === "pink",
  });

  return (
    <div className="relative flex flex-col items-center group" id={id}>
      {children}
      <div className="absolute bottom-0 flex-col items-center hidden group-hover:flex mb-6 ">
        <span
          className={`${className} ${clx} relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md`}
        >
          {message}
        </span>
        <div
          className={`w-3 h-3 -ml-10 -mt-2 rotate-45 ${clx} bg-gray-300 `}
        ></div>
      </div>
    </div>
  );
};
