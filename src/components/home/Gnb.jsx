import { Link } from 'react-router';

const menus = [
  { path: '/', menu: 'Home' },
  { path: '/brand', menu: 'brand' },
];
export default function Gnb() {
  return (
    <ul className="flex">
      {menus.map((item) => (
        <li key={item.menu} className="p-[30px]">
          <Link to={item.path} className="text-[20px]">
            {item.menu}
          </Link>
        </li>
      ))}
    </ul>
  );
}
