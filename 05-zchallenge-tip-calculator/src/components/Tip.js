export default function Tip({ percent, setPercent, children }) {
  return (
    <div>
      <h4>{children}</h4>
      <select value={percent} onChange={(e) => setPercent(+e.target.value)}>
        <option value={0}>Not cool (0%)</option>
        <option value={5}>OK (5%)</option>
        <option value={10}>Very good (10%)</option>
        <option value={20}>Outstanding (20%)</option>
      </select>
    </div>
  );
}
