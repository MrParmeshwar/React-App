import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
// Below Is The An Example Of Dropdown List In controlled React Form
// he=handleevent
// sv=selecteValues
const App=()=>{
  const [sv,setsv]=useState('')
  const he=(event)=>{
    setsv(event.target.value)
  }
  return(
    <div>
      <form>
      <select value={sv} onChange={he}>
        <option value="  " >  </option>
        <option value="C" >C</option>
        <option value="CPP" >CPP</option>
        <option value="Javascript">Javascript</option>
        <option value="CSS" >CSS</option>
        <option value="HTML" >HTML</option>
      </select>
      </form>
     <br></br>
      You Selected  Option is <b> {sv} </b>
    </div>
  )
}




export default App;
