import { Link } from 'react-router';

export default function UserMenu() {
  const userMenus = [
    { path: '/', menu: '로그인/회원가입' },
    { path: '/', menu: '주문/예약 내역' },
    { path: '/', menu: '매장찾기' },
  ];

  return (
    <ul
      className="flex justify-end items-center h-[40px] 
    text-[13px] text-[#666] gap-x-[20px] tracking-[-0.025em] leading-[18px]"
    >
      {userMenus.map((userMenu) => (
        <li key={userMenu.menu}>
          <Link to={userMenu.path} className="py-[6px]">
            {userMenu.menu}
          </Link>
        </li>
      ))}
    </ul>
  );
}
