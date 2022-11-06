import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

function handleResponse(response) {
  setForecast(response.data.daily);
  setLoaded(true);
}

 if (loaded) {
   return (
     <div className="WeatherForecast">
       <div className="row">
         <div className="col">
          <WeatherForecastDay data={forecast[0].dt} />
           
         </div>
       </div>
     </div>
   );
   
 } else {
   let apiKey = "8799882eec11a6cae9364a17c61e256e";
   let longitude = props.coordinates.lon;
   let latitude = props.coordinates.lat;
   let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=S{longitude}&appid=${apiKey}&units=metric`;

   axios.get(apiUrl).then(handleResponse);

   return(null);
 }
}
