import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"; // Import the CSS module

function Header() {
  const [contactOpen, setContactOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const handleContactToggle = () => {
    setContactOpen(!contactOpen);
  };

  const handleAboutToggle = () => {
    setAboutOpen(!aboutOpen);
  };

 

  return (
    <header className={styles.headerContainer}>
      <span className={styles.headerItem}>
        <Link to="/" className={styles.headerLink}>Home</Link>
      </span>
    



      <span className={styles.headerItem}>
        <Link to="/about" className={styles.headerLink}>About Us</Link>
        <button
          className={`${styles.toggleButton} ${aboutOpen ? styles.open : ""}`}
          onClick={handleAboutToggle}
        >
          ☰ 
        </button>
        {aboutOpen && (
          <ul className={styles.dropdownMenu}>
            <li>
              <Link to="/about" className={styles.headerLink}>Our Mission</Link>
            </li>
            <li>
              <Link to="/about" className={styles.headerLink}>Our Team</Link>
            </li>
          </ul>
        )}
      </span>
     
     
     
     
     
     
     

      <span className={styles.headerItem}>
        <Link to="/contact" className={styles.headerLink}>Help</Link>
        <button

          className={`${styles.toggleButton} ${contactOpen ? styles.open : ""}`}
          onClick={handleContactToggle}
        >
          ☰ 
        </button>
        {contactOpen && (
          <ul className={styles.dropdownMenu}>
            <li>
              <Link to="/contact" className={styles.headerLink}>Contact Form</Link>
            </li>
            <li>
              <Link to="/contact" className={styles.headerLink}>Contact Information</Link>
            </li>
          </ul>
        )}
      </span>



    </header>
  );
}

export default Header;
