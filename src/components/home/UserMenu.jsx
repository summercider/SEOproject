import LoginPop from '@/components/LoginPop';
import { useState } from 'react';
import { Link } from 'react-router';

export default function UserMenu() {
  const [show, setShow] = useState(false);
  const userMenus = [
    { path: '/login', menu: '로그인/회원가입' },
    { path: '/', menu: '주문/예약 내역' },
    { path: '/', menu: '매장찾기' },
  ];

  function handleLoginPop(userMenu, e) {
    if (userMenu.menu !== '로그인/회원가입') {
      e.preventDefault(); // () 빠져서 추가함
      console.log(userMenu);
      setShow(true);
    }
  }

  return (
    <ul
      className="flex justify-end items-center h-[40px] 
    text-[13px] text-[#666] gap-x-[20px] tracking-[-0.025em] leading-[18px]
    max-sm:hidden"
    >
      {userMenus.map((userMenu) => (
        <li key={userMenu.menu}>
          <Link
            to={userMenu.path}
            className="py-[6px]"
            onClick={(e) => handleLoginPop(userMenu, e)}
          >
            {userMenu.menu}
          </Link>
        </li>
      ))}
      {/* 팝업 반복문에서 뺴버림 */}
      {show ? <LoginPop show={show} setShow={setShow} /> : null}
    </ul>
  );
}
