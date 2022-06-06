import { SVGProps, FC } from "react";
import {
  faFileLines,
  faMagnifyingGlassChart,
  faCompassDrafting,
  faRocket,
  faFlaskVial,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Circle, PwaIcon } from "assets";
import { useDarkMode } from "hooks";

export const LifeCycle: FC<SVGProps<SVGSVGElement>> = (props) => {
  const [theme] = useDarkMode();

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="-10 0 500 450"
        width={500}
        height={450}
        {...props}
      >
        <Circle
          cx={220}
          cy={230}
          r={180}
          fill={theme === "dark" ? "#171120" : "#f2f2f2"}
          animate={{
            scale: 1.1,
            transition: {
              duration: 1.3,
              ease: "easeInOut",
              delay: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />

        {/* Planificacion */}
        <Circle cx={216} cy={47} r={47} values="#e863ff;#a855f7;#e863ff" />
        <FontAwesomeIcon
          icon={faFileLines}
          width="55"
          height="55"
          transform="right-55 down-5"
          style={{ color: "white" }}
        />
        {/* Analisis */}
        <Circle cx={378} cy={135} r={47} values="#e863ff;#a855f7;#e863ff" />
        <FontAwesomeIcon
          icon={faMagnifyingGlassChart}
          width="54"
          height="54"
          transform="right-104 down-31"
          style={{ color: "white" }}
        />
        {/* Diseño */}
        <Circle cx={391} cy={315} r={47} values="#e863ff;#a855f7;#e863ff" />
        <FontAwesomeIcon
          icon={faCompassDrafting}
          width="54"
          height="54"
          transform="right-108 down-85"
          style={{ color: "white" }}
        />
        {/* Implementacion */}
        <Circle cx={216} cy={410} r={47} values="#e863ff;#a855f7;#e863ff" />
        <FontAwesomeIcon
          icon={faRocket}
          width="54"
          height="54"
          transform="right-55 down-114"
          style={{ color: "white" }}
        />
        {/* Desarrollo */}
        <Circle cx={60} cy={315} r={47} values="#e863ff;#a855f7;#e863ff" />
        <FontAwesomeIcon
          icon={faFlaskVial}
          width="54"
          height="54"
          transform="right-12 down-107"
          style={{ color: "white" }}
        />
        {/* Mantencion */}
        <Circle cx={70} cy={135} r={47} values="#e863ff;#a855f7;#e863ff" />
        <FontAwesomeIcon
          icon={faScrewdriverWrench}
          width="54"
          height="54"
          transform="right-13 down-32"
          style={{ color: "white" }}
        />
        <PwaIcon />
      </svg>
    </div>
  );
};
