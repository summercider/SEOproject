import FaqNav from '@/components/faq/FaqNav';

export default function Faq() {
  return (
    <div className="wrapper px-[20px] pt-[30px] pb-[100px]">
      wrapper
      <div className="inner">
        {/* 헤드 */}
        <div className="flex justify-between mb-[30px] ">
          <h2 className="text-[26px] font-semibold text-gray-600 ">FAQ</h2>
          <FaqNav />
        </div>
        <div>
          <ul className="flex border-1">
            <li>전체</li>
            <li>
              <button> LOTTE EATZ</button>
            </li>
            <li>
              <button>롯데리아</button>
            </li>
            <li>
              <button>엔제리너스</button>
            </li>
            <li>
              <button>크리스피크림 도넛</button>
            </li>
            <li>플레:이팅</li>
            <li>파머스박스</li>
          </ul>
          <div>검색인풋</div>
          <div>필터링팝업</div>
        </div>
        {/* 바디 */}
        <div>바디 ul</div>
      </div>
    </div>
  );
}
