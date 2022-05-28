import { FC } from "react";
import { Link } from "components";
import { user, socialLinks } from "config";

export const Footer: FC = () => {
  return (
    <footer className="text-gray-700 dark:text-gray-400  rounded-lg ">
      <div className="from-[#b09da8] via-[#ebfffe] to-white bg-opacity-10">
        <div className=" px-4 py-10 pt-0 md:py-20">
          <p className="h-0.5 w-full bg-white dark:bg-gray-700" />
          <div className="max-w-6xl mx-auto flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
            <div>
              <p>&copy; Nvvvrro. All Rights Reserved.</p>
            </div>

            <div className="flex flex-col md:flex-row">
              <p>Developed by</p>
              <div className="flex flex-col md:flex-row transform hover:scale-105 transition duration-300">
                <div className="rounded-md px-1 hover:bg-gradient-to-r hover:from-[#b09da8] hover:to-indigo-500  hover:text-gray-50">
                  <Link href={user.socialLinks.github}>Marcelo Navarro</Link>
                </div>
              </div>
            </div>
            <div className="space-x-6 flex flex-row items-center justify-end">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
