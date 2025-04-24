import Gnb from '@/components/home/Gnb';
import { Link, useLocation } from 'react-router';
import logo from '@/assets/images/comm_header_logo.svg';
import UserMenu from '@/components/home/UserMenu';
import { useEffect, useRef, useState } from 'react';
import UtilMenu from '@/components/home/UtilMenu';
import OrderButton from '@/components/home/OrderButton';
import MoTopMenuWrap from '@/components/mobile/MoTopMenuWrap';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const hdRef = useRef(null);
  const hbRef = useRef(null);
  const location = useLocation();

  function handleMouseEnter() {
    setIsOpen(true);
  }

  function handleMouseLeave() {
    setIsOpen(false);
  }

  function handleHeaderClick(e) {
    if (hdRef.current && e.target === hdRef.current) {
      setIsOpen(false);
      // console.log('hd');
    }
  }

  function handleHeaderBottomClick(e) {
    if (hbRef.current && e.target === hbRef.current) {
      setIsOpen(false);
      // console.log('hd-bottom');
    }
  }

  function handleClickOutside(e) {
    if (hdRef.current && !hdRef.current.contains(e.target)) {
      setIsOpen(false);
      // console.log('outSide');
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 모바일 상단
  useEffect(() => {
    function handleMouseWheel(e) {
      if (e.deltaY > 0) {
        setIsScrolled('down');
        // console.log('상단 down', e.deltaY);
      } else if (e.deltaY < 0) {
        setIsScrolled('up');
        if (window.scrollY === 0) {
          setIsScrolled('top');
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
        // console.log('상단 up', e.deltaY);
      } else {
        setIsScrolled('');
      }
    }

    function handleScroll() {
      if (window.scrollY === 0) {
        setIsScrolled('top');
      }
    }

    window.addEventListener('wheel', handleMouseWheel);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleMouseWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 경로별 모바일 배경색
  const bgColor = () => {
    if (location.pathname === '/') {
      return (
        <div
          className={`max-w-[1150px] my-[0] mx-[auto]
      px-[20px] ${
        isScrolled === 'up'
          ? 'max-sm:bg-none'
          : 'max-sm:bg-[linear-gradient(rgba(16,4,3,0.25)0%,rgba(255,255,255,0)100%)]'
      }`}
        >
          <UserMenu />
          <MoTopMenuWrap isScrolled={isScrolled} />
        </div>
      );
    } else {
      return (
        <div
          className="max-w-[1150px] my-[0] mx-[auto]
      px-[20px] max-sm:bg-none"
        >
          <UserMenu />
          <MoTopMenuWrap isScrolled={isScrolled} />
        </div>
      );
    }
  };

  return (
    <header
      ref={hdRef}
      className={`h-[130px] relative z-[100]
    before:content-[''] before:absolute before:left-0 before:top-[40px] 
    before:w-full before:h-[1px] before:border before:border-t-0 before:border-[#DDE0E3]
    ${isOpen ? 'after:block' : 'after:hidden'} 
    after:content-[''] after:absolute after:left-0 after:top-[127px] 
    after:w-full after:h-[266px] after:bg-white after:z-[1]
    after:shadow-[0_4px_10px_rgba(0,0,0,0.05)]

    max-sm:before:border-0 max-sm:fixed max-sm:w-full max-sm:h-[55px]
    ${
      isScrolled === 'down'
        ? '-translate-y-[100%] transition-[all,.3s]'
        : '-translate-0'
    }
    ${
      isScrolled === 'up'
        ? 'bg-[rgba(255,255,255,0.9)] shadow-[0_6px_12px_rgba(0, 0, 0, 0.05)]'
        : 'bg-transparent shadow-none'
    }
    ${isScrolled === 'top' ? 'bg-transparent transition-[all,.3s]' : ''}
    `}
      onMouseLeave={handleMouseLeave}
      onClick={handleHeaderClick}
    >
      {bgColor()}
      {/* <div
        className={`max-w-[1150px] my-[0] mx-[auto]
      px-[20px] ${
        isScrolled === 'up'
          ? 'max-sm:bg-none'
          : 'max-sm:bg-[linear-gradient(rgba(16,4,3,0.25)0%,rgba(255,255,255,0)100%)]'
      }`}
      >
        <UserMenu />
        <MoTopMenuWrap isScrolled={isScrolled} />
      </div> */}
      <div
        className="flex items-center max-w-[1150px] h-[90px] my-[0] mx-[auto]
      px-[20px] max-sm:hidden"
        onClick={handleHeaderBottomClick}
        ref={hbRef}
      >
        <h1 className="w-[72px] h-[60px] py-[10px]">
          <Link to="/" className="block">
            <img src={logo} alt="롯데잇츠" />
          </Link>
        </h1>
        <Gnb onMouseEnter={handleMouseEnter} isOpen={isOpen} />
        <UtilMenu />
        <OrderButton />
      </div>
    </header>
  );
}
