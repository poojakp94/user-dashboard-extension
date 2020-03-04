import React from "react";
import { Greetings } from "./Greetings";
import { NameEditor } from "./NameEditor";

const UserName = ({ currentTime, isEditingName, setEditingName }) => {
  
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
      {isEditingName ? (<NameEditor
          setEditingName={setEditingName}
          onDoneEditing={() => {
            setEditingName(false);
          }}
        />
      ) : (<Greetings currentTime={currentTime} />

    )}
    </div>
  );
};
export default UserName;
