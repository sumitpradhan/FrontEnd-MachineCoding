import logo from './logo.svg';
import './App.css';
import ProgressBar from './component/ProgressBar';
import { useEffect, useState } from 'react';

function App() {
  const [value,setValue]=useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setValue((prev)=>prev+1)
    },200)
  },[]);

  return (
    <div className="App">
      <div>
        <h1>Progress Bar</h1>
        <ProgressBar value={value}/>
      </div>
    </div>
  );
}

export default App;
