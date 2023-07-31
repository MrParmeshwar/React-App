import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { Link, Route, Routes } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <h1>  This is a Home Page </h1>
    </div>
  )
}
const Home1 = () => {
  const [userinfo, setuserinfo] = useState([])

  {

    let p1 = axios.get('https://jsonplaceholder.typicode.com/comments')
    p1.then((obj) => {
      console.log('Got Data')
      console.log(obj.data.id)
      setuserinfo(obj.data)
    })
    p1.catch((err) => {
      console.log("Error occerred")
    })
  }


  return (

    <table border={2}>
      <>
        {
          userinfo.map((row) => {
            return (
              <tr key={row.id}>
                <td>
                  {row.postId}
                </td>
                <td>
                  {row.id}
                </td>
                <td>
                  {row.name}
                </td>
                <td>
                  {row.body}
                </td>
                <td>
                  {row.email}
                </td>
              </tr>
            )
          })
        }
      </>

    </table>

  )
}
function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Home1">Data</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/Home1' element={<Home1></Home1>}></Route>

      </Routes>
    </>
  )
}

export default App
