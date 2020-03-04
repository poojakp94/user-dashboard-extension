import React, { useState } from "react";
import Button from "./Button";

export const NameEditor = ({ onDoneEditing, setEditingName }) => {
  const [enteredName, setInputName] = useState("");
  const [isFocused, setFocusedState] = useState(false);
  return (
    <>
      <label
        style={{
          width: "100%",
          position: "relative"
        }}
      >
        <span
          style={{
            position: "absolute",
            fontSize: isFocused ? "0.9rem" : "1.5rem",
            transform: isFocused ? "translate(0, -20px)" : "none",
            transition: "font-size 0.3s, transform 0.3s"
          }}
        >
          Enter Your Name
        </span>
        <input
          style={{
            maxWidth: "100%",
            border: "0",
            borderBottom: isFocused ? "2px solid #cyan" : "2px solid #fff",
            background: "transparent",
            color: "white",
            fontSize: "1.5rem",
            outline: "0"
          }}
          type="text"
          value={enteredName}
          onChange={event => {
            event.preventDefault();
            const { value } = event.target;
            setInputName(value);
          }}
          onFocus={() => {
            setFocusedState(true);
          }}
          onBlur={event => {
            if (event.target.value === "") {
              setFocusedState(false);
            }
          }}
          onKeyPress={event => {
            if (event.key === "Enter") {
              localStorage.setItem("name", enteredName);
              onDoneEditing();
              setInputName("");
            }
          }}
        ></input>
      </label>
      <div>
        <Button
          name="Set Name"
          style={{ width: "100px", marginRight: "10px" }}
          onClick={() => {
            localStorage.setItem("name", enteredName);
            onDoneEditing();
            setInputName("");
          }}
          disabled={enteredName === ""}
        />
        <Button
          name="Cancel"
          style={{ width: "100px" }}
          onClick={() => {
            setEditingName(false);
          }}
        />
      </div>
    </>
  );
};
