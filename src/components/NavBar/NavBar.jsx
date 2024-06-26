import styles from "./NavBar.module.css";
import magnifyingGlassIcon from "../../../src/assets/magnifying-glass.svg";
import hamburgerBarIcon from "../../../src/assets/hamburger-bars.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleFindStationClick = () => {
    navigate("/find-a-station");
  };

  return (
    <nav className={styles.navbar}>
      <img src="/images/Z-logo.png" alt="Z Logo" className={styles.logoImage} />

      <div className={styles.mainContent}>
        <div className={styles.navMenu}>
          <div className={styles.menuItem}>
            Products and services <FontAwesomeIcon icon={faChevronDown} />
            <div className={styles.dropdownContent}>
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
            </div>
          </div>
          <div className={styles.menuItem}>
            For businesses <FontAwesomeIcon icon={faChevronDown} />
            <div className={styles.dropdownContent}>
              <a href="#">Business 1</a>
              <a href="#">Business 2</a>
            </div>
          </div>
          <div className={styles.menuItem}>
            Sustainability <FontAwesomeIcon icon={faChevronDown} />
            <div className={styles.dropdownContent}>
              <a href="#">Environment</a>
              <a href="#">Community</a>
            </div>
          </div>
          <div className={styles.menuItem}>
            About Z <FontAwesomeIcon icon={faChevronDown} />
            <div className={styles.dropdownContent}>
              <a href="#">Company Info</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <button
            className={styles.findAStationButton}
            onClick={handleFindStationClick}
          >
            Find a station
          </button>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search"
          />
          <img
            src={magnifyingGlassIcon}
            alt="Magnifying Glass Icon"
            className={styles.magnifyingGlass}
          />
          <span className={styles.divider}></span>

          <img
            src={hamburgerBarIcon}
            alt="Hamburger Bar Icon"
            className={styles.hamburgerMenu}
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
