import { useState } from "react";
import Bill from "./Bill";
import Tip from "./Tip";

export default function Calculator() {
  const [billValue, setBillValue] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [tipPercentFriend, setTipPercentFriend] = useState(0);
  const peopleCount = 2;
  //   let tip, toPay;
  const tip = Math.round(
    ((tipPercent + tipPercentFriend) / peopleCount) * 0.01 * billValue
  );
  const toPay = billValue + tip;
  const isDefault =
    billValue === 0 && tipPercent === 0 && tipPercentFriend === 0;

  function handleClick() {
    setBillValue(0);
    setTipPercent(0);
    setTipPercentFriend(0);
  }
  return (
    <div>
      <Bill value={billValue} setValue={setBillValue} />
      <Tip percent={tipPercent} setPercent={setTipPercent}>
        How did you like the service?
      </Tip>
      <Tip percent={tipPercentFriend} setPercent={setTipPercentFriend}>
        How did your friend like the service?
      </Tip>
      {billValue !== 0 && (
        <h2>
          You pay {toPay}$ ({billValue}$ + {tip}$)
        </h2>
      )}
      {!isDefault && <button onClick={handleClick}>Reset</button>}
    </div>
  );
}
