import InNav from '@/components/InNav';
import NoResult from '@/components/NoResult';
import { FaqIcon } from '@/components/voc/FaqIcon';
import { useState } from 'react';

const txt = '현재 진행중인 \n설문조사가 없습니다.';
const dataInit = {
  global: '고객지원',
  local: '설문조사',
};
export default function Survey() {
  const [brandFilter, setBrandFilter] = useState(null); //브랜드 필터
  const [inputValue, setInputValue] = useState(''); //인풋 필드 값 초기화용

  const filterBtn = (brand) => {
    setBrandFilter(brand);
  };

  return (
    <div className="wrapper px-[20px] pt-[30px] pb-[100px] max-w-[1150px] mx-auto my-0">
      {/* 헤더 */}
      <div className="flex justify-between items-start mb-[30px] ">
        <h2 className="text-[26px] font-semibold text-gray-600 ">
          {dataInit.local}
        </h2>
        <InNav dataInit={dataInit} />
      </div>
      {/*  */}
      <div>
        {/* 필터링버튼 */}
        <ul
          className="flex gap-[6px]  pb-[20px]
                    [&>li>button]:px-[20px] [&>li>button]:py-[12px] [&>li>button]:rounded-full [&>li>button]:text-[14px]
                    max-sm:[&>li]:shrink-0 max-sm:overflow-x-scroll"
        >
          <li>
            <button
              className={`${
                brandFilter === null
                  ? 'text-[#00A5B9] bg-[#fff] border-[#00A5B9] border-2'
                  : 'text-[#666] bg-[rgba(221,224,227,0.4)] border-[rgba(221,224,227,0.4)] border-2'
              }`}
              onClick={() => filterBtn(null)}
            >
              전체
            </button>
          </li>
          <li>
            <button
              className={`${
                brandFilter === 'LOTTE EATZ'
                  ? 'text-[#00A5B9] bg-[#fff] border-[#00A5B9] border-2'
                  : 'text-[#666] bg-[rgba(221,224,227,0.4)] border-[rgba(221,224,227,0.4)] border-1'
              }`}
              onClick={() => filterBtn('LOTTE EATZ')}
            >
              LOTTE EATZ
            </button>
          </li>
          <li>
            <button
              className={`${
                brandFilter === '롯데리아'
                  ? 'text-[#00A5B9] bg-[#fff] border-[#00A5B9] border-2'
                  : 'text-[#666] bg-[rgba(221,224,227,0.4)] border-[rgba(221,224,227,0.4)] border-1'
              }`}
              onClick={() => filterBtn('롯데리아')}
            >
              롯데리아
            </button>
          </li>
          <li>
            <button
              className={`${
                brandFilter === '엔제리너스'
                  ? 'text-[#00A5B9] bg-[#fff] border-[#00A5B9] border-2'
                  : 'text-[#666] bg-[rgba(221,224,227,0.4)] border-[rgba(221,224,227,0.4)] border-1'
              }`}
              onClick={() => filterBtn('엔제리너스')}
            >
              엔제리너스
            </button>
          </li>
          <li>
            <button
              className={`${
                brandFilter === '크리스피크림도넛'
                  ? 'text-[#00A5B9] bg-[#fff] border-[#00A5B9] border-2'
                  : 'text-[#666] bg-[rgba(221,224,227,0.4)] border-[rgba(221,224,227,0.4)] border-1'
              }`}
              onClick={() => filterBtn('크리스피크림도넛')}
            >
              크리스피크림도넛
            </button>
          </li>
          <li>
            <button
              className={`${
                brandFilter === '플레:이팅'
                  ? 'text-[#00A5B9] bg-[#fff] border-[#00A5B9] border-2'
                  : 'text-[#666] bg-[rgba(221,224,227,0.4)] border-[rgba(221,224,227,0.4)] border-1'
              }`}
              onClick={() => filterBtn('플레:이팅')}
            >
              플레:이팅
            </button>
          </li>
          <li>
            <button
              className={`${
                brandFilter === '파머스박스'
                  ? 'text-[#00A5B9] bg-[#fff] border-[#00A5B9] border-2'
                  : 'text-[#666] bg-[rgba(221,224,227,0.4)] border-[rgba(221,224,227,0.4)] border-1'
              }`}
              onClick={() => filterBtn('파머스박스')}
            >
              파머스박스
            </button>
          </li>
        </ul>
        {/* 인풋 */}
        <div className="p-[16px] flex justify-center w-full max-sm:p-0">
          <div className="relative max-sm:w-full">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-[395px] pl-[16px] pr-[35px] rounded-[4px] h-[44px] border-[#DDE0E3] focus:border-[#00A5B9]
                                max-sm:w-full"
              type="text"
              placeholder="검색어를 입력해주세요"
            />
            <button
              className="absolute top-1/2 -translate-y-1/2 right-[40px]"
              onClick={() => {
                setInputValue('');
              }}
            >
              {inputValue && <FaqIcon.close />}
            </button>
            <button className="absolute top-1/2 -translate-y-1/2 right-[12px]">
              <FaqIcon.search />
            </button>
          </div>
        </div>
      </div>
      <NoResult txt={txt} />
    </div>
  );
}
