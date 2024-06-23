import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleFindStationClick = () => {
        navigate('/find-a-station'); 
    };

    return (
        <nav className={styles.navbar}>
            <button className={`${styles.hamburgerMenu} hamburgerIcon`} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            <div className={styles.logo}>
                <img src="/images/Z-logo.png" alt='Z Logo' className={styles.logoImage} />
            </div>

            <div className={`${styles.navMenu} ${isMenuOpen ? 'active' : ''}`}>
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

            <div className={styles.searchBar}>
                <button className={styles.stationButton} onClick={handleFindStationClick}>Find a station</button>
                <input className={styles.searchInput} type="text" placeholder="Search" />
                <button className={styles.searchButton}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>

        </nav>
    );
}

export default NavBar;
