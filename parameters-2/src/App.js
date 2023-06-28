import logo from './logo.svg';
import './App.css';

// In This Example we are going to pass the values of varible to the component.

const Hello =(props)=>{
  return (
    <div>
      <p>
        Hello {props.name} Your age is {props.age}
      </p>
    </div>
  )
}

const App=()=>{
  let fname="Rocky"
  let age1=21
  return(
    <div>
    <p> Greetings of The Day !!!</p>
    <Hello name={fname} age={age1}/>
    </div>
    )
}

export default App;
