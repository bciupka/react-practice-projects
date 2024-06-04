import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [days, setDays] = useState(0);
  const [date, setDate] = useState(new Date());

  function handleStepSubstract() {
    if (step > 1) setStep((s) => s - 1);
  }

  return (
    <div className="container">
      <div className="steps">
        <button onClick={handleStepSubstract}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="days">
        <button onClick={() => setDays((d) => d - step)}>-</button>
        <span>Days: {days}</span>
        <button onClick={() => setDays((d) => d + step)}>+</button>
      </div>
      <p className="date">{date.toDateString()}</p>
    </div>
  );
}

export default App;
