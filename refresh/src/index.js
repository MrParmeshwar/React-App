import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// In This Code We Are Going To See The Refresh Logic
let counter=1
const refresh=()=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App counter={counter} />);
}
refresh()
counter=counter +1
// refresh()
// counter=counter +1 
// refresh()
// counter=counter +1
// refresh()

//with above code we will get only the forth line output to see every line output following code is nessesarry
 

setInterval(()=>{
  refresh()
  counter=counter+1
},2000)

reportWebVitals();
