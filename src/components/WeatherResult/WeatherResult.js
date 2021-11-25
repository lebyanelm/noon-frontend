import React from "react";
import styles from "./WeatherResult.module.scss";

const WeatherResult = ({ areaName, data }) => {
  const [isCelcius, setIsCelcius] = React.useState(false);
  
  return (<React.Fragment>
    {
      data && (<div className={styles.WeatherResultContainer}>
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
          <div className={styles.Temperature} onClick={() => setIsCelcius(!isCelcius)} title="Change the unit of the temperature.">
            <div className={styles.PanelTitle}>Weather Conditions</div>
            <div className={styles.PanelValue}>
              <div>
                <img src={data?.condition.icon} alt="Weather condition" />
              </div>
              <div>
                <div className="header" style={{cursor: "pointer"}}>
                  <span className={styles.PanelTemperature}>{isCelcius ? data?.temp_c : data?.temp_f} &deg;</span>{" "}
                  <span class="header theme-color">{isCelcius ? "Celcius" : "Fahrenheit"}</span>
                </div>
                <span className={styles.ConditionText}>{data?.condition.text}</span>
              </div>
            </div>
          </div>
  
          <div className={styles.More}>
            <div className={styles.MiniPanel}>
              <div className={styles.PanelName}>Humidity</div>
              <div className={styles.PanelValue}>{data?.humidity}%</div>
            </div>
  
            <div className={styles.MiniPanel}>
              <div className={styles.PanelName}>Precipitation</div>
              <div className={styles.PanelValue}>{data?.precip_mm}mm</div>
            </div>
  
            <div className={styles.MiniPanel}>
              <div className={styles.PanelName}>Wind Speed</div>
              <div className={styles.PanelValue}>{data?.wind_mph}mph</div>
            </div>
          </div>
        </div>
      </div>)
    }
  </React.Fragment>)
};

export default WeatherResult;
