import {useState} from 'react';
import './App.css';
//import Header from './components/Header';
//import Meme from './components/Meme';

function App() {
  const [value, setValue] = useState(0);
  function handleDecr() {
    setValue(value-1)
  }

  function handleIncr() {
    setValue(value+1)
  }
  return (
    <div>
      <button onClick={handleDecr}>-</button>
      <button onClick={handleIncr}>+</button>
      <h3>{value}</h3>
      </div>
    
  )
  /*
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
  */
}

export default App;
