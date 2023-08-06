import { store } from "./store";
const ZERO={type:"zero", value:0}
export const Zero=()=>{
    const buttonclicked3=()=>{
        store.dispatch(ZERO)
    }
    return(
        <button onClick={buttonclicked3}>Zero</button>        
    )
      
}
