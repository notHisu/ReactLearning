export default function Item({ item, onDeleteItems, onTogglePacked }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onTogglePacked(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
