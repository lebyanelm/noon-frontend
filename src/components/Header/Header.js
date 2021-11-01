import React from "react";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.Header}>
    <nav className={styles.HeaderContainer}>
      <a className={styles.LogoBrand} href="/">
        <img src="/logo192.png" alt="Logo" />
        <span>
          <b>Over</b>astweather
        </span>
      </a>

      <ul>
        <a href="/forecast?intent=search">Discover Forecast</a>
        <a href="">Open-Source Lisence</a>
        <a href="" className="button">
          View Figma Designs
        </a>
      </ul>
    </nav>
  </div>
);

export default Header;
