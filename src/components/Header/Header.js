import React from "react";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.Header}>
    <nav className={styles.HeaderContainer}>
      <div className={styles.LogoBrand}>
        <b>Noon</b>Weather
      </div>

      <ul>
        <a href="">Discover</a>
        <a href="">My Forecast</a>
        <a href="">Open-Source Lisence</a>
        <a href="" className="button">
          Subscribe to Updates
        </a>
      </ul>
    </nav>
  </div>
);

export default Header;
