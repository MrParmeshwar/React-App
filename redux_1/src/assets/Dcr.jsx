import { store } from "./store";
const DCR={type:"dcr", value:2}
export const Dcr=()=>{
    const buttonclicked2=()=>{
        store.dispatch(DCR)
    }
    return(
        <button onClick={buttonclicked2}>Decrement</button>        
    )
      
}
