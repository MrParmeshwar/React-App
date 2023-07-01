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
  const [totalClicks, setTotalClicks] = useState(0);

  const he = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
    setTotalClicks((prevClicks) => prevClicks + 1);
  };

  const average =
    totalClicks > 0
      ? (
          (feedback.good - feedback.bad) /
          totalClicks
        ).toFixed(2)
      : 0;

  const positivePercentage =
    totalClicks > 0
      ? ((feedback.good / totalClicks) * 100).toFixed(2) + '%'
      : 0;

  return (
    <div>
      <h1>Give Feedback</h1>

      <button onClick={() => he('good')}>Good</button> {/* Here We call function within arrow function. */}
      <button onClick={() => he('neutral')}>Neutral</button>
      <button onClick={() => he('bad')}>Bad</button>

      {totalClicks === 0 ? (
        <p>No Feedback Given</p>
      ) : (
        <>
          <h2>Statistics</h2>
          <p>
            Good: {feedback.good}
            <br />
            Neutral: {feedback.neutral}
            <br />
            Bad: {feedback.bad}
            <br />
            <br />
            <b>Average: </b>
            {average}
            <br />
            <br />
            <b>Positive Feedback: </b>
            {positivePercentage}
          </p>
        </>
      )}
    </div>
  );
};

export default App;
