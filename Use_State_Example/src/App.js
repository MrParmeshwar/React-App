import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Below Is The We Are Going To See The Handle Event in react with Three Buttons.


// he=Handle Event
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
        <button onClick={he}>Increase</button>
      </p>
      <p>
        <button onClick={he2}>Decrease</button>
      </p>
      <p>
        <button onClick={he3}>reset</button>
      </p>
      <p>Counter is {counter}</p>
    </div>
  )
}

export default App;
