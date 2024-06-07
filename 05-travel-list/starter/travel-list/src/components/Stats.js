export default function Stats({ items }) {
  const amountItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const itemPercent = Math.round((packedItems / amountItems) * 100);

  if (!amountItems)
    return <footer className="stats">Start adding some items 🧳</footer>;

  return (
    <footer className="stats">
      <em>
        {itemPercent === 100
          ? "You packed everything 🎉"
          : `You have ${amountItems} items on your list, with packed ${packedItems} of
        them (${itemPercent}%)`}
      </em>
    </footer>
  );
}
