import React from "react";
import './Question.css';

function Question(props) {
  const question = props.question;
  const type = props.type;
  const correct_answer = props.correct_answer;
  const choices = [...props.incorrect_answers, correct_answer];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function MultipleChoice() {
    shuffleArray(choices);
    return (
      <div className="multiple-container">
        <button className="choices">{choices[0]}</button>
        <button className="choices">{choices[1]}</button>
        <button className="choices">{choices[2]}</button>
        <button className="choices">{choices[3]}</button>
      </div>
    )
  }

  function BooleanChoice(){
    return(
      <div className="boolean-container">
        <button className="choices">{choices[0]}</button>
        <button className="choices">{choices[1]}</button>
      </div>
    );
  }

  function CheckType(typeProps){
    if(typeProps.question_type == 'multiple'){
      return <MultipleChoice />;
    }
    else{
      return <BooleanChoice />;
    }
  }

  return (
    <div className="quiz">
      <div className="num-question">
        <h2>QUESTION</h2>
        <h2 className="number">0</h2>
      </div>
      <div className="question">
        <h1>{question}</h1>
      </div>
      <div className="answers">
        <CheckType question_type={type} />
      </div>
    </div>
  );
}

export default Question;