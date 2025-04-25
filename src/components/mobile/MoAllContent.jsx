import MoBrandMenu from '@/components/mobile/MoBrandMenu';
import MoContentList from '@/components/mobile/MoContentList';
import { useState } from 'react';

const moContents = [
  { title: '브랜드', Component: MoBrandMenu },
  {
    title: '이벤트',
    Component: MoContentList,
    subMenu: [
      { name: '이벤트', path: '/event/all' },
      { name: '체험클래스', path: '/event/class' },
      { name: '도넛클래스', path: '/event/class' },
      { name: '룰렛', path: '/event/roulette' },
      { name: 'EATZ TV', path: '/event/eatzTv' },
      { name: '출석체크', path: '/event/dailycheck' },
    ],
  },
  {
    title: '스토어',
    path: '/store',
    Component: MoContentList,
    subMenu: [
      { name: '전체', path: '/store/all' },
      { name: '쿠폰', path: '/store/coupon' },
      { name: 'EATZ카드', path: '/store/card' },
      { name: '쇼핑', path: '/store/shop' },
    ],
  },
  {
    title: '고객지원',
    Component: MoContentList,
    subMenu: [
      { name: 'FAQ', path: '/voc/faq' },
      { name: '공지사항', path: '/voc/notice' },
      { name: '설문조사', path: '/voc/survey' },
      { name: '고객의 소리', path: '/voc/voice' },
    ],
  },
  {
    title: '가맹점 모집',
    Component: MoContentList,
    subMenu: [
      { name: '롯데리아', path: '' },
      { name: '엔제리너스', path: '' },
      { name: '크리스피크림 도넛', path: '' },
      { name: '창업설명회 신청', path: '' },
    ],
  },
];

function MoMenuList({ children, title, accordion, toggleAccordion }) {
  return (
    <li>
      <button
        type="button"
        className="relative w-full text-left text-[18px] leading-[24px] text-black font-medium py-[20px] pr-[32px]"
        onClick={() => toggleAccordion(title)}
      >
        {title}
        <span className="w-[16px] h-[16px] absolute top-[50%] -translateY-[50%] right-0 bg-no-repeat bg-cover">
          <svg
            className={`{${
              accordion ? 'transition-[all,.3s] rotate-[180deg] ' : 'rotate-0'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            id="arrow_16"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <rect
              id="사각형_3332"
              data-name="사각형 3332"
              width="16"
              height="16"
              fill="none"
              opacity="0.2"
            />
            <path
              id="패스_45"
              data-name="패스 45"
              d="M10,0,5,5,0,0"
              transform="translate(3 5.502)"
              fill="none"
              stroke="#000"
              strokeWidth="1"
            />
          </svg>
        </span>
      </button>
      {accordion && children}
    </li>
  );
}
// {
//   accordion
//     ? 'translate(3 5.502)'
//     : 'translate(3 5.502) rotate(180 5 5)'
// }

// 중간 컨텐츠
export default function MoAllContent() {
  const [accordion, setAccordion] = useState({ 브랜드: true });

  function toggleAccordion(key) {
    setAccordion((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  return (
    <>
      <div className="w-full h-[10px] bg-[#F3F5F7]">
        <span className="sr-only">컨텐츠구분배경색</span>
      </div>
      <div className="px-[20px] bg-white pt-[10px] pb-[40px]">
        <ul>
          {moContents.map((menu) => {
            const Component = menu.Component;
            return (
              <MoMenuList
                key={menu.title}
                title={menu.title}
                accordion={accordion[menu.title]}
                toggleAccordion={toggleAccordion}
              >
                {menu.subMenu ? (
                  <Component moContents={menu.subMenu} />
                ) : (
                  <Component />
                )}
              </MoMenuList>
            );
          })}
        </ul>
      </div>
    </>
  );
}
