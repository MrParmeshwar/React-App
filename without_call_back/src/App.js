import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// This is An Example Without Call Back Function.

function Mylist({ getList }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getList());
    console.log("Child component rendered");
  }, [getList]);

  return (
    <>
      {items.map((item, index) => {
        return (
          <div key={index}>
            {item}
          </div>
        );
      })}
    </>
  );
}

const App = () => {
  const [state, setState] = useState(false);
  const [isRed, setColor] = useState(true);

  console.log("Parent Component Rendered");

  const getList = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  };

  const stateHandler = () => {
    setState(!state);
  };

  const changeColor = () => {
    const bgColor = isRed ? "red" : "green";
    return { backgroundColor: bgColor };
  };

  const toggle = () => {
    setColor(!isRed);
  };

  return (
    <div style={changeColor()}>
      <button onClick={stateHandler}>Change State Of Parent Component</button>
      <br></br>
      <button onClick={toggle}>Toggle Color</button>
      <Mylist getList={getList} />
    </div>
  );
};

export default App;
