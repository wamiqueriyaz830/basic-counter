
import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0)

  const handleInc=()=>{
    setCount((pre)=>pre+1)
  }
  const handleDec=()=>{
    setCount((pre)=>pre-1)
  }
  return (
    <>
    <h1>Counter App</h1>
    <p>Count: {count}</p>
    <button onClick={handleInc}>Increment</button>
    <button onClick={handleDec}>Decrement</button>
    </>
    

  );
}

export default App;
