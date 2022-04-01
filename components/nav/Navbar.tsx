import Image from "next/image";
import { NavItem } from ".";

export const Navbar = () => {
  return (
  <nav className="container sticky mx-auto top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 dark:bg-opacity-10 border-b border-gray-200 dark:border-gray-600 shadow-sm min-w-full ">
      <div className="flex flex-col max-w-7xl mx-auto gap-2">
        <div className="flex relative items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              className="2xl:block cursor-pointer hover:opacity-80 transition-opacity duration-200 h-full w-full block mx-auto"
              src="/images/nvvvrro.png"
              width={340}
              height={34}
              alt="Navarro"
            />
          </div>

          <div className="flex-auto w-full py-6 pl-9 gap-4 items-center justify-end px-12 md:px-16">
            <ul className="flex sm:space-x-14 space-x-8  items-center justify-end font-medium md:text-lg text-sm  text-pink-700 uppercase">
              <NavItem title="Home" href="/" />
              <NavItem title="Blog" />
              <NavItem title="Resume" />
              <NavItem title="Contact" />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
