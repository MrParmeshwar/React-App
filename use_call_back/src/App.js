import logo from './logo.svg';
import './App.css';

 // This is An Basic Example Of Use Call Back.
 const App=()=>{
function show(fname){
  console.log(`Hello ${fname}`)
}
// let f1=show
// let f2=show

let f1=100  
let f2="100"  
if(f1===f2)  //=== Will Compair It's Datatypes Also
{
  alert('equals')
}
else
{
  alert('Not Equals')
}

 }

export default App;
