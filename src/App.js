import './App.css';
import Interval from "./components/Interval";
import Average from "./components/Average";
import Sum from "./components/Sum";
import Raffle from "./components/Raffle";

function App() {
  return (
    <div className="App">
      <h1>React redux simple exercise</h1>
      <div className='line'>
        <Interval></Interval>
      </div>
      <div className='line'>
        <Average></Average>
        <Sum></Sum>
        <Raffle></Raffle>
      </div>
    </div>
  );
}

export default App;
