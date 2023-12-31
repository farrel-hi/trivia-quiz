import React from "react";
import "./MainTitle.css"

function MainTitle(props) {
  console.log(props);
  const status = props.status;

  function nextSectionShown(enteredStatus) {
    if (status == false){
      props.onShownNextSection(true);
    }
  }

  return (
    <div className="title">
      <h1>TRIVIA TIMER QUIZ</h1>
      <h2>Welcome to our General Knowledge Quiz!</h2>
      <div className="instruction">
        <h2>Instruction:</h2>
        <h2>You have 10 Minutes to answer all of the 20 General Knowledge Question that was gather from</h2>
        <h2><a href="https://opentdb.com/" target="_blank">{'\nOpen Trivia DataBase'}</a>.</h2>
      </div>
      <div className="btn-option">
        <button className="btn-start" onClick={nextSectionShown}>Start (as Guest)</button>
        <button className="btn-start">Login</button>
      </div>
    </div>
  );
}

export default MainTitle;