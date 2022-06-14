import { FC } from "react";
import { Link } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ItemListProps {
  items: {
    name: string;
    path: string;
    color?: string;
    icon?: IconDefinition;
  }[];
  className?: string;
  children?: React.ReactNode;
}

export const ItemList: FC<ItemListProps> = ({
  items,
  className = "",
  children,
  ...props
}) => {
  if (!Array.isArray(items)) return <>{children}</>;

  return (
    <>
      {items.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            whileTap={{
              scale: 0.9,
            }}
          >
            {item.icon && (
              <FontAwesomeIcon
                name={item.name}
                icon={item.icon}
                className={`${[item.color, className].join(" ")} h-6 w-6`}
                {...props}
              />
            )}
          </Link>
        );
      })}
    </>
  );
};
