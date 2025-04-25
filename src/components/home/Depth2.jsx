import { Link } from 'react-router';

export default function Depth2({
  subMenu,
  activePath,
  onSubClick,
  handleMouseUp,
}) {
  return (
    <ul
      className="absolute left-0 top-[63px] pr-[20px] w-full z-[999]"
      onClick={handleMouseUp}
    >
      {subMenu.map((menuItem) => {
        const isActiveSub = menuItem.path === activePath;

        return (
          <li key={menuItem.name}>
            <Link
              to={menuItem.path}
              onClick={() => onSubClick(menuItem.name)}
              className={`text-[14px]
          py-[7px] block font-normal hover:text-[#00a5b9] transition-[0.5s]
          ${isActiveSub ? 'text-[#00a5b9]' : 'text-[#000]'}
          `}
            >
              {menuItem.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
