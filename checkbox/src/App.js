import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
// Below Is  An Example Of Checkbox In controlled component React Form
// he=handleevent

function App() {
  const [ischecked, setIschecked] = useState(false);
  const he = (event) => {
    setIschecked(event.target.checked);
  }
  return (

    <form>
      <p>Select The Checkbox To See The Result</p> <br></br>
      <input type='checkbox' checked={ischecked} onChange={he}></input>

      
      {ischecked && <div>Checkbox Is Selected </div>}
      {
        !ischecked && <div>Checkbox Is Deselected</div>  // '!' This Symbol Is Indicating The Not Equals too(!=).
      }
    </form>


  );
}

export default App;
