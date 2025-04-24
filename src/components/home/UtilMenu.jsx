import { Link } from 'react-router';
import cart from '@/assets/images/icon/comm_ico_cart.svg';
import myPage from '@/assets/images/icon/comm_ico_my.svg';
import LoginPop from '@/components/LoginPop';
import { useState } from 'react';

const util = [
  { img: cart, alt: '장바구니' },
  { img: myPage, alt: '마이페이지' },
];

export default function UtilMenu() {
  const [show, setShow] = useState(false);

  function handleLoginPop(e) {
    e.preventDefault();
    setShow(true);
  }

  return (
    <ul className="flex ml-[auto]">
      {util.map((item, index) => (
        <li key={index} className="[&+&]:pl-[20px]">
          <Link onClick={(e) => handleLoginPop(e)}>
            <img src={item.img} alt={item.alt} />
          </Link>
        </li>
      ))}
      {/* 팝업 반복문에서 뺴버림 */}
      {show ? <LoginPop show={show} setShow={setShow} /> : null}
    </ul>
  );
}
