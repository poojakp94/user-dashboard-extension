import React, { useState, useEffect } from "react";

const Weather = () => {
  const [currentWeather, setWeather] = useState([]);
  const [iconUrl, setIconUrl] = useState("");

  
  
  useEffect(() => {
    const userGeolocation = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        resolve(position.coords);
      }, reject);
    });
    const intervalId = setInterval(() => {
      userGeolocation.then(
        coords => {
          const { longitude, latitude } = coords;
          fetch(
            `http://openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_APP_ID}`
          )
            .then(response => response.json())
            .then(data => {
              // const { description } = data.weather[0];
              const { temp } = data.main;
              const { icon: iconCode } = data.weather[0];
              setIconUrl(`http://openweathermap.org/img/w/${iconCode}.png`);
              const str = `${temp}°C`;
              setWeather(str);
            });

        },
        error => {console.log(error)}
      );
      
    }, 6000);
    return () => {
      clearInterval(intervalId);
    };
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
        right: "10px",
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
