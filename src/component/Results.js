import React, { useState } from "react";
import './Results.css'
import qData from '../assets/question.json';


function Results(props) {
  const [resultsShown, setResultsShown] = useState(false);
  const [textViewClose, setTextViewClose] = useState("View");
  const [count,setCount] = useState(0);
  const resultData = props.userAnswers;
  const oriData = qData.results;

  function countRightAnswer(){
    for(let i=0;i<resultData.length;i++){
      let copyCount = count;
      if(resultData[i].chosenAnswer == resultData[i].correctAnswer){
        console.log("In Results");
        copyCount++;
        setCount(copyCount);
      }
    }
    // return count;
  }
  // countRightAnswer;

  function AllResutls() {
    return (
      <ol>
        <ViewOneAnswers answerObject={resultData[0]} indexPosition={0} />
        <ViewOneAnswers answerObject={resultData[1]} indexPosition={1} />
        <ViewOneAnswers answerObject={resultData[2]} indexPosition={2} />
        <ViewOneAnswers answerObject={resultData[3]} indexPosition={3} />
        <ViewOneAnswers answerObject={resultData[4]} indexPosition={4} />
        <ViewOneAnswers answerObject={resultData[5]} indexPosition={5} />
        <ViewOneAnswers answerObject={resultData[6]} indexPosition={6} />
        <ViewOneAnswers answerObject={resultData[7]} indexPosition={7} />
        <ViewOneAnswers answerObject={resultData[8]} indexPosition={8} />
        <ViewOneAnswers answerObject={resultData[9]} indexPosition={9} />
        <ViewOneAnswers answerObject={resultData[10]} indexPosition={10} />
        <ViewOneAnswers answerObject={resultData[11]} indexPosition={11} />
        <ViewOneAnswers answerObject={resultData[12]} indexPosition={12} />
        <ViewOneAnswers answerObject={resultData[13]} indexPosition={13} />
        <ViewOneAnswers answerObject={resultData[14]} indexPosition={14} />
        <ViewOneAnswers answerObject={resultData[15]} indexPosition={15} />
        <ViewOneAnswers answerObject={resultData[16]} indexPosition={16} />
        <ViewOneAnswers answerObject={resultData[17]} indexPosition={17} />
        <ViewOneAnswers answerObject={resultData[18]} indexPosition={18} />
        <ViewOneAnswers answerObject={resultData[19]} indexPosition={19} />
      </ol>
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
      <h2>$/20</h2>
      <div className="after-game-option">
        <button className="choices" onClick={answersHandler}>{textViewClose} Answers</button>
        <button className="choices" onClick={returnToHomeHandler}>Try Again?</button>
      </div>

      {resultsShown && <AllResutls />}

    </div>
  );
}

export default Results;