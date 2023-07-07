import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
// Below Is The An Example Of Rendering Collection.

// In Folowing Code We Decalare Our Information In Array Like One By One.
// const App = () => {

//   const students=[{id:100,name:"Rakesh",Address:"Anonymous"},{id:101,name:"Rocky",Address:"Hidden"},{id:102,name:"Rock",Address:"Invisible"}]
// return(
//   <div>
//     <p>
//       <ul>
//         <li>{students[0].name}</li>  //Here WE Are Accessing The Our Data From Array One By One In, Short we Are Accessing it Manual
//         <li>{students[1].name}</li>
//         <li>{students[2].name}</li>
//       </ul>
//     </p>
//   </div>
// )
// }


//Lets Do Something Simple And LessTime Consuming Code.
const App = () => {

  const students = [{ id: 100, name: "Rakesh", Address: "Anonymous" }, { id: 101, name: "Rocky", Address: "Hidden" }, { id: 102, name: "Rock", Address: "Invisible" }]
  return (
    <div>

      <ul>
        {/* With Following 3 Lines We Accees The Whole Array. */}
        {
          students.map(stud => <li key={stud.id}>{stud.id}</li>)
        }
        {
          students.map(stud => <li key={stud.id}>{stud.name}</li>)
        }
        {
          students.map(stud => <li key={stud.id}>{stud.Address}</li>)
        }

      </ul>
      {/* In Above Code We Use Key={Stud.id} Because It will Remove The Warnig  */}
    </div>
  )
}

export default App;
