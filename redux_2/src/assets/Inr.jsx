import { useState } from "react";
import { Store } from "./store";
const INR={type:"inr", value:1}
export const Inr=()=>{
    const [count,setcount]=useState(Store.getState().counter)
    const show=()=>{
        console.log (Store.getState().counter)
        setcount (Store.getState().counter)
    }
    Store.subscribe(show)
    const buttonclicked1=()=>{
        Store.dispatch(INR) //Dispatch is use to perform the operation from reducer Here INR Is An Action 
                            //  Dispatch function has one parameter That is "Action".
    }
    return(
        <>
       
        <button onClick={buttonclicked1}>Increment</button>     
        <br></br>   
        
        </>
    )
      
}



