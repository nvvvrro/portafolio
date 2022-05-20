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
};

export const Sidebar = () => {
  const [open, onToggle] = useCycle(false, true);

  return (
    <div className="sm:hidden">
      <div className="flex fixed z-20 m-6">
        <Menu onClick={onToggle} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: 50 }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            className="flex fixed flex-col pt-20 bg-rose-100 rounded-r-2xl "
          >
            <motion.div
              className="flex flex-col container items-center justify-between h-5/6 mt-auto "
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {routes.map((route, index) => (
                <Link
                  key={index}
                  href={route.path}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex-auto inline-flex p-7 items-center justify-start"
                >
                  <FontAwesomeIcon
                    icon={route.icon}
                    className="text-pink-700"
                    size="lg"
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
