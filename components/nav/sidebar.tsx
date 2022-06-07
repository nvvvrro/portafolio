import { FC } from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { Link, Menu } from "components";
import { routes } from "config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  closed: {
    x: -30,
    transition: {
      type: "spring",
    },
  },
  open: { opacity: 1 },
  whileHover: { scale: 1.2 },
  whileTap: { scale: 0.9 },
};

const asideVariants = {
  initial: { width: 0 },
  animate: { width: 60 },
  exit: {
    width: 0,
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const toggleVariants = {
  open: {
    x: "-5%",
  },
  closed: {
    x: "-20%",
    opacity: 1,
  },
};

export const Sidebar: FC = () => {
  const [open, onToggle] = useCycle(false, true);

  return (
    <div id="sidebar" className="sm:hidden">
      <motion.div
        className={`flex fixed z-30 mt-6 p-2 bg-opacity-80 dark:bg-opacity-80 bg-rose-100 dark:bg-purple-300 ${
          open ? "rounded-3xl left-3" : "rounded-r-3xl"
        } 
        `}
        variants={toggleVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
      >
        <Menu onClick={onToggle} className={open ? "" : "ml-3"} />
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.aside
            variants={asideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex fixed flex-col pt-20 bg-rose-100 dark:bg-purple-200 rounded-r-2xl z-20 bg-opacity-70 dark:bg-opacity-70"
          >
            <motion.div
              variants={sideVariants}
              initial="initial"
              animate="open"
              exit="closed"
              className="flex flex-col container items-center justify-between h-5/6 mt-auto "
            >
              {routes.map((route, index) => (
                <Link
                  key={index}
                  href={route.path}
                  variants={itemVariants}
                  exit="closed"
                  whileHover="whileHover"
                  whileTap="whileTap"
                  className="flex-auto inline-flex  items-center justify-start p-4 my-3"
                >
                  <FontAwesomeIcon
                    icon={route.icon}
                    className="text-pink-700 dark:text-purple-900 h-7 w-auto"
                  />
                </Link>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};
