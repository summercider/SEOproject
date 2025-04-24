import NoResult from '@/components/NoResult';
import FaqFilterSelect from '@/components/voc/FaqFilterSelect';
import { FaqIcon } from '@/components/voc/FaqIcon';
import FaqList from '@/components/voc/FaqList';
import FaqMore from '@/components/voc/FaqMore';
import FaqNav from '@/components/voc/FaqNav';
import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';

export default function Faq() {
  const [show, setShow] = useState(false); //pop 상태
  const [brandFilter, setBrandFilter] = useState(null); //브랜드 필터
  const [showAnswer, setShowAnswer] = useState(false); // answer칸 보여주기 상태
  const [visibleCount, setVisibleCount] = useState(10); // 리스트10개씩 보여주기
  const [inputValue, setInputValue] = useState(''); //인풋 필드 값 초기화용
  const [keyword, setKeyword] = useState(''); //인풋 검색어 키워드
  const inputRef = useRef(null); //팝업에서 렌더링없이 필드값 확인
  const txt = '검색한 내용이 없습니다. \n다시검색해주세요'; //필터링 결과없을떄

  // ---------------------------------------------------------------------------------------------------------------------
  // 데이터 가져오기
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['/voc'],
    queryFn: () => fetch('/voc').then((res) => res.json()),
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  //데이터 복사
  const faqList = []; //초기데이터 2중배열을 1개배열로 바꿔서 복사
  // 데이터바꾸기 반복문
  for (let i = 0; i < data.length; i++) {
    //브랜드 배열 꺼냄
    const group = data[i];
    for (let j = 0; j < group.length; j++) {
      //브랜드의 배열 항목 전부꺼냄
      faqList.push(group[j]);
    }
  }
  // ---------------------------------------------------------------------------------------------------------------------
  // 버튼 필터링
  // console.log(faqList); >> 필터링해서
  const brandFilteredFaqList = faqList.filter((faq) => {
    if (!brandFilter) return true; // 전체 보기일 경우

    return faq.brand === brandFilter;
  });
  // console.log(brandFilteredFaqList);

  const filterBtn = (brand) => {
    setBrandFilter(brand);
    setInputValue('');
    setVisibleCount(10); //페이지바뀌면 다시 10개
    setKeyword(''); //  키워드 초기화
    setShowAnswer(false); // 답변칸 초기화
  };
  // ---------------------------------------------------------------------------------------------------------------------
  // 인풋 필터링
  // inputValue 값으로 필터링
  const finalFilteredFaqList = brandFilteredFaqList.filter((faq) => {
    if (!keyword) return true; // 검색어가 없으면 모든 항목을 통과
    return (
      faq.type.includes(keyword) ||
      faq.question.includes(keyword) ||
      faq.answer.includes(keyword)
    ); // 검색어 포함된 항목만 남김
  });

  const searchBtn = () => {
    setKeyword(inputRef.current.value);
    // console.log('인풋서치btn 클릭');
    // console.log(inputRef.current.value, '필드값 ref');
    // console.log(inputValue, '필드 state값');
  };
  // ---------------------------------------------------------------------------------------------------------------------
  //더보기
  // answer칸 보여주기 버튼
  const showAnswerBtn = (index) => {
    setShowAnswer((prev) => (prev === index ? false : index));
  };
  // 더보여주기 +10개씩
  const showMoreBtn = () => {
    setVisibleCount((prev) => prev + 10);
  };
  //더보여줄 개수 0~초기값 / 이후 set으로 +10개씩
  const limitedFaqList = finalFilteredFaqList.slice(0, visibleCount);
  // ---------------------------------------------------------------------------------------------------------------------

  return (
    <div className="wrapper px-[20px] pt-[30px] pb-[100px] max-w-[1150px] mx-auto my-0">
      <div className="inner">
        {/* 헤드 */}
        <div className="flex justify-between mb-[30px] items-start ">
          <h2 className="text-[26px] font-semibold text-gray-600 ">FAQ</h2>
          <FaqNav />
        </div>

        {/* 필터링 FN  */}
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
                    : 'text-[#666] bg-[rgba(221,224,227,0.4)] border-[rgba(221,224,227,0.4)] border-1'
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
                  // setKeyword('');
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
          {/* 필터링 추가기능 */}
          <FaqFilterSelect
            show={show}
            setShow={setShow}
            setKeyword={setKeyword}
            inputRef={inputRef}
          />
        </div>
        {/* 바디 */}
        {limitedFaqList.length === 0 ? (
          <NoResult txt={txt} />
        ) : (
          <FaqList
            limitedFaqList={limitedFaqList}
            showAnswer={showAnswer}
            showAnswerBtn={showAnswerBtn}
          />
        )}

        {/* 더보기 */}
        <FaqMore
          visibleCount={visibleCount}
          finalFilteredFaqList={finalFilteredFaqList}
          showMoreBtn={showMoreBtn}
        />
      </div>
    </div>
  );
}
