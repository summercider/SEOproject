import { Link } from 'react-router';
import home from '@/assets/images/comm_ico_home.svg';
import divide from '@/assets/images/ico_breadcrumb_divide.svg';

export default function RouletteNav() {
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
        <span>
          <Link to={'/'}>이벤트</Link>
        </span>
      </li>
      <li>
        <img src={`${divide}`} />
      </li>
      <li>
        <span>룰렛</span>
      </li>
    </ul>
  );
}
