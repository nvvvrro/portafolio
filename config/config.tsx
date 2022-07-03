import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import {
  faHome,
  faFileContract,
  faSatelliteDish,
} from "@fortawesome/free-solid-svg-icons";

export const routes = [
  {
    title: "Home",
    path: "/",
    icon: faHome,
  },
  {
    title: "Blog",
    path: "/blog",
    icon: faFileCode,
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
    name: "github",
    path: "https://github.com/nvvvrro",
    icon: faGithub,
  },
  {
    name: "linkedin",
    path: "https://linkedin.com/in/navarro-marcelo",
    icon: faLinkedin,
  },
  {
    name: "instagram",
    path: "https://instagram.com/nvvvrro",
    icon: faInstagram,
  },
  {
    name: "facebook",
    path: "https://www.facebook.com/marceloignacio.navarrocarrillo",
    icon: faFacebook,
  },
];
