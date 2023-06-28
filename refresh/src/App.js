import logo from './logo.svg';
import './App.css';
//This is not proper way to see proper way you have to see the refresh_2 code 
const App=(props)=>{
  const {counter}=props
  return (
    <div>
      <p>Greetings of The Day.!!!</p>
      <p>counter value is {counter}</p>
    </div>
  )
}
export default App;
