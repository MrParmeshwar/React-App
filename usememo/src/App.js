import logo from './logo.svg';
import './App.css';
import { useMemo, useRef } from 'react';
import { useState } from 'react';


// // This is An Example Of Use Memo.
// // EC=expensivecalculation
// const App=()=>{
//   const EC=(num)=>{
//     console.log("Calculating...");
//     for (let i=0;i<1000000000;i++){
//       num+=1;
//     }
//     return num
//   }
//   const fname=useRef(null)
//   const [names,setNames]=useState('')
//   const [count,setcount]=useState(0)
//   const Calculation=EC(count)
//   const inr=()=>{
//     setcount (count+1)
    
//   }
//   const addName=()=>{
//     setNames(fname.current.value)
    
//   }
//   return(
//   <div>
//     <h1>React Demo</h1>
//     <br></br>
//     <input ref={fname}></input>
//         <button onClick={addName}>Address</button>
//     <br></br>
//     <button onClick={inr}>+</button>
//     <br></br>
//     count is : {count}
//     <br></br>
//     Expensive Calculation is : {Calculation}
//   </div>
//   )
// }

// In The Above Ecample When We Click On any button always expensive calculation (EC) get executed 
// but we want ro execute expensive calculation (EC) only when we click on increment button (+) so 
// We have to memories expensive calculation result to inprove The performance of website.
// so thats the reason we are going to use usememo so it will remember function calculation value.

const App=()=>{
  const EC=(num)=>{
    console.log("Calculating...");  //In Above Example When We Click On Address Button This is Also Get Executed 
                                  // After Using usememo this will execute only when we click on (+) This button.
    for (let i=0;i<1000000000;i++){
      num+=1;
    }
    return num
  }
  const fname=useRef(null)
  const [names,setNames]=useState('')
  const [count,setcount]=useState(0)
  const calculation=useMemo(()=>
    EC(count),[count]
  )
  const inr=()=>{
    setcount (count+1)
    
  }
  const addName=()=>{
    setNames(fname.current.value)
    
  }
  return(
  <div>
    <h1>React Demo</h1>
    <br></br>
    <input ref={fname}></input>
        <button onClick={addName}>Address</button>
    <br></br>
    <button onClick={inr}>+</button>
    <br></br>
    count is : {count}
    <br></br>
    Expensive Calculation is : {calculation}
  </div>
  )
}

export default App;
