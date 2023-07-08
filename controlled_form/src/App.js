import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
// Below Is The An Example Of controlled React Form
// he=handleevent
const App=()=>{
  const [fname,setfname]=useState('')
  const he=(event)=>{
    setfname(event.target.value)
  }
  return(
    <div>
      <form>
        Type Your Query Below.!!!  <br></br>
        <input type='text' name='T1' value={fname} onChange={he}></input>
      </form>
      {fname}
    </div>
  )
}




export default App;
