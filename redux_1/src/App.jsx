import { Inr } from "./assets/Inr"
import { Dcr } from "./assets/Dcr"
import { Zero } from "./assets/Zero"
import { store } from "./assets/store" 

//This is an Example Of Redux In React.
//Reduser is use to access value from unother component.

function App(){
    const show=()=>{
      console.log("Updated Value ",store.getState().counter)
    }
    store.subscribe(show)  // This is function is use to register a user define function which is executed when user update the data from store.
    return (
      <>
      <Inr></Inr>
      <br></br>
      <Dcr></Dcr>
      <br></br>
      <Zero></Zero>
      <br></br>
      counter is : {store.getState().counter}  {/*GetState is use to get current value that is present in the store. */}
      </>
    )
}

export default App
