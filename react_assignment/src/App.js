import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
// he=handleButtonClick
const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const he = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => he('good')}>Good</button>  {/* Here We Call The he Function within arrow function with good paramenter. */}
      <button onClick={() => he('neutral')}>Neutral</button>  {/*means we defind arrow function  on onclick event.*/} 
      <button onClick={() => he('bad')}>Bad</button>

      <h2>Statistics</h2>
      Good: {feedback.good}  {/* This will display a value when Good button is clicked. */}
      <br></br>
      Neutral: {feedback.neutral}
      <br></br>
      Bad: {feedback.bad}
    </div>
  );
};



export default App;
