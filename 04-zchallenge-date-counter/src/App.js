import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [days, setDays] = useState(0);
  const [date, setDate] = useState(new Date());

  function handleStepSubstract() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleDayAdd() {
    setDays((d) => {
      const newDays = d + step;
      const newDate = new Date();
      newDate.setDate(newDate.getDate() + newDays);
      setDate(newDate);
      return newDays;
    });
  }

  function handleDaySubstract() {
    setDays((d) => {
      const newDays = d - step;
      const newDate = new Date();
      newDate.setDate(newDate.getDate() + newDays);
      setDate(newDate);
      return newDays;
    });
  }

  return (
    <div className="container">
      <div className="control">
        <button onClick={handleStepSubstract}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="control">
        <button onClick={handleDaySubstract}>-</button>
        <span>Days: {days}</span>
        <button onClick={handleDayAdd}>+</button>
      </div>
      <p className="date">
        {days === 0
          ? `Today is ${date.toDateString()}`
          : `${days} days from today is ${date.toDateString()}`}
      </p>
    </div>
  );
}

export default App;
