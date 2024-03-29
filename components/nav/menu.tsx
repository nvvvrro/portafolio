import { FC, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const menuVariants = {
  path1: {
    open: { d: "M3.06061 2.99999L21.0606 21" },
    closed: { d: "M0 9.5L24 9.5" },
  },
  path2: {
    open: { d: "M3.00006 21.0607L21 3.06064" },
    moving: { d: "M0 14.5L24 14.5" },
    closed: { d: "M0 14.5L15 14.5" },
  },
  path3: {
    open: { d: "M3.06061 2.99999L21.0606 21" },
    closed: { d: "M0 19.5L15 19.5" },
  },
};

interface PropsMenu {
  onClick: () => void;
  className?: string;
}

export const Menu: FC<PropsMenu> = ({ onClick, className = "" }) => {
  const [isOpen, setOpen] = useState(false);
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();
  const path03Controls = useAnimation();

  const onClickAnimate = async () => {
    setOpen(!isOpen);
    if (!isOpen) {
      await path02Controls.start(menuVariants.path2.moving);
      path01Controls.start(menuVariants.path1.open);
      path02Controls.start(menuVariants.path2.open);
      path03Controls.start(menuVariants.path3.open);
    } else {
      path01Controls.start(menuVariants.path1.closed);
      await path02Controls.start(menuVariants.path2.moving);
      path02Controls.start(menuVariants.path2.closed);
      path03Controls.start(menuVariants.path3.closed);
    }
  };

  return (
    <button
      onClick={() => {
        onClickAnimate();
        onClick();
      }}
      className={className}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        className="text-slate-800 dark:text-white "
      >
        <motion.path
          {...menuVariants.path1.closed}
          animate={path01Controls}
          transition={{ duration: 0.2 }}
        />
        <motion.path
          {...menuVariants.path2.closed}
          animate={path02Controls}
          transition={{ duration: 0.2 }}
        />
        <motion.path
          {...menuVariants.path3.closed}
          animate={path03Controls}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
};
