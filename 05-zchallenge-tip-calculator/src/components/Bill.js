export default function Bill({ value, setValue }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={value}
        placeholder="Bill value..."
        onChange={(e) => setValue(+e.target.value)}
      />
    </div>
  );
}
