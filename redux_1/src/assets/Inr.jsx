import { store } from "./store";
const INR={type:"inr", value:2}
export const Inr=()=>{
    const buttonclicked=()=>{
        store.dispatch(INR) //Dispatch is use to perform the operation from reducer Here INR Is An Action 
                            //  Dispatch function has one parameter That is "Action".
    }
    return(
        <>
        <p>Please Press The f12 (Developer Tools) and see The Result In Console Tab. </p>
        <button onClick={buttonclicked}>Increment</button>        
        </>
    )
      
}
