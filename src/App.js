import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import calculator from "./img/timer.png";

function App() {
  const [counter, setCounter] = useState([0]);

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={calculator} alt="" />
        </div>
        <h1>React Counter v2</h1>
      </header>

      <div className="main container">
        <button
          onClick={() => {
            const newTab = [...counter];
            if (counter.length < 3) {
              newTab.push(0);
              setCounter(newTab);
            }
          }}
          className="addcounter"
        >
          Add counter
        </button>
        <div className="counterline">
          {counter.map((elem, index) => {
            return (
              <Counter
                key={index}
                index={index}
                setCounter={setCounter}
                counter={counter}
                className={"countercontain"}
              />
            );
          })}
        </div>

        <p className="sign">
          Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Moustapha</span>
        </p>
      </div>
    </div>
  );
}

export default App;
