import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

// This is an Example Of  Uncontrolled Form.

const App = () => {
  const fname = useRef(null)
  const lname = useRef(null)
  const lang = useRef(null)
  const g1 = useRef(null)
  const g2 = useRef(null)
  const submitform = (event) => {
    event.preventDefault()  // When We Use This Then The Request Will Not Forward To Real Server So We Can See The Output In Console Using Developer Option.
    // If You Want To Send The Request To Direct Server Then Please Remove "event.preventDefaul" .
    const fn = fname.current.value   //fn=First Name
    const ln = lname.current.value  // ln=Last Name
    const sl = lang.current.value //sl=select Language
    let sg = " "  // sg=select gender
    if (g1.current.checked == true) {
      sg = "Male"
    }
    if (g2.current.checked == true) {
      sg = "Female"
    }

    console.log("First Name: " + fn)
    console.log("Last Name: " + ln)
    console.log("Selected Language Is " + sl)
    console.log("Your Gender Is " + sg)
    console.log("Request Submmited To Server")
  }
  return (
    <div>
      <h5>This is An Example Of Uncontrolled Form In React </h5>
      <form onSubmit={submitform}>
        First Name: <input type='text' name='t1' ref={fname}></input>
        <br></br>
        Last Name: <input type='text' name='t2' ref={lname}></input>
        <br></br>
        Male :<input type='radio' ref={g1} name='g'></input>
        <br></br>
        Female :<input type='radio' ref={g2} name='g'></input>
        <br></br>
        Select Language :  <select ref={lang}>
          <option value=" "></option>
          <option value="C">C</option>
          <option value="CPP">CPP</option>
          <option value="C#">C#</option>
          <option value="Html">Html</option>
          <option value="Javascript">Javascript</option>
          <option value="CSS">CSS</option>
        </select>
        <br></br>
        <button type='submit'>Send Data</button>
      </form>
    </div>
  )
}

export default App;
