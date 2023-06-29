import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// This is An Example on use state without hooks
// const App=()=>{
//   let counter=0
//   const setcounter=()=>{
//     counter+=1

//   }
//   setInterval(()=>{
//     setcounter()
//   },2000)
//   return(
//     <div>
//       <p>Greetings Of the Day..!</p>
//       <p>Counter is {counter}</p>
//     </div>
//   )
// }
// The Above Code Is Working Properly But there is one thing that is it is showing every time 0 because it's 
// reloading speed is very fast is it is not visible to us and it is not store in state Lets Upgrade The Code.
const App=()=>{
  const [counter,setcounter]=useState(0)
  setInterval(()=>{
    setcounter(counter+1)
  },2000)
  return(
    <div>
      <p>Greetings Of the Day..!</p>
      <p>Counter is {counter}</p>
    </div>
  )
}
//Perfect Using Above Code It Is Storing in the state.
export default App;
