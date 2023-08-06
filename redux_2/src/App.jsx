import { Inr } from "./assets/Inr"
import { Dcr } from "./assets/Dcr"
import { Zero } from "./assets/Zero"
import { Store } from "./assets/store"
import { Home } from "./assets/Home"
import {Routes , Route,Link} from "react-router-dom"

//This is an Example Of Redux In React With Linking.
//Reduser is use to access value from unother component.

function App() {
  const show = () => {
    console.log("Updated Value ",Store.getState().counter)
  }
  Store.subscribe(show)  // This is function is use to register a user define function which is executed when user update the data from store.
  
  return (
    <>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Increment'>Increment</Link></li>
        <li><Link to='/Decrement'>Decrement</Link></li>
        <li><Link to='/Zero'>Zero</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/Increment" element={<Inr></Inr>}></Route>
      <Route path="/Decrement" element={<Dcr></Dcr>}></Route>
      <Route path="/Zero" element={<Zero></Zero>}></Route>
    </Routes>
    <br></br>
    </>
  )
}

export default App
