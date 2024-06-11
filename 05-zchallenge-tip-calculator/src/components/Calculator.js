import { useState } from "react";
import Bill from "./Bill";
import Tip from "./Tip";
import Result from "./Result";
import Button from "./Button";

export default function Calculator() {
  const [billValue, setBillValue] = useState("");
  const [tipPercent, setTipPercent] = useState(0);
  const [tipPercentFriend, setTipPercentFriend] = useState(0);
  const peopleCount = 2;
  const tip = Math.round(
    ((tipPercent + tipPercentFriend) / peopleCount) * 0.01 * billValue
  );
  const isDefault =
    billValue === "" && tipPercent === 0 && tipPercentFriend === 0;

  function handleClick() {
    setBillValue("");
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
      {billValue !== "" && <Result billValue={billValue} tip={tip} />}
      {!isDefault && <Button onClick={handleClick} />}
    </div>
  );
}
