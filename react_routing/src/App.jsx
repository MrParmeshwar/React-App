import reactLogo from './assets/react.svg'
//import viteLogo from './vite.svg'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'

//This is an example of React Routing .

const Home = () => {
  return (
    <h1>Home Page</h1>
  )
}

const Contacts = () => {
  return (
    <h1>Contacts Page</h1>
  )
}

const Blogs = () => {
  return (
    <h1>Blogs Page</h1>
  )
}

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/contacts'>Contacts</Link></li>
          <li><Link to='/blogs'>Blogs</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/blogs' element={<Blogs />}></Route>

        <Route path='/contacts' element={<Contacts />}></Route>
      </Routes>
    </>
  )
}

export default App
