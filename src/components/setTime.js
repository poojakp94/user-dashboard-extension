import React from "react";
import { convert24To12 } from "../utils/index.js";

const Time = ({ currentTime }) => (
  <div
    style={{
      fontSize: "80px",
      color: "white",
      fontWeight: "bolder"
    }}
  >
    {convert24To12(`${currentTime.getHours()}:${currentTime.getMinutes()}`)}
  </div>
);

export default Time;
