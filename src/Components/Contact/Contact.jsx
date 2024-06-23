import React from "react";
import styles from "./Contact.module.css";
import img from "./banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <p className={styles.content}>CARZUU HELP CENTER</p>
      <p className={styles.help}>Hi, What Can We Help You With?</p>
      <p className={styles.vomi}>Get an Early Look at New Carzuu Help Center</p>

      <div className={styles.input}>
        <input type="text" placeholder="Search the Help Center" />
        <button className={styles.submit}>Submit</button>
      </div>

      <div className={styles.imageContainer}>
        <img src={img} alt="Banner" className={styles.bannerImage} />
        <div className={styles.category}>
          <p>Get the early look at the new Carzuu Center</p>
          <button className={styles.tryit}>Try it now</button>
        </div>
      </div>

      <div className={styles.containers}>
        <button className={styles.container1}>
          Accounting and Billing Issues
        </button>
        <button className={styles.container2}>App Issue</button>
        <button className={styles.container3}>
          Download and Installation Issue
        </button>
      </div>

      <div className={styles.socialMedia}>
        <p className={styles.socialText}>Connect with us on social media:</p>
        <div className={styles.socialIcons}>
          <a href="https://www.gmail.com" className={styles.icon}>
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="https://www.linkedin.com/in/tushar-naugain-aa3152292/" className={styles.icon}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/__skipper_04/" className={styles.icon}>
            <FontAwesomeIcon icon={faInstagram} /></a>

          <a href="https://www.instagram.com/__skipper_04/" className={styles.icon}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
