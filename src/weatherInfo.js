import React from "react";
import currentDate from "./currentDate";

export default function weatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>currentDate date={weatherData.date} /></li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Wind: {weatherData.wind} kmh</li>
            <li>Humidity: {weatherData.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
