import React from "react";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.Header}>
    <nav className={styles.HeaderContainer}>
      <div className={styles.LogoBrand}>
        <img src="/logo192.png" alt="Logo" />
        <span>
          <b>Noon</b>weather
        </span>
      </div>

      <ul>
        <a href="">Discover Forecast</a>
        <a href="">Open-Source Lisence</a>
        <a href="" className="button">
          View Figma Designs
        </a>
      </ul>
    </nav>
  </div>
);

export default Header;
