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

  const [answerProperty, setAnswerProperty] = useState({});
  const [shuffledArray, setShuffledArray] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    // let newArray = [...array];
    // for (let i = newArray.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    // }
    // return newArray
  }

  // useEffect(() => {
  //   // Step 3: Store the shuffled array in state when the component mounts
  //   setShuffledArray(shuffleArray(choices));
  // }, []);

  const saveAnswerDataHandler = event => {
    console.log(event.target.value);
    answer.chosenAnswer = event.target.value;
    console.log(answer);
    props.onHandleAnswers(answer);
  }

  function MultipleChoice() {

    // shuffleArray(choices); //This always runs, the options keeps on shuffling
    return (
      <div className="multiple-container">
        {/* <button className="choices" value={shuffledArray[0]} onClick={saveAnswerDataHandler}>{shuffledArray[0]}</button>
        <button className="choices" value={shuffledArray[1]} onClick={saveAnswerDataHandler}>{shuffledArray[1]}</button>
        <button className="choices" value={shuffledArray[2]} onClick={saveAnswerDataHandler}>{shuffledArray[2]}</button>
        <button className="choices" value={shuffledArray[3]} onClick={saveAnswerDataHandler}>{shuffledArray[3]}</button> */}

        <button className="choices" value={choices[0]} onClick={saveAnswerDataHandler}>{choices[0]}</button>
        <button className="choices" value={choices[1]} onClick={saveAnswerDataHandler}>{choices[1]}</button>
        <button className="choices" value={choices[2]} onClick={saveAnswerDataHandler}>{choices[2]}</button>
        <button className="choices" value={choices[3]} onClick={saveAnswerDataHandler}>{choices[3]}</button>
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