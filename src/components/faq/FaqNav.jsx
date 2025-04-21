import { Link } from 'react-router';
import home from '@/assets/images/comm_ico_home.svg';
import divide from '@/assets/images/ico_breadcrumb_divide.svg';

export default function FaqNav() {
  return (
    <ul className="flex justify-end text-[13px] leading-[16px] items-center gap-[8px] text-gray-400 max-sm:hidden">
      <li>
        <Link to={'/'}>
          <img src={`${home}`} className="-mt-[1px]" />
        </Link>
      </li>
      <li>
        <img src={`${divide}`} />
      </li>
      <li>
        <span>고객지원</span>
      </li>
      <li>
        <img src={`${divide}`} />
      </li>
      <li>
        <span>FAQ</span>
      </li>
    </ul>
  );
}
