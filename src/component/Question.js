import React, { useState, useEffect } from "react";
import './Question.css';

function Question(props) {
  const id = props.id;
  const question = props.question;
  const type = props.type;
  const correct_answer = props.correct_answer;
  const choices = [...props.incorrect_answers, correct_answer];
  let answer = {
    id: id,
    chosenAnswer: '',
    correctAnswer: correct_answer
  }

  const [shuffledArray, setShuffledArray] = useState(shuffleArray(choices));

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const saveAnswerDataHandler = event => {
    answer.chosenAnswer = event.target.value;
    console.log(event.target);
    props.onHandleAnswers(answer);
    props.onFirstClick();
  }

  function MultipleChoice() {
    return (
      <div className="multiple-container">
        <button className="choices" value={shuffledArray[0]} onClick={saveAnswerDataHandler}>{shuffledArray[0]}</button>
        <button className="choices" value={shuffledArray[1]} onClick={saveAnswerDataHandler}>{shuffledArray[1]}</button>
        <button className="choices" value={shuffledArray[2]} onClick={saveAnswerDataHandler}>{shuffledArray[2]}</button>
        <button className="choices" value={shuffledArray[3]} onClick={saveAnswerDataHandler}>{shuffledArray[3]}</button>
      </div>
    )
  }

  function BooleanChoice() {
    return (
      <div className="boolean-container">
        <button className="choices" value={choices[0]} onClick={saveAnswerDataHandler}>{choices[0]}</button>
        <button className="choices" value={choices[1]} onClick={saveAnswerDataHandler}>{choices[1]}</button>
      </div>
    );
  }

  function CheckType(typeProps) {
    if (typeProps.question_type == 'multiple') {
      return <MultipleChoice />;
    }
    else {
      return <BooleanChoice />;
    }
  }

  return (
    <div className="quiz">
      <div className="num-question">
        <h2>QUESTION</h2>
        <h2 className="number">{id}</h2>
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