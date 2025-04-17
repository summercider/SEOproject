import Depth2 from '@/components/home/Depth2';

const menus = [
  {
    title: '브랜드',
    path: '/brand', // 이거 다른배열 다추가
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
      { name: '이벤트', path: '/' },
      { name: '체험클래스', path: '/' },
      { name: '도넛클래스', path: '/' },
      { name: '룰렛', path: '/' },
      { name: 'EATZ TV', path: '/' },
      { name: '출석체크', path: '/' },
    ],
  },
  {
    title: '스토어',
    path: '/store',
    subMenu: [
      { name: '전체', path: '/' },
      { name: '쿠폰', path: '/store/coupon' },
      { name: 'EATZ카드', path: '/' },
      { name: '쇼핑', path: '/' },
    ],
  },
  {
    title: '고객지원',
    subMenu: [
      { name: 'FAQ', path: '/' },
      { name: '공지사항', path: '/' },
      { name: '설문조사', path: '/' },
      { name: '고객의 소리', path: '/' },
    ],
  },
];

export default function Gnb({ isOpen, onMouseEnter }) {
  return (
    <ul className="flex ml-[60px]" onMouseEnter={onMouseEnter}>
      {menus.map((item) => (
        <li key={item.title} className="w-[117px] relative">
          <button
            className="text-[20px] py-[12px] text-[#000] w-full
          font-bold tracking-[-0.025em] text-left hover:text-[#00a5b9] transition-[0.3s]"
          >
            {item.title}
          </button>
          {isOpen && <Depth2 subMenu={item.subMenu} />}
        </li>
      ))}
    </ul>
  );
}
