import Depth2 from '@/components/home/Depth2';

const menus = [
  {
    title: '브랜드',
    subMenu: [
      { name: '롯데리아', path: '/' },
      { name: '엔제리너스', path: '/' },
      { name: '크리스피크림 도넛', path: '/' },
      { name: '플레:이팅', path: '/' },
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
    subMenu: [
      { name: '전체', path: '/' },
      { name: '쿠폰', path: '/' },
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

export default function Gnb() {
  return (
    <ul className="flex ml-[60px]">
      {menus.map((item) => (
        <li key={item.title} className="w-[117px]">
          <button className="text-[20px] py-[12px]">{item.title}</button>
          {/* <Depth2></Depth2> */}
          <Depth2 subMenu={item.subMenu} />
        </li>
      ))}
    </ul>
  );
}
