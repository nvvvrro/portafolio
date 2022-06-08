import { HeroImage } from "./heroImage";
import { Quotes } from "./quotes";

export const Welcome = () => (
  <div className="flex flex-col md:flex-row md:space-x-8 justify-center">
    <p className="sm:text-2xl text-sm font-light text-center">
      Bienvenido a mi blog y portfolio. Aquí Encontrarás mis &nbsp;
      <br />
      <span className="sm:font-normal font-bold ">
        proyectos, ideas y experiencias.
      </span>
    </p>
  </div>
);

export const Hero = () => (
  <>
    <Welcome />
    <div className="flex flex-col md:flex-row items-center sm:justify-between sm:pb-5 sm:px-10">
      <div className="lg:text-5xl sm:text-4xl text-2xl tracking-widest w-11/12 sm:w:full ">
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
