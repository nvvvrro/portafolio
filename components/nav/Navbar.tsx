import { NavItem, DarkMode, Logo } from "components";

export const Navbar = () => {
  return (
    <header className="container sticky mx-auto top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 dark:bg-opacity-10 border-b border-gray-200 dark:border-gray-600 shadow-sm min-w-full ">
      <nav className="flex flex-col max-w-7xl mx-auto gap-2">
        <div className="flex relative items-center justify-between h-20 px-8">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="flex-auto w-full py-6 pl-9 gap-4 items-center justify-end px-8 md:px-16">
            <ul className="flex sm:space-x-14 space-x-8  items-center justify-end font-medium md:text-lg text-sm  text-pink-700 uppercase">
              <NavItem title="Home" href="/" />
              <NavItem title="Blog" />
              <NavItem title="Resume" />
              <NavItem title="Contact" />
            </ul>
          </div>
        </div>

        <DarkMode />
      </nav>
    </header>
  );
};

export default Navbar;
