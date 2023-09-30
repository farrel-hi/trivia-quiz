import React from "react";
import "./UserName.css";

function UserName(props) {
  return (
    <div className="username">
      <h2>Username: {props.name}</h2>
    </div>
  );
}

export default UserName;