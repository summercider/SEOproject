import Depth2 from '@/components/home/Depth2';
import { useLocation } from 'react-router';

const menus = [
  {
    title: '브랜드',
    subMenu: [
      { name: '롯데리아', path: '/brand/ria' },
      { name: '엔제리너스', path: '/brand/engel' },
      { name: '크리스피크림', path: '/brand/cream' },
      { name: '플레:이팅', path: '/brand/plating' },
    ],
  },
  {
    title: '이벤트',
    subMenu: [
      { name: '이벤트', path: '' },
      { name: '체험클래스', path: '' },
      { name: '도넛클래스', path: '' },
      { name: '룰렛', path: '' },
      { name: 'EATZ TV', path: '' },
      { name: '출석체크', path: '' },
    ],
  },
  {
    title: '스토어',
    path: '/store',
    subMenu: [
      { name: '전체', path: '' },
      { name: '쿠폰', path: '/store/coupon' },
      { name: 'EATZ카드', path: '' },
      { name: '쇼핑', path: '' },
    ],
  },
  {
    title: '고객지원',
    subMenu: [
      { name: 'FAQ', path: '/voc/faq' },
      { name: '공지사항', path: '' },
      { name: '설문조사', path: '' },
      { name: '고객의 소리', path: '' },
    ],
  },
];

export default function Gnb({ isOpen, onMouseEnter }) {
  const location = useLocation();

  return (
    <ul className="flex ml-[60px]" onMouseEnter={onMouseEnter}>
      {menus.map((item) => {
        const isActiveMenu =
          location.pathname.startsWith(item.path) ||
          item.subMenu.some((sub) => sub.path === location.pathname);

        return (
          <li key={item.title} className="w-[117px] relative">
            <button
              className={`text-[20px] py-[12px] w-full
          font-bold tracking-[-0.025em] text-left hover:text-[#00a5b9]
          ${isActiveMenu ? 'text-[#00a5b9]' : 'text-[#000]'}`}
            >
              {item.title}
            </button>
            {isOpen && (
              <Depth2
                subMenu={item.subMenu}
                activePath={location.pathname}
                onSubClick={(sub) => console.log(`${sub}`)}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
