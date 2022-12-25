import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  // useEffect(() => {
  //   if (counter < 0) {
  //     setCounter(0);
  //   }
  // }, [counter]);
  return (
    <div className="App">
      <h2>Simple Counter App</h2>
      <p>Counter value : </p>
      <p data-testid="counter">{counter}</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button data-testid="inc" onClick={increaseCounter}>
          Increment
        </button>
        <button data-testid="dec" onClick={decreaseCounter}>
          Decrement
        </button>
      </div>
    </div>
  );
}
