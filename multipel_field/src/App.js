import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// 
const App=()=>{
  const [values,setvalues]=useState({fname:' ',address: '  '})
  const he=(event)=>{
    const name=event.target.name
    const value=event.target.value
    const newvalues={...values,[name]:value}
    setvalues(newvalues)
  }
  return(
    <div>
      <form>
        <p>Enter Any UserName And Address To See The Result Of This Code.</p>
        User Name : <input type='text' name='fname' value={values.fname} onChange={he}></input>
        <br>
        </br>
       
        User Name : {values.fname}
        <br></br>
        Address :  <input type='text' name='address' value={values.address} onChange={he}></input> <br></br>
        Address : {values.address}
      </form>
    </div>
  )
}

export default App;
