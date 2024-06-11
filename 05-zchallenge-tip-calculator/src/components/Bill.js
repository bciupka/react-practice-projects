export default function Bill({ value, setValue }) {
  return (
    <div>
      <h4>How much was the bill?</h4>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
    </div>
  );
}
