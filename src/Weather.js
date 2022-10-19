import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let apiKey = "8799882eec11a6cae9364a17c61e256e";
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  return (
    <div className="Weather">
      <form>
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter city name"
            className="form-control"
          />

          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </form>

      <h1>Blythewood</h1>
      <ul>
        <li> Tuesday 10:00 </li>
        <li> Sunny </li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny image"
          />
          6°
        </div>
      </div>

      <div className="col-6">
        <ul>
          <li>Precipitation 15%</li>
          <li>Wind 5 kmh</li>
          <li>Humidity 90%</li>
        </ul>
      </div>
    </div>
  );
}
