import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  //destructuring 
  const {name,year}=props 
  const getage = (year) => {
    const currentyear = new Date().getFullYear()
    const age = currentyear-year
    return age
  }
  return (
    <div><p>
      Hello {props.name} Your age is {getage(props.year)}
    </p></div>
  )
}

const App=()=>{
  let fname="Rocky"
  let y=2002
  return(
    <div>
      <p>Greetings Of The Day !!!</p>
      <Hello name={fname} year={y}/>
    </div>
  )
}
export default App;



