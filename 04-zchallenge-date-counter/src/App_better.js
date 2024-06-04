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

  function handleStepSubstract() {
    if (step > 1) setStep((s) => s - 1);
  }

  return (
    <>
      <div className="control">
        <button onClick={handleStepSubstract}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="control">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div className="control">
        <span>{count === 0 ? "Today is" : `${count} days from today is`}</span>
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}
