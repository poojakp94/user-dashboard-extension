import React from "react";
import strftime from "strftime";

const Time = ({ currentTime, is24Hour }) => {
  return (
    <div
      style={{
        fontSize: "80px",
        color: "white",
        fontWeight: "bolder"
      }}
    >
      {is24Hour
        ? strftime("%H:%M %p", currentTime)
        : strftime("%I:%M %p", currentTime)}
    </div>
  );
};

export default Time;
