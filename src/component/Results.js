import React, { useState } from "react";
import './Results.css'


function Results() {
  const [resultsShown, setResultsShown] = useState(false);
  const [textViewClose,setTextViewClose] = useState("View");


  function AllResutls() {
    return (
      <ol>
        <ViewOneAnswers />
        <ViewOneAnswers />
        <ViewOneAnswers />
      </ol>
    );
  }

  function ViewOneAnswers() {
    return (
      <li>
        <p>Question?</p>
        <p>Correct Answer</p>
      </li>
    );
  }

  function answersHandler() {
    if (resultsShown == false) {
      setResultsShown(true);
      setTextViewClose("Close");
    }
    else {
      setResultsShown(false);
      setTextViewClose("View");
    }
  }

  return (
    <div className="results-container">
      <h1>You've Completed the Quiz!</h1>
      <h2>Your Results:</h2>
      <h2>$/20</h2>
      <button className="choices" onClick={answersHandler}>{textViewClose} Answers</button>

      {resultsShown && <AllResutls />}

    </div>
  );
}

export default Results;