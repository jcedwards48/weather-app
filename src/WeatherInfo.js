import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li className="text-capitalize">{props.data.description}</li>
        <li>
          <CurrentDate date={props.data.date} />
        </li>
      </ul>

      <div className="row mt-3">
        <div classNamne="col-6">
          <div className="clearfix">
            <div className="float-left"></div>
            <WeatherIcon code={props.data.icon} />
          </div>

          <div className="float-left">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>

      <div className="col-6">
        <ul>
          <li>Wind: {props.data.wind} kmh</li>
          <li>Humidity: {props.data.humidity}%</li>
        </ul>
      </div>
    </div>
  );
}
