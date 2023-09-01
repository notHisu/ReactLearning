export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start by adding some items to your list!</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You are ready for your trip</em>
      ) : (
        <em>
          You have {numItems} items on your list, and you already packed{" "}
          {numPacked} ({percentage}%)
        </em>
      )}
    </footer>
  );
}
