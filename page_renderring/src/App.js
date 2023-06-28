import logo from './logo.svg';
import './App.css';

// In This Code We Are Going To See The Page Rerendring .

const App=(props)=>{
  const {counter}=props
  return(
    <div>
      <p>Greetings Of The Day !!!</p>
     <p>Counter value is {counter}</p>
    </div>
  )
}
export default App;
