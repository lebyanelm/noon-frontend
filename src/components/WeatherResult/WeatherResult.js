import React from "react";
import styles from "./WeatherResult.module.scss";

const WeatherResult = ({ areaName }) => (
  <React.Fragment>
    <div className={styles.WeatherResultContainer}>
      <div className="header">
        Temperature forecast for{" "}
        <span
          className="header theme-color underline"
          style={{ display: "inline-block" }}
        >
          {areaName ? areaName : "area"}.
        </span>
      </div>

      <div className={styles.ResultContents}>
        <div className={styles.Temperature}>
          <div className={styles.PanelTitle}>Today's Weather Conditions</div>
          <div className={styles.PanelValue}>
            <div>
              <img src="/images/cloud.png" alt="Weather condition" />
            </div>
            <div>
              <div className="header">
                <span className={styles.PanelTemperature}>21.64</span>{" "}
                <span class="header theme-color">Celcius</span>
              </div>
              <span className={styles.ConditionText}>Partly Cloudy</span>
            </div>
          </div>
        </div>

        <div className={styles.More}>
          <div className={styles.MiniPanel}>
            <div className={styles.PanelName}>Humidity</div>
            <div className={styles.PanelValue}>60%</div>
          </div>

          <div className={styles.MiniPanel}>
            <div className={styles.PanelName}>Precipitation</div>
            <div className={styles.PanelValue}>13.5mm</div>
          </div>

          <div className={styles.MiniPanel}>
            <div className={styles.PanelName}>Wind Speed</div>
            <div className={styles.PanelValue}>5.67mph</div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default WeatherResult;
