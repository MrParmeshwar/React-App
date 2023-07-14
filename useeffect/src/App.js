import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
//This is an Example Of useEffect And useRef 

function App() {
  const [color,setcolor]=useState("Brown")
  const [counter,setcounter]=useState(0)
  const op=useRef(null)
  // const Background=
  useEffect(()=>{  //With The Help Of useEffect It Will Execute Only When Background Color Is Changed 
    console.log ("Background color is changed")
      document.body.style.backgroundColor=color
    
  },[color])
  
  const co=()=>{
        setcounter(counter+1)  //When We Call This Function This Will Increase a Value Of Counter.
    }
  const buttonclick=()=>{
    setcolor(op.current.value)
  }
  return (
    <div >

      <h2>This Is An Example Of UseEffect </h2>
      <p>Enter A Color Name In The Below TextBox Which You Want To See In Background.</p>
      <input type='text' ref={op} ></input> [Note:If The Background Color Is Not Changed After Entering Color Name In Text Box Then Please Check The Spelling Of Color That You Have Entered .]
      <br></br>
      <br></br>
      <button onClick={buttonclick} >Change Color</button>
      <br></br>
      <br></br>
      <button onClick={co}>Increse Counter</button>
      <p>
    This counter Is Just For Fun.<br></br>
      Counter is : {counter}
      </p>
    </div>
  );
}

export default App;
