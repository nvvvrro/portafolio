import { HeroImage } from "./heroImage";
import { Quotes } from "./quotes";

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row lg:items-center items-start sm:justify-between gap-2 sm:p-8 p-4">
      <div className="z-0 lg:text-5xl sm:text-4xl text-3xl tracking-widest">
        <span className="flex font-normal tracking-widest pl-4">
          Desarrollando
        </span>

        <span className="flex font-light tracking-wide">
          Software&nbsp;
          <Quotes className="inline-flex exfont-normal tracking-wide" />
        </span>
      </div>

      <HeroImage />
    </div>
  );
};
