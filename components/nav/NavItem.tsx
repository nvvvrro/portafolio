import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  href?: string;
}
export const NavItem: FC<Props> = ({ title, href }) => {
  const hrefLowerCase = title.toLowerCase();

  return (
    <Link href={href ? href : `/${hrefLowerCase}`} passHref>
      <a className="hover:transition-colors hover:no-underline hover:opacity-80">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          {title}
        </motion.h2>
      </a>
    </Link>
  );
};
