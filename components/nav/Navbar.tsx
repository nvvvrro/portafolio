import { NavItem } from ".";

export const Navbar = () => {
  return (
    <nav className="bg-primary-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavItem title="Home" href="/" />
              <NavItem title="Blog" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
