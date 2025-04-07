import { Link } from 'react-router';
import cart from '@/assets/images/icon/comm_ico_cart.svg';
import myPage from '@/assets/images/icon/comm_ico_my.svg';

const util = [
  { img: cart, alt: '장바구니' },
  { img: myPage, alt: '마이페이지' },
];

export default function UtilMenu() {
  return (
    <ul className="flex ml-[auto]">
      {util.map((item, index) => (
        <li key={index} className="[&+&]:pl-[20px]">
          <Link>
            <img src={item.img} alt={item.alt} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
