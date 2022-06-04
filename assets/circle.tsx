import { FC } from "react";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

interface PropsCircle extends MotionProps {
  cx: number;
  cy: number;
  r: number;
  fill?: string;
  values?: string;
  duration?: number;
}

export const Circle: FC<PropsCircle> = ({
  cx,
  cy,
  r,
  values,
  fill,
  duration = "5s",
  ...props
}) => {
  return (
    <motion.circle
      whileHover={{ scale: 1.1 }}
      cx={cx}
      cy={cy}
      r={r}
      fill={fill || "#e863ff"}
      {...props}
    >
      <animate
        attributeName="fill"
        values={values}
        dur={duration}
        repeatCount="indefinite"
      />
    </motion.circle>
  );
};
