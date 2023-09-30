import React, { useState } from 'react';
import './App.css';
import MainTitle from './component/MainTitle';
import Card from './component/Card';
import Login from './component/Login';
import Results from './component/Results';
import qData from './assets/question.json'
import AllQuestion from './component/AllQuestion';
import Timer from './component/Timer';

function App() {
  const data = qData.results;
  const [mainIsShown, setMainIsShown] = useState(true);
  const [questionShown, setQuestionShown] = useState(false);
  const [resultsShown, setResultsShown] = useState(false);
  const [loginShown, setLoginShown] = useState(false);
  // const [timerShown, setTimerShown] = useState(true);

  const [answerData, setAnswerData] = useState([]);

  const handleHide = shownStatus => {
    setMainIsShown(shownStatus);
  };
  const handleShown = shownStatus => {
    setQuestionShown(shownStatus);
  };
  const handleResults = shownStatus => {
    setResultsShown(shownStatus);
  };
  const handleLogin = shownStatus => {
    setLoginShown(shownStatus);
  };
  const resetAnswer = emptyArray =>{
    setAnswerData(emptyArray);
  }
  const handleAnswersData = data => {
    console.log(answerData.length);
    if (answerData.length >= 1) {
      for (let i = 0; i < answerData.length; i++) {
        //If the user wants to switch answer
        if (answerData[i].id == data.id) {
          let copyAnswer = answerData;
          copyAnswer[i].chosenAnswer = data.chosenAnswer;
          setAnswerData(copyAnswer);
        }
        //Adding the new answer to the answersData array
        else if (i == answerData.length - 1 && answerData[i].id != data.id) {
          let transferData = [
            ...answerData,
            data
          ]
          setAnswerData(transferData);
        }
      }
    }
    else if (answerData.length == 0) {
      let entryOne = [data];
      setAnswerData(entryOne);
    }
    console.log('In App');
    console.log(answerData);
  }

  return (
    <div className="App">


      {mainIsShown &&
        <Card>
          <MainTitle
            onHideThisSection={handleHide}
            onShowNextSection={handleShown}
            onShowLogin={handleLogin}
            status={mainIsShown}
          />
        </Card>
      }


      {loginShown &&
        <Card>
          <Login
            onShowNextSection={handleShown}
            onShowLogin={handleLogin}
          />
        </Card>
      }
      
      {questionShown && 
        <Timer 
          onTimerEnds={handleShown}
          onShowResults={handleResults}
        />
      }

      {questionShown &&
        <AllQuestion
          data={data}
          onQuizFinish={handleResults}
          onShowNextSection={handleShown}
          onUpdateAnswers={handleAnswersData}
        />
      }


      {resultsShown &&
        <Card>
          <Results
            onHideThisSection={handleHide}
            onQuizFinish={handleResults}
            userAnswers={answerData}
            onTryAgain={resetAnswer}
          />
        </Card>
      }


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