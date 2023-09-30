import React, { useEffect, useState } from "react";
import './Results.css'
import qData from '../assets/question.json';
import Card from "./Card";


function Results(props) {
  const [resultsShown, setResultsShown] = useState(false);
  const [textViewClose, setTextViewClose] = useState("View");
  const [count, setCount] = useState(0);
  const resultData = props.userAnswers;
  const oriData = qData.results;

  useEffect(() => {
    function countRightAnswer() {
      const MAX_COUNT_LIMIT = resultData.length;
      let copyCount = count;
      for (let i = 0; i < MAX_COUNT_LIMIT; i++) {
        if (resultData[i].chosenAnswer === resultData[i].correctAnswer) {
          console.log("In Results");
          copyCount++;
        }
      }
      setCount(copyCount);
    }

    // Call the function once when the component mounts
    countRightAnswer();
  }, []);

  function AllResutls() {
    return (
      <div className="allResults">
        <ol>
          {resultData.map((result, index) => (
            <ViewOneAnswers answerObject={result} indexPosition={index} />
          ))}
        </ol>
      </div>
    );
  }

  function ViewOneAnswers(id) {
    const indexNumber = id.indexPosition;
    return (
      <li>
        <p>{oriData[indexNumber].question}</p>
        <p>Correct Answer: {id.answerObject.correctAnswer}</p>
        <p>Your Answer: {id.answerObject.chosenAnswer}</p>
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

  function returnToHomeHandler() {
    props.onHideThisSection(true);
    props.onQuizFinish(false);
  }

  return (
    <div className="results-container">
      <h1>You've Completed the Quiz!</h1>
      <h2>Your Results:</h2>
      <h2>{count}/20</h2>
      <div className="after-game-option">
        <button className="choices" onClick={answersHandler}>{textViewClose} Answers</button>
        <button className="choices" onClick={returnToHomeHandler}>Try Again?</button>
      </div>

      {resultsShown &&
        <Card>
          <AllResutls />
        </Card>
      }

    </div>
  );
}

export default Results;