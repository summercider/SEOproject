import Gnb from '@/components/home/Gnb';
import { Link } from 'react-router';
import logo from '@/assets/images/comm_header_logo.svg';
import UserMenu from '@/components/home/UserMenu';

export default function Header() {
  return (
    <header className="h-[130px] border-b border-b-[#ddd]">
      <div className="max-w-[1150px] my-[0] mx-[auto]">
        <UserMenu />
      </div>
      <div className="flex items-center max-w-[1150px] h-[90px] my-[0] mx-[auto]">
        <h1 className="w-[72px] h-[60px] py-[10px]">
          <Link className="block">
            <img src={logo} />
          </Link>
        </h1>
        <Gnb />
      </div>
    </header>
  );
}
