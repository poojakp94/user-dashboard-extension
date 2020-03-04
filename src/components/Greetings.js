import React from "react";
export const Greetings = ({ currentTime }) => {
  return (
    <p
      style={{
        fontSize: "40px",
        fontFamily:"TimesNewRoman"
      }}

    >
      {currentTime.getHours() >= 3 && currentTime.getHours() < 12
        ? "Good Morning"
        : currentTime.getHours() >= 12 && currentTime.getHours() < 16
        ? "Good Afternoon"
        : "Good Evening"}
      {localStorage.getItem("name") ? `, ${localStorage.getItem("name")}` : ""}
    </p>
  );
};
