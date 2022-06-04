import { FC } from "react";
import { LifeCycle } from "@/assets/lifeCycle";

interface PropsHeroImage {
  className?: string;
}

export const HeroImage: FC<PropsHeroImage> = ({ className = "" }) => {
  return (
    <div
      className={`${className} relative flex flex-col self-center lg:mt-0 mt-2`}
    >
      <LifeCycle
        width={400}
        height={400}
        className="md:h-full md:w-full w-72 h-72"
      />
    </div>
  );
};
