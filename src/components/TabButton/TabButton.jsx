export default function TabButton({ label,isSelected, ...props }) {
  // console.log('TabButton rendered');
  return (
  <li>
    <button className={isSelected ? 'active' : undefined} {...props}>{label}</button>
  </li>
  );
}
