import React from "react";
import PropTypes from "prop-types";
import styles from "./Forecast.module.scss";

// COMPONENTS
import Header from "../../components/Header/Header.lazy";
import Footer from "../../components/Footer/Footer.lazy";
import WeatherResult from "../../components/WeatherResult/WeatherResult.lazy";

const Forecast = () => {
  let [areaName, setAreaName] = React.useState("");

  return (
    <React.Fragment>
      <Header></Header>

      <section className="column">
        <div style={{ maxWidth: "60%" }}>
          <div className="subheader">Plan ahead of time</div>
          <div className="header">
            Find your{" "}
            <span
              className="header theme-color underline"
              style={{ display: "inline-block" }}
            >
              area
            </span>
            .
          </div>
          <p>
            Search the area you want to view the overcast and forecast weather
            details.
          </p>
        </div>

        <div>
          <div className={styles.InputContainer}>
            <input
              type="text"
              placeholder="Enter a city name"
              onKeyUp={(e) => setAreaName(e.target.value)}
            />
            <button>Find Forecast</button>
          </div>
        </div>
      </section>

      {/* The weather results */}
      <WeatherResult areaName={areaName}></WeatherResult>

      <Footer></Footer>
    </React.Fragment>
  );
};

Forecast.propTypes = {};

Forecast.defaultProps = {};

export default Forecast;
