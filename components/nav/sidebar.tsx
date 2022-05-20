import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { Link } from "components";
import { Menu } from "./menu";
import { routes } from "config/config";

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
    opacity: 0,
  },
  open: { opacity: 1 },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
};

const asideVariants = {
  initial: { width: 0 },
  animate: { width: 60 },
  exit: {
    width: 0,
    transition: { delay: 0.7, duration: 0.3 },
  },
};

export const Sidebar = () => {
  const [open, onToggle] = useCycle(false, true);

  return (
    <div className="sm:hidden">
      <div className="flex fixed z-20 mt-6 ml-4">
        <Menu onClick={onToggle} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.aside
            variants={asideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex fixed flex-col pt-20 bg-rose-100 dark:bg-purple-200 rounded-r-2xl z-10 bg-opacity-70 dark:bg-opacity-70"
          >
            <motion.div
              variants={sideVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col container items-center justify-between h-5/6 mt-auto "
            >
              {routes.map((route, index) => (
                <Link
                  key={index}
                  href={route.path}
                  variants={itemVariants}
                  whileHover="whileHove"
                  whileTap="whileTap"
                  className="flex-auto inline-flex p-7 items-center justify-start"
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
