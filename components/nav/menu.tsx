import { FC, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const variants = {
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
}

export const Menu: FC<PropsMenu> = ({ onClick }) => {
  const [isOpen, setOpen] = useState(false);
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();
  const path03Controls = useAnimation();

  const onClickAnimate = async () => {
    setOpen(!isOpen);
    if (!isOpen) {
      await path02Controls.start(variants.path2.moving);
      path01Controls.start(variants.path1.open);
      path02Controls.start(variants.path2.open);
      path03Controls.start(variants.path3.open);
    } else {
      path01Controls.start(variants.path1.closed);
      await path02Controls.start(variants.path2.moving);
      path02Controls.start(variants.path2.closed);
      path03Controls.start(variants.path3.closed);
    }
  };

  return (
    <button
      onClick={() => {
        onClickAnimate();
        onClick();
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current ">
        <motion.path
          {...variants.path1.closed}
          animate={path01Controls}
          transition={{ duration: 0.2 }}
          stroke="#000"
        />
        <motion.path
          {...variants.path2.closed}
          animate={path02Controls}
          transition={{ duration: 0.2 }}
          stroke="#000"
        />
        <motion.path
          {...variants.path3.closed}
          animate={path03Controls}
          transition={{ duration: 0.3 }}
          stroke="#000"
        />
      </svg>
    </button>
  );
};
