import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// In This Code We Are Going To Pass The State To Child Component


// he=Handle Event
const Display=(props)=>{
  return (
    <div>
      <p>
        Counter Is {props.counter}
      </p>
    </div>
  )
}
const Button=(props)=>{
  return (
    <div>
      <button onClick={props.he}>{props.text}</button>
    </div>
  )
}
 const App = () => {
  const [counter, setCounter] = useState(0)

  const he = () => {
    setCounter(counter + 1)
    console.log("Button Clicked..!")

  }
  const he2=()=>{
    setCounter(counter - 1)

  }
  const he3=()=>{
    setCounter(0)
  }
  return (
    <div>
      <p>
        Event Handling Demo
      </p>
      <p>
       <Button he={he} text="increment"></Button>
      </p>
      <p>
      <Button he={he2} text="Decrement"></Button>
      </p>
      <p>
      <Button he={he3} text="Reset"></Button>
      </p>
      <p>
        <Display counter={counter}></Display>
     {/* In This Code We Just Created 1 Button And Call it 3 Times And In Previous Example we Created 3 Buttens */}
      </p>
    </div>
  )
}

export default App;
