import LoginPop from '@/components/LoginPop';
import { useState } from 'react';

const gradeList = [
  {
    brand: '롯데리아',
    logo: '/images/csa/brand-grade/comm_ico_brand_lotteria.png',
    bgColor: '#f00028',
  },
  {
    brand: '엔제리너스',
    logo: '/images/csa/brand-grade/comm_ico_brand_angelinus.png',
    bgColor: '#DBD6CB',
  },
  {
    brand: '크리스피크림 도넛',
    logo: '/images/csa/brand-grade/comm_ico_brand_krispy.png',
    bgColor: '#31955B',
  },
];

// 어사이드 상단 등급혜택 리스트
export default function GradeList() {
  const [show, setShow] = useState(false);

  function handleLoginPop() {
    setShow(true);
  }

  return (
    <ul>
      {gradeList.map((item) => (
        <li
          key={item.brand}
          className="flex gap-x-[16px] py-[16px] px-[20px]
        bg-[rgba(239,241,243,0.4);] [&+&]:mt-[6px]"
          onClick={handleLoginPop}
        >
          <div
            className="w-[40px] h-[40px] rounded-[40px]"
            style={{
              backgroundImage: `url(${item.logo})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '100%',
              backgroundColor: `${item.bgColor}`,
            }}
          ></div>
          <div className="flex flex-col justify-around">
            <strong className="text-[13px] text-black font-bold">
              {item.brand}
            </strong>
            <span className="text-[12px]">등급혜택을 받아보세요!</span>
          </div>
          {show ? <LoginPop show={show} setShow={setShow} /> : null}
        </li>
      ))}
    </ul>
  );
}
