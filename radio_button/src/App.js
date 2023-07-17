import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// This is an Example Of Radio Button In Controlled Component.

const App=()=>{
  const [gender,setgender]=useState("male")
  const he=(event)=>{
    setgender("Male")
  }
  const he1=(event)=>{
    setgender("Female")
  }
  return(
    <div>
      <form>
        Male:<input type='radio' onChange={he}name='g1' checked={gender=="Male"}></input>
        Female:<input type='radio' onChange={he1}name='g1' checked={gender=="Female"}></input>
      </form>
      You Selected {gender}
    </div>
  )
}

export default App;
