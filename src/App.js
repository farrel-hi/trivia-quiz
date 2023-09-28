import React, { useState } from 'react';
import './App.css';
import MainTitle from './component/MainTitle';
import Card from './component/Card';
import Login from './component/Login';
import Results from './component/Results';
import qData from './assets/question.json'
import AllQuestion from './component/AllQuestion';

function App() {
  const data = qData.results;
  const [mainIsShown, setMainIsShown] = useState(true);
  const [questionShown, setQuestionShown] = useState(false);
  const [resultsShown, setResultsShown] = useState(false);
  const [loginShown, setLoginShown] = useState(false);

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

      {/* <Card>
        <Login />
      </Card> */}

      {questionShown &&
        <AllQuestion data={data} onQuizFinish={handleResults} onShowNextSection={handleShown} />
      }
      {resultsShown &&
        <Card>
          <Results
            onHideThisSection={handleHide}
            onQuizFinish={handleResults}
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