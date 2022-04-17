import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import user from "@/constant/data";
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
            <div className="space-x-4 flex flex-row items-center">
              <Link href={user.socialLinks.instagram}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-6 w-6 text-pink-600 dark:text-gray-300"
                />
              </Link>
              <Link href={user.socialLinks.linkedin}>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-6 w-6 text-blue-600 dark:text-gray-300"
                />
              </Link>
              <Link href={user.socialLinks.github}>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-6 w-6 text-gray-900 dark:text-gray-300"
                />
              </Link>
              <Link href={user.socialLinks.facebook}>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-6 w-6 text-blue-700 dark:text-gray-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
