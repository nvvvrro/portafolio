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
    <ul className="text-secondary-main">
      <Link href={href ? href : `/${hrefLowerCase}`}>
        <a className="hover: transition-colors ">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1></h1>
            {title}
          </motion.h2>
        </a>
      </Link>
    </ul>
  );
};
