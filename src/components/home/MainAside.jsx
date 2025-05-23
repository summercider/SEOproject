import BrandLink from '@/components/home/BrandLink';
import GradeList from '@/components/home/GradeList';
import LoginPop from '@/components/LoginPop';
import { useState } from 'react';
import { Link } from 'react-router';

// 오른쪽 컨텐츠
export default function MainAside() {
  const [show, setShow] = useState(false);

  function handleLoginPop() {
    setShow(true);
  }

  return (
    <div
      className="max-sm:hidden w-[310px] pt-[30px] bg-white pl-[40px] pb-[100px] relative
      before:content-[''] before:absolute before:left-0
      before:top-0 before:border before:border-r-0 before:border-t-0 
      before:border-b-0 before:border-[#DDE0E3] before:h-full z-90"
    >
      <div className="sticky top-[30px]">
        <h3 className="text-[22px] leading-[28px] font-bold text-[#000] tracking-[-0.025em]">
          <span className="block">고객님,</span>
          오늘도 <strong className="text-[#00a5b9] font-bold">EATZ</strong>
          하세요!
        </h3>
        <Link
          className="block text-[16px] text-black tracking-[-0.025em] leading-[22px] my-[20px] "
          onClick={() => handleLoginPop()}
        >
          EATZ마일을 확인해 보세요.
        </Link>
        {show ? <LoginPop show={show} setShow={setShow} /> : null}
        <GradeList />
        <BrandLink />
      </div>
    </div>
  );
}
