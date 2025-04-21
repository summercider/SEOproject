import LoginGuestPop from '@/components/login/LoginGuestPop';
import { LoginIcon } from '@/components/login/LoginIcon';
import React, { useState } from 'react';
import { Link } from 'react-router';

export default function LoginJoin() {
  //팝업내부 초기화 < key값변경으로 리렌더함
  const [show, setShow] = useState(false);

  const popShow = (e) => {
    e.stopPropagation();
    setShow(true);
  };

  return (
    <div className="flex flex-col items-center text-[14px] text-gray-600 mt-[40px] ">
      <h4>
        아직 <strong className="text-[#00A5B9]">EATZ</strong> 회원이 아니신가요?
      </h4>
      <Link to={'/member/joinGate'} className="mt-[20px] w-full">
        <button className="btn w-full border-[#00A5B9] text-[#00A5B9] rounded-[4px] h-[44px] text-[14px] hover:bg-[rgba(0,165,185,0.1)]">
          회원가입
        </button>
      </Link>
      <button
        onClick={popShow}
        className="mt-[20px] flex items-center text-[14px] h-[18px] pr-[12px] relative text-gray-600"
      >
        비회원/주문조회
        <LoginIcon.more className="absolute right-0 top-1/2 -translate-y-1/2" />
      </button>
      <LoginGuestPop show={show} setShow={setShow} />
    </div>
  );
}
