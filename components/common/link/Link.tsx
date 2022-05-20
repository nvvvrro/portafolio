import React, { FC, useCallback } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import type { LinkProps as NextLinkProps } from "next/link";
import type { MotionProps } from "framer-motion";

export interface LinkProps extends NextLinkProps, MotionProps {
  className?: string;
}

export const Link: FC<LinkProps> = ({
  children,
  href,
  className,
  ...props
}) => {
  const router = useRouter();

  const handleClick = useCallback(
    (e) => {
      if (router.asPath === href) {
        e.preventDefault();
      }
    },
    [href, router.asPath]
  );

  return (
    <NextLink href={href} passHref {...props}>
      <motion.a
        onClick={handleClick}
        role="link"
        tabIndex={0}
        className={`hover:no-underline ${className}`}
        {...props}
      >
        {children}
      </motion.a>
    </NextLink>
  );
};
