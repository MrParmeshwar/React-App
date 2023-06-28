import logo from './logo.svg';
import './App.css';

const App=()=> {
  let a=100
  let b=200
  let d1=new Date()

  return ( 
<div>
  <p>
    Today's Date is {d1.toString()}
  </p>
  <p>
    {a}+{b}={a+b}
  </p>
</div>
  )
  }

export default App;
