import { FC } from "react";
import { user, socialLinks } from "config";
import { Link } from "components";
export const Footer: FC = () => {
  return (
    <footer className="text-gray-700 dark:text-gray-400">
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className=" px-4 py-10 md:py-20">
          <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
          <div className="max-w-6xl mx-auto flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
            <div>
              <p>&copy; Nvvvrro. All Rights Reserved.</p>
            </div>

            <div className="flex flex-col md:flex-row">
              <p>Developed by</p>
              <div className="flex flex-col md:flex-row transform hover:scale-105 hover:-rotate-3 transition duration-300">
                <div className="hover:bg-indigo-500 rounded-md px-2  hover:text-gray-50">
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
