import logo from './logo.svg';
import './App.css';

const Hello=()=>{
  return(
    <div>
      <p>
        Hello World !!!
      </p>
    </div>
  )
}
const App=()=>{
  return (
    <div>
      <p>Greetings Of Tha Day....!!!!</p>
      {/* When Ever You Call To Hello Function it will print on webpage */}
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>

    </div>
  )
}

export default App;
