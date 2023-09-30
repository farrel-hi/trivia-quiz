import React, { useState } from "react";
import "./AllQuestion.css"
import Question from "./Question";
import Card from "./Card";

function AllQuestion(props) {
  const [showQuestion, setShowQuestion] = useState(0);
  const data = props.data

  // Handling Answer
  const handleAnswers = answer => {
    console.log(answer);
    const updateAnswer = { ...answer };
    props.onUpdateAnswers(updateAnswer)
  }

  function QuestionGenerator(property) {
    const qNum = property.questionNumber
    return (
      <Card>
        <Question
          id={qNum + 1}
          type={data[qNum].type}
          question={data[qNum].question}
          correct_answer={data[qNum].correct_answer}
          incorrect_answers={data[qNum].incorrect_answers}
          onHandleAnswers={handleAnswers}
          onFirstClick={property.onFirstAnswer}
        />
      </Card>
    );
  }

  // When Click One of the Answers
  function btnNextHandler() {
    if (showQuestion >= 0 && showQuestion < 19) {
      let plus = showQuestion + 1;
      setShowQuestion(plus);
    }
    else {
      props.onQuizFinish(true);
      props.onShowNextSection(false);
    }
  }

  return (
    <div className="all-question-container">
      {Array.from({ length: 20 }).map((_, index) => (
        showQuestion === index && <QuestionGenerator questionNumber={index} onFirstAnswer={btnNextHandler} />
      ))}
    </div>
  );
}

export default AllQuestion;