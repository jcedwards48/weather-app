import React, { useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  
  }

  if (ready) {}
    return (
      <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
          <input
            type="search"
            placeholder="Enter city name"
            className="form-control"
          />

          <input type="submit" value="Search" className="btn btn-primary" />
         </div>
        </div>
      </form>

      <h1>Blythewood</h1>
       <ul>
        <li> Tuesday 10:00 </li>
        <li> Sunny </li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny image"
            className="float-left"
          />
          <div className="float-left">
            <span className="temperature">{Math.round(temperature)}</span>
            <span className="unit">°C</span>
          </div>
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
  } else {

  let apiKey = "8799882eec11a6cae9364a17c61e256e";
  let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
 }
}   