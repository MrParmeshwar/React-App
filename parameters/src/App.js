import logo from './logo.svg';
import './App.css';
// In This Code We Will Pass The Parameter To Component
const Hello=(props)=>{
  return (
    <div>
      <p>
        Hello {props.name} Your Age Is {props.age}
      </p>
    </div>
  )
}
const App=()=>{
  return(
    <div>
      <p>
        Greetings Of The Day!!!
      </p>
      <Hello name="Rocky" age='21'/>
      <Hello name="Rock" age='22'/>
    </div>
  )
}

export default App;
