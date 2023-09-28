import React, { useState } from "react";
import "./AllQuestion.css"
import Question from "./Question";
import Card from "./Card";

function AllQuestion(props) {
  const [showQuestion, setShowQuestion] = useState(0);
  const [answerArr, setAnswerArr] = useState([]);
  const data = props.data

  const handleAnswers = answer => {
    console.log(answer);
    setAnswerArr({
      ...answerArr,
      answer
    })
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
        />
      </Card>
    );
  }

  function btnPrevHandler() {
    if (showQuestion > 0 && showQuestion <= 19) {
      let minus = showQuestion - 1;
      setShowQuestion(minus);
    }
  }
  function btnNextHandler() {
    if (showQuestion >= 0 && showQuestion < 19) {
      let plus = showQuestion + 1;
      setShowQuestion(plus);
    }
  }

  //Submiting Answers -> Makes this Section Dissapear & Shown The Results
  function saveSubmitStatus(){
    props.onQuizFinish(true);
    props.onShowNextSection(false);
  }

  return (
    <div className="all-question-container">
      {showQuestion == 0 && <QuestionGenerator questionNumber={0} />}
      {showQuestion == 1 && <QuestionGenerator questionNumber={1} />}
      {showQuestion == 2 && <QuestionGenerator questionNumber={2} />}
      {showQuestion == 3 && <QuestionGenerator questionNumber={3} />}
      {showQuestion == 4 && <QuestionGenerator questionNumber={4} />}
      {showQuestion == 5 && <QuestionGenerator questionNumber={5} />}
      {showQuestion == 6 && <QuestionGenerator questionNumber={6} />}
      {showQuestion == 7 && <QuestionGenerator questionNumber={7} />}
      {showQuestion == 8 && <QuestionGenerator questionNumber={8} />}
      {showQuestion == 9 && <QuestionGenerator questionNumber={9} />}
      {showQuestion == 10 && <QuestionGenerator questionNumber={10} />}
      {showQuestion == 11 && <QuestionGenerator questionNumber={11} />}
      {showQuestion == 12 && <QuestionGenerator questionNumber={12} />}
      {showQuestion == 13 && <QuestionGenerator questionNumber={13} />}
      {showQuestion == 14 && <QuestionGenerator questionNumber={14} />}
      {showQuestion == 15 && <QuestionGenerator questionNumber={15} />}
      {showQuestion == 16 && <QuestionGenerator questionNumber={16} />}
      {showQuestion == 17 && <QuestionGenerator questionNumber={17} />}
      {showQuestion == 18 && <QuestionGenerator questionNumber={18} />}
      {showQuestion == 19 && <QuestionGenerator questionNumber={19} />}

      <div className="prev-next">
        {showQuestion >= 1 && 
          <button className="prev-next-btn" onClick={btnPrevHandler}>Previous</button>
        }
        {showQuestion <= 18 &&
          <button className="prev-next-btn" onClick={btnNextHandler}>Next</button>
        }
        {showQuestion == 19 &&
          <button className="prev-next-btn" onClick={saveSubmitStatus}>Submit</button>
        }
      </div>

      {/* <QuestionGenerator questionNumber = {1} /> */}

    </div>
  );
}

export default AllQuestion;