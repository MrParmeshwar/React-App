import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

// This is An Example Of Use_Context.
function App(){
  const fn=useRef(null)
  const [fname,setfname]=useState('')
  const buttonclick=(event)=>{
    setfname(fn.current.value)
  } 
  const Header=({fname})=>{
    return(
      <header>
        <h1>Hello {fname}</h1>
      </header>
    )
  }
  const Footer=({fname})=>{
    return(
       <footer>
    <h3>Bye {fname}</h3>
   </footer>
    )
  }
  const Main=()=>{
    return(
      <div>
        <p>Please Enter A Username And Click On <b>OK </b> To See The Output</p>
        <input type='text' ref={fn} placeholder='Enter Username'></input>
        <br></br>
        <button onClick={buttonclick}>Ok</button>
        <br></br>
      </div>
    )
  }
  return(
    <div>
      <Header fname={fname}></Header>
      <Main></Main>
      <Footer fname={fname}></Footer>
    </div>
  )
}
export default App;
