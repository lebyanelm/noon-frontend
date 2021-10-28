import React from "react";
import PropTypes from "prop-types";
import styles from "./Landing.module.scss";

// COMPONENTS
import Header from "../../components/Header/Header.lazy";
import Footer from "../../components/Footer/Footer.lazy";

const Landing = () => (
  <React.Fragment>
    <Header></Header>
    <React.Fragment>
      <section>
        <div>
          <span className="subheader">MICRO WEATHER WEB FOR HUMANS</span>
          <span className="header">
            Discover{" "}
            <span
              className="header theme-color underline"
              style={{ display: "inline-block" }}
            >
              better
            </span>{" "}
            predictability from a distance.
          </span>

          <p>
            Use Noon to discover weather changes and subscribe to our platform
            for SMS notifications on weather updates everyday.
          </p>

          <div className="buttons">
            <a className="button" href="/forecast?intent=search">
              Discover Forecast
            </a>
            <a className="button bordered" href="/forecast?intent=subscribe">
              Subscribe to Forecast
            </a>
          </div>
        </div>
        <div>
          <img src="/drawkit-daily-life-vector-illustration-13.svg" alt="" />
        </div>
      </section>

      <div className={styles.RatingTextSpace}>
        Average rating of <b>4.56</b> from <b>435</b> reviews. With out of the
        box <b>quality intergrations</b>.
      </div>

      <div className={styles.ThirdpartyIntegrations}>
        <img src="/images/1024px-Mapbox_logo_2017.png" alt="Mapbox Logo" />
        <img src="/images/google-geocoding.png" alt="Google Geocoding Logo" />
        <img src="/images/textbelt.png" alt="Textbelt Logo" />
        <img src="/images/open_weather.png" alt="Open Weather Logo" />
        <img src="/images/weatherapi_logo.png" alt="Weather API Logo" />
      </div>

      <section className="column">
        <div>
          <div style={{ width: "60%", margin: "0 auto" }}>
            <span className="subheader">MINIMAL MISTAKES</span>
            <div className="header">
              Accurate and{" "}
              <span
                className="header theme-color underline"
                style={{ display: "inline-block" }}
              >
                tested
              </span>{" "}
              data of the box.
            </div>
            <p>
              The weather data is from an official source contributed by a
              trusted community. You can rate the accuracy of the data as you
              need.
            </p>
          </div>

          <div>
            <img
              src="/illustrations/drawkit-daily-life-vector-illustration-12.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        <div>
          <img
            src="/illustrations/drawkit-daily-life-vector-illustration-02.png"
            alt=""
          />
        </div>
        <div className="header">
          <span className="subheader">PLAN AHEAD OF TIME</span>
          Because our systems are{" "}
          <span
            className="header theme-color underline"
            style={{ display: "inline-block" }}
          >
            lightning fast
          </span>
          .
          <p style={{ lineHeight: "1rem" }}>
            Have the ability to plan your week ahead for your daily tasks and
            accomplish your outside activities.
          </p>
        </div>
      </section>
    </React.Fragment>
    <Footer></Footer>
  </React.Fragment>
);

export default Landing;
