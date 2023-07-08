import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
// Below Is The An Example Of Simple React Form
// he=handleevent
const App=()=>{
  const he=(event)=>{
    event.preventDefault()
    alert("Request Submitted Successfully To Server");
  }
  return(
    <div>
      <form onSubmit={he}>
        <button type='submit'>Click Here To Submit Requst </button>
        
      </form>
    </div>
  )
}




export default App;
