import { Link } from 'react-router';

const menus = [
  { path: '/', menu: '브랜드' },
  { path: '/brand', menu: '이벤트' },
  { path: '/store', menu: '스토어' },
  { path: '/voc', menu: '고객지원' },
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
