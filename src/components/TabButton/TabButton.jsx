export default function TabButton({ label, onSelect }) {
  console.log('TabButton Component Executing');

  return (
  <li>
    <button onClick={onSelect}>{label}</button>
  </li>
  );
}
