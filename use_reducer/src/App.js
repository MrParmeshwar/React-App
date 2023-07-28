import logo from './logo.svg';
import './App.css';
import { useReducer} from 'react';

// This is An Example Of UseReducer.
// rd=reducer Method
const rd=(curcounter,action)=>{
  switch (action.type)
  {
    case "inr":
    return curcounter+action.newvalue
    
    case "dcr":
    return curcounter-action.newvalue

    case "Zero":
      return action.newvalue
  }
}
function App(){
  const [counter,dispatch]=useReducer(rd,0);
  const handleInr=()=>{
    dispatch(
      {
        type:"inr",
        newvalue:1
      }
    );
  };
  const handleDcr=()=>{
    dispatch({
      type:"dcr",
      newvalue:1
    });
  };
  const he=()=>{
    dispatch({
      type:"Zero",
     newvalue:0
    });
  };
  return(
    <>
    <div>
      <button onClick={handleInr}>Increment</button>
      <br></br>
      <button onClick={handleDcr}>Decrement</button>
      <br></br>
      <button onClick={he}>Zero</button>
      <br></br>
      Counter is {counter}
    </div>
    </>
  )
}


export default App;
