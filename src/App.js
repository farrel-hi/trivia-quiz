import React from 'react';
import './App.css';
import MainTitle from './component/MainTitle';
import Card from './component/Card';
import Login from './component/Login';
import Question from './component/Question';
import qData from './assets/question.json'

function App() {
  const data = qData.results;
  return (
    <div className="App">
      <Card>
        <MainTitle />
      </Card>
      <Card>
        <Login />
      </Card>
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

export default App;

// How to show/hide Component onClick in React:
// https://bobbyhadz.com/blog/react-onclick-show-component
// How to add Login/Auth to your React App:
// https://www.youtube.com/watch?v=wr3VmbZdVA4
// Open Trivia Database API:
// https://opentdb.com/
// 20 Question - General Knowledge - Multiple & True/False - Any Difficulty:
// https://opentdb.com/api.php?amount=20&category=9