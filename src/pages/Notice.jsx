import InNav from '@/components/InNav';
import NoticeMore from '@/components/voc/NoticeMore';
import NoResult from '@/components/NoResult';
import { FaqIcon } from '@/components/voc/FaqIcon';
import NoticeList from '@/components/voc/NoticeList';
import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';

const dataInit = {
  global: '고객지원',
  local: '공지사항',
};
const txt = '검색한 내용이 없습니다.\n다시 검색해 주세요';

export default function Notice() {
  const [brandFilter, setBrandFilter] = useState(null); //브랜드 필터
  const inputRef = useRef(null); //팝업에서 렌더링없이 필드값 확인
  const [inputValue, setInputValue] = useState(''); //인풋 필드 값 초기화용
  const [visibleCount, setVisibleCount] = useState(10); // 리스트10개씩 보여주기
  const [keyword, setKeyword] = useState(''); //인풋 검색어 키워드

  // 데이터
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['/notice'],
    queryFn: () => fetch('/notice').then((res) => res.json()),
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  //
  const faqList = []; //초기데이터 2중배열을 1개배열로 바꿔서 복사
  for (let i = 0; i < data.length; i++) {
    const group = data[i];
    for (let j = 0; j < group.length; j++) {
      faqList.push(group[j]);
    }
  }
  faqList.sort((a, b) => (a.date < b.date ? 1 : -1));
  //

  // 버튼필터----
  const brandFilteredVocList = faqList.filter((faq) => {
    if (!brandFilter) return true;

    return faq.brand === brandFilter;
  });

  const filterBtn = (brand) => {
    setBrandFilter(brand);
    setInputValue('');
    setVisibleCount(10); //페이지바뀌면 다시 10개
    setKeyword(''); // 검색 키워드 초기화
  };

  // ------

  // 인풋필터----
  const finalFilteredVocList = brandFilteredVocList.filter((faq) => {
    if (!keyword) return true; // 검색어가 없으면 모든 항목을 통과
    return (
      faq.title.includes(keyword) ||
      faq.type.includes(keyword) ||
      faq.date.includes(keyword)
    );
  });

  const searchBtn = () => {
    setKeyword(inputRef.current.value);
  };
  // -------
  const showMoreBtn = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const limitedVocList = finalFilteredVocList.slice(0, visibleCount); //

  return (
    <div className="wrapper px-[20px] pt-[30px] pb-[100px] max-w-[1150px] mx-auto my-0">
      <div className="inner">
        {/* 헤드 */}
        <div className="flex justify-between items-start mb-[30px] ">
          <h2 className="text-[26px] font-semibold text-gray-600 ">
            {dataInit.local}
          </h2>
          <InNav dataInit={dataInit} />
        </div>
        <div>
          {/* 필터링버튼 */}
          <ul
            className="flex gap-[6px]  pb-[20px] max-sm:[&>li]:shrink-0 max-sm:overflow-x-scroll
                    [&>li>button]:px-[20px] [&>li>button]:py-[12px] [&>li>button]:rounded-full [&>li>button]:text-[14px]"
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
          {/* 필터링인풋 */}
          <div className="p-[16px] flex justify-center w-full max-sm:p-0">
            <div className="relative max-sm:w-full">
              <input
                ref={inputRef}
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
              <button
                onClick={searchBtn}
                className="absolute top-1/2 -translate-y-1/2 right-[12px]"
              >
                <FaqIcon.search />
              </button>
            </div>
          </div>
        </div>
        {/* 리스트 */}
        {limitedVocList.length === 0 ? (
          <NoResult txt={txt} />
        ) : (
          <NoticeList limitedVocList={limitedVocList} />
        )}

        {/* 더보기 */}
        <NoticeMore
          showMoreBtn={showMoreBtn}
          visibleCount={visibleCount}
          finalFilteredVocList={finalFilteredVocList}
        />
      </div>
    </div>
  );
}
