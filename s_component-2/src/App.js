import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// In This Code We Are Going To Store Complex State.
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
const App=()=>{
  const [clicks,setclicks]=useState({left:0,right:0})
  const inLeft=()=>{
    const newClicks={left:clicks.left+1,right:clicks.right}
    setclicks(newClicks)
  }
  const inright=()=>{
    const newClicks={left:clicks.left,right:clicks.right+1}
    setclicks(newClicks)
  }


  return (
    <div>
      <p>
        Event Handling Demo
      </p>
      <p>
       <Button he={inLeft} text="Left"></Button>
      </p>
      <p>
      <Button he={inright} text="Right"></Button>
      </p>
      {/* <p>
      <Button he={he3} text="Reset"></Button>
      </p> */}

      <p>
        LEFT:<Display counter={clicks.left}></Display>
        <br></br>
        RIGHT:<Display counter={clicks.right}></Display>
      </p>
    </div>
  )
    }

export default App;
