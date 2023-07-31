import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import   axios  from 'axios'

function App() {
  const [userinfo, setuserinfo] = useState({})
  const [posts, setposts] = useState([])
  const clickbutton = () => {
    console.log("Button Clicked")
    let p1 =axios.get('https://jsonplaceholder.typicode.com/todos')
    p1.then((obj) => {
      console.log('Got Data')
      console.log(obj.data.id)
      setuserinfo(obj.data)
    })
    p1.catch((err) => {
      console.log("Error occerred")
    })
  }
  const clickbutton2 = () => {
    console.log("Button Clicked")
    let p1 = axios.get("https://jsonplaceholder.typicode.com/posts")
    p1.then((obj) => {
      console.log('Got Data')
      console.log(obj.data)
      console.log(obj.data.id)
      setposts (obj.data)
    })
    p1.catch((err) => {
      console.log("Error Occered")
    })
  }
  return(
    <>
    <div>
      <button onClick={clickbutton}>
       Get Data 
      </button>
      <button onClick={clickbutton2}>
       Get Data 2 
      </button>
    </div>
    <br></br>
    {
      userinfo.title
    }
    <br></br>
    {userinfo.Id}
    <br></br>
    {userinfo.userId}
    </>
  )

}

export default App
