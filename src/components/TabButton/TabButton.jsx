export default function TabButton({ label, onSelect,isSelected }) {
  // console.log('TabButton rendered');
  return (
  <li>
    <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{label}</button>
  </li>
  );
}
