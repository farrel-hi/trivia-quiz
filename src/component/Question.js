import React from "react";
import './Question.css';

function Question() {
  const placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et dui ipsum. In vehicula dolor in ex ornare accumsan. Suspendisse.';
  return(
    <div className="question">
      <div className="num-question">
        <h2>QUESTION</h2>
        <h2 className="number">0</h2>
      </div>
      <div className="question">
        <h1>{placeholder}</h1>
      </div>
      <div className="answers">
        
      </div>
    </div>
  );
}

export default Question;