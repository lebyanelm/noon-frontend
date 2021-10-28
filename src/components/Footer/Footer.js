import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className={styles.Footer}>
    <div className={styles.FooterTop}>
      <div>
        <div>
          <Link to="/">
            <img src="/logo192.png" alt="Footer Logo" />
          </Link>
          <span>
            <b>Noon</b>weather
          </span>
        </div>
      </div>

      <p>
        Built with <b>React</b> and ❤ by <b>Libby Lebyane</b> for portfolio
        purposes only.
      </p>
    </div>

    <div className={styles.FooterBottom}>
      <a href="">Check your weather</a>
      <a href="">Open-Source Lisences</a>
      <a href="">Source-Code</a>
      <a href="">Figma Designs</a>
      <a href="">About Creator</a>
    </div>
  </div>
);

export default Footer;
