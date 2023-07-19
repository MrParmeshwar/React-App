import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

// This is an Asignment for  Uncontrolled Form.
// he=handleevent
const App = () => {
  const [value,setvalue]=useState([])
  const fname = useRef(null)
  const lname = useRef(null)
  const address = useRef(null)
  const he = (event) => {
    event.preventDefault()  // When We Use This Then The Request Will Not Forward To Real Server So We Can See The Output In Console Using Developer Option.
    // If You Want To Send The Request To Direct Server Then Please Remove "event.preventDefaul" .
    const a = fname.current.value
    const b = lname.current.value
    const c = address.current.value
    const newrow = { fname: a, lname: b, address: c }
    setvalue([...value, newrow])

  }
  return (
    <div>
      <h5>This is An Assignment Of Uncontrolled Form In React </h5>
      <form onSubmit={he}>
        First Name: <input type='text' name='t1' ref={fname}></input>
        <br></br>
        Last Name: <input type='text' name='t2' ref={lname}></input>
        <br></br>
        Address : <input type='text' name='address' ref={address}></input>

        <br></br>
        <button type='submit'>Send Data</button>
      </form>
      <table border={1}>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Address</td>
        </tr>

        {
          value.map((row) => {
            return (
              <tr>
                <td>{row.fname}</td>
                <td>{row.lname}</td>
                <td>{row.address}</td>
              </tr>

            )
          })
        }
      </table>
    </div>
  )
}

export default App;
