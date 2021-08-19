import React, { useState } from "react";
import './App.css';

import Interval from "./components/Interval";
import Average from "./components/Average";
import Sum from "./components/Sum";
import Raffle from "./components/Raffle";

function App() {
  const [min, setMin] = useState(10)
  const [max, setMax] = useState(100)

  return (
    <div className="App">
      <h1>React redux simple exercise</h1>
      <div className='line'>
        <Interval min={min} max={max} onMinChange={setMin} onMaxChange={setMax}></Interval>
      </div>
      <div className='line'>
        <Average min={min} max={max}></Average>
        <Sum min={min} max={max}></Sum>
        <Raffle min={min} max={max}></Raffle>
      </div>
    </div>
  );
}

export default App;
