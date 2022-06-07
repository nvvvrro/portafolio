import { FC } from "react";
import { LifeCycle } from "@/assets/lifeCycle";

interface PropsHeroImage {
  className?: string;
}

export const HeroImage: FC<PropsHeroImage> = ({ className = "" }) => {
  return (
    <div
      className={`${className} relative flex flex-col lg:mt-0 mt-2 z-0`}
    >
      <LifeCycle
        width={500}
        height={500}
        className="md:h-full md:w-full w-60 h-60"
      />
    </div>
  );
};
