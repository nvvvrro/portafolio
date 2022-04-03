import { Link } from "components";
import { FC, useMemo } from "react";
import { motion } from "framer-motion";

interface NavProps {
  title: string;
  href?: string;
}
export const NavItem: FC<NavProps> = ({ title, href }) => {
  const hrefLowerCase = useMemo(
    () => encodeURIComponent(title.toLowerCase()),
    [title]
  );

  return (
    <Link
      href={href ? href : `/${hrefLowerCase}`}
      className="hover:transition-colors hover:opacity-80"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        {title}
      </motion.h2>
    </Link>
  );
};
