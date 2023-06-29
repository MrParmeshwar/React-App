import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//In This Code We Are Going To See The Function That Return Function
// he=handleEvent
const App=()=>{
  const hello=()=>{
  const he=()=>{
    alert("This is A Demo Of Function Return Function");
  }
  return he
}
return (
  <div>
    <p>
      <button onClick={hello()}>Click Here </button>
    </p>
  </div>
)
}
export default App;
