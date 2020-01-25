import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Button from './components/Button'
import Time from './components/setTime';
import UserName from './components/userName';
import Weather from './components/weather';
import defaultImageSource from './static/anime-desktop-wallpaper.jpg';

const App = () => {
  const [currentImg, setImg] = useState(defaultImageSource);
  const [currentTime, setTime] = useState(new Date());
  const [isShowingSettings, setSettingsVisibility] = useState(false);

  const SettingsBoxInvisivle = () => {
    return (
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0"
        }}
      ></div>
    );
  }
  const SettingsBoxVisible = () => {
    return (
      <div
        style={{
          backgroundColor: "rgb(0, 0, 0, 0.6)",
          padding: "0.5rem",
          borderRadius: "0.5rem",
          height: "190px",
          width: '150px',
          position: 'absolute',
          bottom: '30px',
          left:'25px',
        }}
      >
        <Button
          name="change name"
          style={{ width: "150px", display: "block" }}
        />
        <Button name="24 Hour" style={{ width: "150px", display: "block" }} />
        <Button
          name="change Image"
          style={{ width: "150px", display: "block" }}
        />
      </div>
    );
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 600);

    const intervalIdOfImg = setInterval(() => {
      fetch(
        `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(
            `Oops! request failed with status code ${response.status}`
          );
        })
        .then(bodyData => fetch(bodyData.urls.regular))
        .then(response => {
          if (response.ok) {
            return response.blob();
          }
          throw new Error(
            `Oops! request failed with status code ${response.status}`
          );
        })
        .then(blob => {
          const staticImgUrl = URL.createObjectURL(blob);
          const previousImageObjectUrl = currentImg;
          setImg(staticImgUrl);
          URL.revokeObjectURL(previousImageObjectUrl);
        })
        .catch(error => {
          console.log(error);
        });
    }, 120000);
    return () => {
      clearInterval(intervalId);
      clearInterval(intervalIdOfImg);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="set-center"
      style={{
        background: `url('${currentImg}')  0% 0% / cover`,
        transitionProperty: `background`,
        transitionDuration: "1s",
        position: "relative"
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(0, 0, 0, 0.6)",
          padding: "2rem",
          borderRadius: "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "200px"
        }}
      >
        <Time currentTime={currentTime} />
        <UserName currentTime={currentTime} />
      </div>
      <Weather />
      <Button
        name="✎"
        style={{
          position: "absolute",
          fontSize: "30px",
          left: "5px",
          bottom: "5px",
          width: "50px",
          color: 'black',
        
    
        }}
        onFocus={() => {
          setSettingsVisibility(true);
        }}
        onBlur={() => {
          setSettingsVisibility(false);
        }}
      />
      {isShowingSettings ? SettingsBoxVisible() : SettingsBoxInvisivle()}
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
