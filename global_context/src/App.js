import logo from './logo.svg';
import './App.css';
import {useContext, useRef, useState } from 'react';
import { createContext } from 'react';  

// This is An Example Of Creating Global Context By Using Create Context Function.
function App(){
  const fn=useRef(null)
  const [fname,setfname]=useState('')
  const Context=createContext('')  //This Function Will Create a Context object Which is use to access the global value.
  const buttonclick=(event)=>{
    setfname(fn.current.value)
  }
  const Header=()=>{
    const firstname=useContext(Context)
    return(
      <header>
        <h1>Hello {firstname}</h1>
      </header>
    )
  }
  const Footer=()=>{
    const lastname=useContext(Context)
    return(
      <footer>
        <h3>Bye {lastname}</h3>
      </footer>
    )
  }

  const Main=()=>{
    return(
      <div>
        <input type='text' ref={fn} placeholder='Enter Username'></input>
        <br></br>
        <button onClick={buttonclick}>See The Output</button>
      </div>
    )
  }
  return(
    <div>
      <p>In This Example We Have Used Context Provider</p>
      {/* we Can Provide the global Value to the other conponent by using context.provider as follows */}
      <Context.Provider value={fname}> 
        <Header></Header>
        <Main></Main>
        <Footer></Footer>

      </Context.Provider>
    </div>
  )
}

export default App;
