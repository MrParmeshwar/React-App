import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Below Is The We Are Going To See The Handle Event in react.
// const App=()=>{
//   const he=()=>{
//     alert("Button Clicked")
//   }
//   return(
//     <div>
//       <p>
//         Event Handling Demo 
//       </p>
//       <p>
//         <button onClick={he}>Click Here</button>
//       </p>
//     </div>
//   )

// }

// With Above Code We Will Get Only One alert box as button clicked , Lets Upgreade Code .
// he=Handle Event
 const App = () => {
  const [counter, setCounter] = useState(0)

  const he = () => {
    setCounter(counter + 1)
    console.log("Button Clicked..!")

  }
  return (
    <div>
      <p>
        Event Handling Demo
      </p>
      <p>
        <button onClick={he}>Click Here</button>
      </p>
      <p>Counter is {counter}</p>
    </div>
  )
}

export default App;
