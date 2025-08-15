import { faLightbulb } from "@fortawesome/free-solid-svg-icons/faLightbulb";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import { useTheme, useThemeUpdate } from "../../ThemeContext";
import myLogo from "../../assets/AU.svg";
import lightsSound from "../../assets/sounds/Switch.wav";
import navigation from "../../data/navigation.data";
import classes from "./Header.module.scss";




const Header = () => {
  const isDark = useTheme();
  const toggleDarkTheme = useThemeUpdate();
  const [playLightsSound] = useSound(lightsSound, {
    sprite: {
      lightsOn: [0, 300],
      lightsOff: [2100, 300],
    },
  });

  const handleThemeChange = () => {
    toggleDarkTheme();
    playLightsSound({ id: isDark ? "lightsOn" : "lightsOff" }); // Use derived ID function
  };
  return (
    <header className={[classes.Header, isDark && classes.Dark].join(" ")}>
      <div className={classes.HeaderContent}>
        <Link
          to="/"
          className={classes.Logo}
          title="Adham Usama"
        >
          <img src={myLogo} alt="Adham Usama" />
        </Link>
        <div className={classes.Actions}>
          <button onClick={handleThemeChange} title={isDark ? "Light mode" : "Dark mode"}>
            <FontAwesomeIcon icon={isDark ? faLightbulb : faMoon} />
          </button>
          <nav>
            <ul>
              {navigation?.map((nav, idx) => (
                <li key={idx}>
                  <Link to={"/" + nav.link}>
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;