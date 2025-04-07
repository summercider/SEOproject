import { Link } from 'react-router';

export default function Depth2({ subMenu }) {
  return (
    <ul className="absolute left-0 top-[63px] pr-[20px] w-full z-[999]">
      {subMenu.map((menuItem) => (
        <li key={menuItem.name}>
          <Link
            className="text-[14px] text-[#000] 
          py-[7px] block font-normal hover:text-[#00a5b9] transition-[0.5s]"
          >
            {menuItem.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
