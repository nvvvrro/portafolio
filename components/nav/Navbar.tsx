import Image from "next/image";
import { NavItem } from ".";

export const Navbar = () => {
  return (
    <nav className="container sticky mx-auto top-0 z-10 flex flex-col bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-gray-200 shadow-sm">
      <div className="flex flex-wrap max-w-7xl mx-auto px-4 gap-2 ">
        <div className="flex relative items-center justify-between h-16">
          <div className="flex items-center relative justify-between -px-4 py-6">
            <Image
              className="2xl:block cursor-pointer hover:opacity-80 transition-opacity duration-200 h-full w-full block"
              src="/images/nvvvrro.png"
              width={340}
              height={34}
              alt="Navarro"
            />
          </div>

          <div className="flex-auto w-full py-6 pl-9">
            <ul className="flex space-x-8 items-center justify-end font-medium text-lg text-pink-700 uppercase">
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
