import { HeroImage } from "./heroImage";
import { Quotes } from "./quotes";

export const Welcome = () => (
  <div className="flex flex-col md:flex-row md:space-x-8 justify-center">
    <p className="sm:text-2xl text-lg font-light text-center md:text-right">
      Bienvenido a mi blog y portfolio. Aquí encontraras mis &nbsp;
      <p className="sm:font-normal font-medium">
        proyectos, ideas y experiencias.
      </p>
    </p>
  </div>
);

export const Hero = () => (
  <>
    <Welcome />
    <div className="flex flex-col md:flex-row items-center sm:justify-between gap-2 sm:p-8 ">
      <div className="lg:text-5xl sm:text-4xl text-2xl tracking-widest z-10 w-11/12 sm:w:full ">
        <span className="flex font-normal tracking-widest justify-start">
          Desarrollando
        </span>
        <span className="flex font-thin tracking-wide justify-start">
          Software&nbsp;
          <Quotes className="inline-flex font-normal tracking-wide" />
        </span>
      </div>
      <div className="flex justify-center md:justify-end z-0">
        <HeroImage />
      </div>
    </div>
  </>
);
