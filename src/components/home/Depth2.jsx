import { Link } from 'react-router';

export default function Depth2({ subMenu }) {
  return (
    <ul className="">
      {subMenu.map((menuItem) => (
        <li key={menuItem.name}>{menuItem.name}</li>
      ))}

      {/* <li>
        <Link></Link>
      </li> */}
    </ul>
  );
}
