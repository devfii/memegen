import {useState} from 'react';
import './App.css';
//import Header from './components/Header';
//import Meme from './components/Meme';

function App() {
  const [count, setCount] = useState(0);
  function handleDecr() {
    setCount(prevCount => prevCount-1)
  }


  function handleIncr() {
    setCount(prevCount => prevCount+1)
  }
  return (
    <div>
      <button onClick={handleDecr}>-</button>
      <button onClick={handleIncr}>+</button>
      <h3>{count}</h3>
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
