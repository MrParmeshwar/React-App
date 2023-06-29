import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//In This Code We Are Going To See The Function That Return Function
// he=handleEvent
// const App=()=>{
//   const hello=()=>{
//   const he=()=>{
//     alert("This is A Demo Of Function Return Function");
//   }
//   return he
// }
// return (
//   <div>
//     <p>
//       <button onClick={hello()}>Click Here </button>
//     </p>
//   </div>
// )
// }

//Above Code Is Correct But Lets Upgrade it In New Way.

const App=()=>{
    const hello=(msg)=>{
    const he=()=>{
      alert(msg)
    }
    return he
  }
  return (
    <div>
      <p>
        This is Aslo An Example Of Function Return Function. 
        <br></br>
        <button onClick={hello("Hello")}>Hello</button>
        <button onClick={hello("React")}>React</button>
        <button onClick={hello("Javascript")}>Javascript</button>
      </p>
    </div>
  )
  }
export default App;
