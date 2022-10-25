import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Jeanne C. Edwards and is open-sourced on{" "}
          <a
            href="https://github.com/jcedwards48/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
