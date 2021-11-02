import React from "react";
import PropTypes from "prop-types";
import styles from "./Forecast.module.scss";
import * as superagent from "superagent";

// COMPONENTS
import Header from "../../components/Header/Header.lazy";
import Footer from "../../components/Footer/Footer.lazy";
import WeatherResult from "../../components/WeatherResult/WeatherResult.lazy";

const Forecast = () => {
  let [areaName, setAreaName] = React.useState("");
  let [suggestions, setSuggestions] = React.useState([]);
  let [isShowSuggestions, setShowSuggestions] = React.useState(false);
  let [selectedSuggestion, setSelectedSuggestion] = React.useState(null);

  const selectSuggestion = (suggestion) => {
    setAreaName(suggestion.name);
    setShowSuggestions(false);
    setSelectedSuggestion(suggestion);
  }

  // For automatically detecting the user's location using an IP Address
  React.useEffect(() => {
    superagent
      .get([process.env.REACT_APP_API_ENDPOINT, "auto-location"].join(""))
      .end((_, response) => {
        if (response) {
          if (response.status === 200) {
            setAreaName(response.body.data.formatted_address);
            setShowSuggestions(false);
          } else {
            console.error(response.body ? response.body.reason : "Something went wrong.");
          }
        } else {
          console.error("No internet connection");
        }
      })
  }, []);

  // When user types an area name give out suggestions of related places
  React.useEffect(() => {
    if (selectedSuggestion === null) {
      superagent
      .get(
        [
          process.env.REACT_APP_API_ENDPOINT,
          "suggestions?query=",
          areaName,
        ].join("")
      )
      .end((_, response) => {
        if (response) {
          if (response.statusCode === 200) {
            setSuggestions(response.body.data);
            setShowSuggestions(true);
          } else {
            console.log(response.body.reason);
            setShowSuggestions(false);
          }
        } else {
          setShowSuggestions(false);
          console.log("No internet connection.");
        }
      });
    }
  }, [areaName]);

  return (
    <React.Fragment>
      <Header></Header>

      <section className="column">
        <div>
          <div className={styles.InputContainer}>
            <input
              type="text"
              placeholder="Enter a city name"
              value={areaName}
              onChange={(e) => {
                setAreaName(e.target.value);
                setSelectedSuggestion(null);
              }}
            />
            <button>Find Forecast</button>

            {
              isShowSuggestions && (
              <div className={styles.InputSuggestions}>
                {suggestions.map((suggestion) => (
                  <div className={styles.InputSuggestion} onClick={() => selectSuggestion(suggestion)}>
                    <span>{suggestion.name}</span>
                  </div>
                ))}
              </div>
              )
            }
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
