/* ****** STATS COMPONENT ****** */
export function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  // Derived state
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  return (
    <footer className="stats">
      <em>
        {numPacked === numItems
          ? "You have everything! Ready to go ✈️"
          : `You have ${numItems} items on your list, and you already packed ${numPacked}`}
      </em>
    </footer>
  );
}
