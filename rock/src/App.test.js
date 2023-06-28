import { render, screen } from '@testing-library/react';
import App from './App';

function App(){
  return(
    <div>
      <p>Hello World!!</p>
      <p>This is my First React App</p>
    </div>
  )
}
test('renders learn react link', () => {
  render(<App />);
  
  });
