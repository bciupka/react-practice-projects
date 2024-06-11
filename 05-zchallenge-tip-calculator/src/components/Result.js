export default function Result({ billValue, tip }) {
  const toPay = billValue + tip;
  return (
    <h2>
      You pay {toPay}$ ({billValue}$ + {tip}$)
    </h2>
  );
}
