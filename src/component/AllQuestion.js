import React from "react";
import "./AllQuestion.css"
import Question from "./Question";
import Card from "./Card";

function AllQuestion(props) {
  const data = props.data
  return (
    <div className="all-question-container">
      <Card>
        <Question
          id='1'
          type={data[0].type}
          question={data[0].question}
          correct_answer={data[0].correct_answer}
          incorrect_answers={data[0].incorrect_answers}
        />
      </Card>
      <Card>
        <Question
          id='2'
          type={data[1].type}
          question={data[1].question}
          correct_answer={data[1].correct_answer}
          incorrect_answers={data[1].incorrect_answers}
        />
      </Card>
    </div>
  );
}

export default AllQuestion;