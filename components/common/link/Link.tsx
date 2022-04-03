import React, { FC, useCallback } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import type { LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
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
      <a
        onClick={handleClick}
        role="link"
        tabIndex={0}
        className={`hover:no-underline ${className}`}
      >
        {children}
      </a>
    </NextLink>
  );
};
