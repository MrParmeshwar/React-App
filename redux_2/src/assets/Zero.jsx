import { Store } from "./store";
const ZERO={type:"zero", value:0}
export const Zero=()=>{
    const buttonclicked3=()=>{
        Store.dispatch(ZERO)
    }
    return(
        <>
        <button onClick={buttonclicked3}>Decrement</button>  
        <br></br>
        See The Result On Home Page.   
        </>
    )
      
}
