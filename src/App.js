import React, {useState} from 'react';
import './App.css';
import MainTitle from './component/MainTitle';
import Card from './component/Card';
import Login from './component/Login';
import Question from './component/Question';
import qData from './assets/question.json'
import AllQuestion from './component/AllQuestion';

function App() {
  const data = qData.results;
  const [isShown, setIsShown] = useState(false);

  const handleShown = shownStatus => {
    // 👇️ toggle shown state
    setIsShown(shownStatus);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <div className="App">
      <Card>
        <MainTitle onShownNextSection={handleShown} status={isShown}/>
      </Card>

      {isShown && <Card><Login /></Card>}

      <Card>
        <Login />
      </Card>
      <AllQuestion data={data}/>
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