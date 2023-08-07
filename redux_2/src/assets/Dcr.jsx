import { Store } from "./store";
const DCR={type:"dcr", value:1}
export const Dcr=()=>{
    const buttonclicked2=()=>{
        Store.dispatch(DCR)
    }
    return(
        <>
        <button onClick={buttonclicked2}>Decrement</button>  
        <br></br>
        See The Result On Home Page.
        </>      
    )
      
}
