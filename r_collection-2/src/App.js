import logo from './logo.svg';
import './App.css';

// In This Example Lets Saperate The Display Logic By Writing Unother Component

const Display = (props) => {
  return (
    <li key={props.id}> {props.id} <br></br>{props.name} <br></br> {props.Address} </li>
  )
}
const App = () => {

  const students = [{ id: 100, name: "Rakesh", Address: "Anonymous" }, { id: 101, name: "Rocky", Address: "Hidden" }, { id: 102, name: "Rock", Address: "Invisible" }]


  return (
    <div>

      <ul>
        {
          students.map(stud => <Display
            key={stud.id} name={stud.name} Address={stud.Address} id={stud.id} >
          </Display>)
        }
      </ul>

    </div>
  )
}
export default App;
