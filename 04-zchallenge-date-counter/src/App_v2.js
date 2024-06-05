import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="control">
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span>{step}</span>
      </div>
      <div className="control">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div className="control">
        <span>{count === 0 ? "Today is" : `${count} days from today is`}</span>
        <span>{date.toDateString()}</span>
      </div>
      {count !== 0 ? (
        <button
          onClick={() => {
            setStep(1);
            setCount(0);
          }}
        >
          Reset
        </button>
      ) : null}
    </>
  );
}
