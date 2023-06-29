import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const Display = (props) => {
  return (
    <div>
      <p>
        Counter is: {props.counter}
      </p>
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.he}>{props.text}</button>
    </div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAllClicks] = useState([]);

  const handleLeftClick = () => {
    const newClicks = { ...clicks, left: clicks.left + 1 };
    setClicks(newClicks);
    setAllClicks(allClicks.concat('L'));
  };

  const handleRightClick = () => {
    const newClicks = { ...clicks, right: clicks.right + 1 };
    setClicks(newClicks);
    setAllClicks(allClicks.concat('R'));
  };

  const ShowAllClicks = (props) => {
    if (props.sclicks.length === 0) {
      return (
        <div>
          <p>
            All Clicks Will Shown Here
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <p>
            All Clicks: {props.sclicks.join(', ')}
          </p>
        </div>
      )
    }
  }

  return (
    <div>
      <p>
        Event Handling Demo
      </p>
      <p>
        <Button he={handleLeftClick} text="Left"></Button>
      </p>
      <p>
        <Button he={handleRightClick} text="Right"></Button>
      </p>

      <p>
        LEFT: <Display counter={clicks.left}></Display>
        <br />
        RIGHT: <Display counter={clicks.right} ></Display>
        <br />
        ALL CLICKS: <ShowAllClicks sclicks={allClicks} ></ShowAllClicks>
      </p>
    </div>
  )
}

export default App;
