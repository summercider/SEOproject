import Gnb from '@/components/home/Gnb';
import { Link } from 'react-router';
import logo from '@/assets/images/comm_header_logo.svg';
import UserMenu from '@/components/home/UserMenu';
import { useState } from 'react';
import UtilMenu from '@/components/home/UtilMenu';
import OrderButton from '@/components/home/OrderButton';

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header
      className={`h-[130px] relative z-[999]
    before:content-[''] before:absolute before:left-0 before:top-[40px] 
    before:w-full before:h-[1px] before:border before:border-t-0 before:border-[#DDE0E3]
    ${isHovered ? 'after:block' : 'after:hidden'} 
    after:content-[''] after:absolute after:left-0 after:top-[127px] 
    after:w-full after:h-[266px] after:bg-white after:z-[1]
    after:shadow-[0_4px_10px_rgba(0,0,0,0.05)]`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[1110px] max-sm: my-[0] mx-[auto]">
        <UserMenu />
      </div>
      <div className="flex items-center max-w-[1110px] h-[90px] my-[0] mx-[auto]">
        <h1 className="w-[72px] h-[60px] py-[10px]">
          <Link className="block">
            <img src={logo} />
          </Link>
        </h1>
        <Gnb onMouseEnter={handleMouseEnter} isHovered={isHovered} />
        <UtilMenu />
        <OrderButton />
      </div>
    </header>
  );
}
