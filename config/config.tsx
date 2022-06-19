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
    icon: faInstagram,
  },
  {
    name: "linkedin",
    path: "https://linkedin.com/in/navarro-marcelo",
    icon: faLinkedin,
  },
  {
    name: "github",
    path: "https://github.com/nvvvrro",
    icon: faGithub,
  },
  {
    name: "facebook",
    path: "https://www.facebook.com/marceloignacio.navarrocarrillo",
    icon: faFacebook,
  },
];
