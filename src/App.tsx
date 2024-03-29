import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);

  const handleIncrementClick = () => {
    if (error) {
      setError(false);
    }
    setCount(count + 1);
  };

  const handleDecrementClick = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setError(true);
    }
  };

  return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>

      <div
        data-test="error-message"
        className={`error ${error ? "" : "hidden"}`}
      >
        The counter cannot go below 0
      </div>
      <button data-test="increment-button" onClick={handleIncrementClick}>
        Increment counter
      </button>
      <button data-test="decrement-button" onClick={handleDecrementClick}>
        Decrement counter
      </button>
    </div>
  );
}

export default App;
