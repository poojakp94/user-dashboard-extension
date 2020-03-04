/*global chrome*/
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "./components/Button";
import Time from "./components/setTime";
import UserName from "./components/userName";
import defaultImageSource from "./media/defaultImg.jpg";
import SettingsBox from "./components/settings";

const App = () => {
  const [currentImg, setImg] = useState(defaultImageSource);
  const [currentTime, updateTime] = useState(new Date());
  const [isShowingSettings, setSettingsVisibility] = useState(false);
  const [isEditingName, setEditingName] = useState(
    !localStorage.getItem("name")
  );
  if (localStorage.getItem("is24Hour") === null) {
    localStorage.setItem("is24Hour", false);
  }
  const [is24Hour, setTimeFormat] = useState(
    localStorage.getItem("is24Hour") === "true"
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime(new Date());
    }, 600);

    function logStorageChange(changes) {
      if (changes.hasOwnProperty("blob")) {
        chrome.storage.local.get(["blob"], function(result) {
          setImg(result.blob);
        });
      }
    }
    chrome.storage.onChanged.addListener(logStorageChange);

    chrome.storage.local.get(["blob"], function(result) {
      setImg(result.blob);
    });

    return () => {
      clearInterval(intervalId);
    };
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
      onClick={() => {
        if (isShowingSettings) {
          setSettingsVisibility(false);
        }
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
        <Time currentTime={currentTime} is24Hour={is24Hour} />
        <UserName
          currentTime={currentTime}
          isEditingName={isEditingName}
          setEditingName={setEditingName}
        />
      </div>

      <Button
        name="✎"
        style={{
          position: "absolute",
          fontSize: "30px",
          left: "5px",
          bottom: "5px",
          width: "50px",
          color: "black"
        }}
        onClick={() => {
          setSettingsVisibility(true);
        }}
      />
      <SettingsBox
        open={isShowingSettings}
        setEditingName={setEditingName}
        is24Hour={is24Hour}
        setTimeFormat={setTimeFormat}
        onClick={() => {
          setSettingsVisibility(false);
        }}
      />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
