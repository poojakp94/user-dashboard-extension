/*global chrome*/
import React, { useState, useEffect } from "react";
import getWeather from "../utils/getWeather"
const Weather = () => {
  const [currentWeather, setWeather] = useState([]);
  const [iconUrl, setIconUrl] = useState("");

  useEffect(() => {
    // let getData = getWeather();
    // getData
    //   .then(response => response.json())
    //   .then(data => {
    //     const { temp } = data.main;
    //     const { icon: iconCode } = data.weather[0];
    //     setIconUrl(`http://openweathermap.org/img/w/${iconCode}.png`);
    //     const str = `${temp}°C`;
    //     setWeather(str);
    //   });

    const intervalId = setInterval(() => {
      let getData = getWeather();
      getData
        .then(response => response.json())
        .then(data => {
          const { temp } = data.main;
          const { icon: iconCode } = data.weather[0];
          setIconUrl(`http://openweathermap.org/img/w/${iconCode}.png`);
          const str = `${temp}°C`;
          setWeather(str);
        });
    }, 6000);
    // return () => {
      clearInterval(intervalId);
    // };
  }, []);
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        paddingTop: "8px",
        color: "white",
        textAlign: "center",
        fontSize: "12px",
        height: "50px",
        width: "50px",
        position: "absolute",
        top: "10px",
        right: "10px"
      }}
    >
      {currentWeather}
      <img
        style={{
          display: iconUrl === "" ? "none" : "block"
        }}
        src={iconUrl}
        alt="weather"
      />
    </div>
  );
};

export default Weather;
