import React, { useState, useEffect } from "react";
import './Timer.css';


function Timer(props) {
  const [counter, setCounter] = useState(600);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  useEffect(() => {
    counter >= 0 && setTimeout(() => setMinutes(Math.floor(counter / 60)), 1000);
  }, [counter])

  useEffect(() => {
    counter >= 0 && setTimeout(() => setSeconds(Math.floor(counter % 60)), 1000);
  }, [counter])
  useEffect(
    () => {
      if(counter == 0 && seconds == 0){
        props.onTimerEnds(false);
        props.onShowResults(true);
      }
    }
  )

  return (
    <div className="timer">
      <h1>Countdown</h1>
        <h1 className="countdown">{minutes}:{seconds}</h1>
    </div>
  );
}

export default Timer;