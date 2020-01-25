import React, { useState } from "react";
import Button from "./Button";
const NameEditor = ({ onDoneEditing }) => {
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
            borderBottom: isFocused ? "2px solid #FF6766" : "2px solid #fff",
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
        ></input>
      </label>
      <Button
        name="Set Name"
        onClick={() => {
          localStorage.setItem("name", enteredName);
          onDoneEditing();
          setInputName("");
        }}
        disabled={enteredName === ""}
      />
    </>
  );
};
const Greetings = ({ currentTime }) => {
  return (
    <p
      style={{
        fontSize: "30px"
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

const UserName = ({ currentTime }) => {
  const [isEditingName, setEditingName] = useState(
    !localStorage.getItem("name")
  );

  return (
    <div
      style={{
        fontFamily: "Courier New, Courier, monospace",
        fontWeight: "bold",
        color: "hsla(239, 36%, 82%, 1)",
        fontStyle: "italic",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {isEditingName ? (
        <NameEditor
          onDoneEditing={() => {
            setEditingName(false);
          }}
        />
      ) : (
        <Greetings currentTime={currentTime} />
      )}
    </div>
  );
};
export default UserName;
