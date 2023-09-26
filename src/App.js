import React from 'react';
import './App.css';
import MainTitle from './component/MainTitle';
import Card from './component/Card';
import Login from './component/Login';
import Question from './component/Question';

function App() {
  return (
    <div className="App">
      <Card>
        <MainTitle />
      </Card>
      <Card>
        <Login />
      </Card>
      <Card>
        <Question />
      </Card>
    </div>
  );
}

export default App;

// How to show/hide Component onClick in React:
// https://bobbyhadz.com/blog/react-onclick-show-component
// How to add Login/Auth to your React App:
// https://www.youtube.com/watch?v=wr3VmbZdVA4