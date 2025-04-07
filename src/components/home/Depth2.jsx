import { Link } from 'react-router';

export default function Depth2({ subMenu }) {
  return (
    <ul className="">
      {subMenu.map((menuItem) => (
        // console.log(menuItem),
        <li key={menuItem.name}>
          <a href={`${menuItem.path}`}> {menuItem.name}</a>
        </li>
      ))}

      {/* <li>
        <Link></Link>
      </li> */}
    </ul>
  );
}
