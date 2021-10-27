import React from "react";
import styles from "./Wrapper.module.scss";

const Wrapper = ({ children }) => (
  <div className={styles.Wrapper}>{children}</div>
);

export default Wrapper;
