import {useState} from 'react';
import './App.css';
//import Header from './components/Header';
//import Meme from './components/Meme';

function App() {
  const [isSI, setisSI] = useState("Yes");
  function toggle() {
    if(isSI ==="Yes") setisSI("No")
    else setisSI("Yes");
  }
  function handleClick(){
    toggle()
  }
  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      <h3>{isSI}</h3>
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
