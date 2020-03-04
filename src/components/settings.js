import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

function SettingsBox({
  open,
  setEditingName,
  onClick,
  setTimeFormat,
  is24Hour
}) {
  function dialog() {
    if (open) {
      return (
        <div
          style={{
            backgroundColor: "rgb(0, 0, 0, 0.6)",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            height: "130px",
            width: "150px",
            position: "absolute",
            bottom: "30px",
            left: "25px"
          }}
          onClick={onClick}
        >
          <Button
            name="change name"
            style={{ width: "150px", display: "block" }}
            onClick={() => {
              setEditingName(true);
            }}
          />
          <Button
            name={is24Hour ? "12 Hour" : "24 Hour"}
            style={{ width: "150px", display: "block" }}
            onClick={() => {
              setTimeFormat(!is24Hour);
              localStorage.setItem("is24Hour", !is24Hour);
            }}
          />
        </div>
      );
    }
  }

  return ReactDOM.createPortal(
    dialog(),
    document.getElementById("portal-root")
  );
}

export default SettingsBox;
