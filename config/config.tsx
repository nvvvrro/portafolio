import {
  faDev,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faFileContract,
  faSatelliteDish,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const routes = [
  {
    title: "Home",
    path: "/",
    icon: faHome,
  },
  {
    title: "Blog",
    path: "/blog",
    icon: faDev,
  },
  {
    title: "Resume",
    path: "/resume",
    icon: faFileContract,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: faSatelliteDish,
  },
];

export const socialLinks = [
  {
    name: "instagram",
    path: "https://instagram.com/nvvvrro",
    icon: (
      <FontAwesomeIcon
        icon={faInstagram}
        className="h-6 w-6 text-pink-600 dark:text-gray-300"
      />
    ),
  },
  {
    name: "linkedin",
    path: "https://linkedin.com/in/navarro-marcelo",
    icon: (
      <FontAwesomeIcon
        icon={faLinkedin}
        className="h-6 w-6 text-blue-600 dark:text-gray-300"
      />
    ),
  },
  {
    name: "github",
    path: "https://github.com/nvvvrro",
    icon: (
      <FontAwesomeIcon
        icon={faGithub}
        className="h-6 w-6 text-gray-900 dark:text-gray-300"
      />
    ),
  },
  {
    name: "facebook",
    path: "https://www.facebook.com/marceloignacio.navarrocarrillo",
    icon: (
      <FontAwesomeIcon
        icon={faFacebook}
        className="h-6 w-6 text-blue-700 dark:text-gray-300"
      />
    ),
  },
];
