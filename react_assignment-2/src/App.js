import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

const App = () => {
  
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const [totalClicks, setTotalClicks] = useState(0);

 
  const handleButtonClick = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
    setTotalClicks((prevClicks) => prevClicks + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>

      
      <button onClick={() => handleButtonClick('good')}>Good</button>


      <button onClick={() => handleButtonClick('neutral')}>Neutral</button>

  
      <button onClick={() => handleButtonClick('bad')}>Bad</button>

      <h2>Statistics</h2>
      Good: {feedback.good}
      <br />
      Neutral: {feedback.neutral}
      <br />
      Bad: {feedback.bad}
      <br></br>
      {/* Total Clicks */}
      ALL CLICKS :{totalClicks}
      <br></br>
      <b>Average : </b>

      {/*  Below Code is use to Calculate and display the average feedback */}
      {(() => {
        const totalCount =
          feedback.good + feedback.neutral + feedback.bad;
        if (totalCount === 0) return 0;
        const sum = feedback.good - feedback.bad;
        const average = sum / totalCount;
        return average.toFixed(2);
      })()}
      <br></br>
      <b>Positive Feedback :</b>

      {/* Below Code is use to Calculate and display the percentage of positive feedback */}
      {(() => {
        const totalCount =
          feedback.good + feedback.neutral + feedback.bad;
        if (totalCount === 0) return 0;
        const positivePercentage = (feedback.good / totalCount) * 100;
        return positivePercentage.toFixed(2) + '%';
      })()}

    </div>
  );
};

export default App;
