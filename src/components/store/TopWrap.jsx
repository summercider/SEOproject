import divide from '@/assets/images/ico_breadcrumb_divide.svg';
import home from '@/assets/images/comm_ico_home.svg';
import cpArrow from '@/assets/images/comm_ico_btn_arrow.svg';

import { Link } from 'react-router';
import { useState } from 'react';
import LoginPop from '@/components/LoginPop';

export default function TopWrap() {
  const [show, setShow] = useState(false);

  function handleLoginPop() {
    setShow(true);
  }

  return (
    <div className="max-sm:px-[20px]">
      <div className=" pb-[30px] text-[#5f5e5e] text-[26px] flex justify-between max-sm:text-[18px]">
        <h3 className="font-[500] text-gray-600">쿠폰</h3>
        <div>
          <ul className="flex text-[13px] leading-[16px] items-center gap-[8px] text-gray-400 ">
            <li>
              <Link to="/">
                <img src={home} alt="메인페이지이동" className="-mt-[1px]" />
              </Link>
            </li>
            <li>
              <img src={divide} />
            </li>
            <li>스토어</li>
            <li>
              <img src={divide} />
            </li>
            <li>
              <span>쿠폰</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start">
        <span className="text-[16px] text-black tracking-[-0.025em]">
          지금 당장 쓸 수 있는
          <strong className="font-bold"> 쿠폰 보러가기</strong>
        </span>
        <button
          type="button"
          className="btn w-[200px] h-[44px] rounded-[4px] flex gap-x-[6px] items-center max-sm:w-full max-sm:mt-[20px] hover:bg-[#EFF1F3]"
          onClick={handleLoginPop}
        >
          <span className="text-[14px] leading-[18px] text-black font-bold">
            나의 쿠폰
          </span>
          {show ? <LoginPop show={show} setShow={setShow} /> : null}
          <img src={cpArrow} alt="나의 쿠폰 보러가기" />
        </button>
      </div>
    </div>
  );
}
