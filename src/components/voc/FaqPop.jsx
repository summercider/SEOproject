import { useEffect, useRef, useState } from 'react';

const buttons = [
  '문의 유형 전체',
  '회원',
  'L.POINT',
  '쿠폰',
  'EATZ카드',
  '스탬프',
  '기타',
  '배달',
  '픽업',
  '매장',
  '제품정보',
  '결제관리',
  'EATZ마일',
  '가맹점모집',
  '쇼핑주문',
  '오더주문',
  '영수증/세금계산서',
  '제품교환권',
];

export default function FaqPop({
  setShow,
  show,
  setKeyword,
  inputRef,
  setType,
}) {
  const popRef = useRef(null);
  const [selected, setSelected] = useState('문의 유형 전체'); //버튼 css 상태

  //팝업 띄우면 scroll 막기
  const stopScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  //클린업
  useEffect(() => {
    if (show) {
      stopScroll();
    }
    return () => {
      if (show) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [show]);
  useEffect(() => {
    const outsideClick = (e) => {
      if (!popRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener('mousedown', outsideClick);

    return () => {
      document.removeEventListener('mousedown', outsideClick);
    };
  }, []);
  // 닫기버튼
  const closeClick = () => {
    setShow(false);
  };
  // 적용버튼
  const applyClick = () => {
    setShow(false);
    const keywordValue = inputRef.current.value;
    setKeyword(keywordValue === '문의 유형 전체' ? '' : keywordValue);
    setType(selected || '문의 유형 전체');
  };
  // ------------------------------------------------------------------------------------------------
  // 개별 버튼
  const filterSelectBtn = (button) => {
    if (button === '문의 유형 전체') {
      inputRef.current.value = '';
      setSelected('문의 유형 전체');
    } else {
      inputRef.current.value = button;
      setSelected(button);
    }
  };

  return (
    <div
      className={`fixed left-0 top-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-300
      ${show ? 'visible opacity-[100%]' : 'opacity-0 invisible'} 
      `}
    >
      <div
        ref={popRef}
        className={`w-[400px] p-[20px] bg-[#fff] rounded-[10px] z-301
        max-sm:absolute max-sm:bottom-0 max-sm:left-0 max-sm:w-full max-sm:transition-all max-sm:duration-300
        ${show ? 'max-sm:translate-y-0' : 'max-sm:translate-y-[100%]'}  `}
      >
        <div className=" text-[16px] text-gray-600 leading-[22px] pb-[20px] relative">
          <h1 className="  pb-[20px]">필터</h1>
          <p>보기옵션</p>
          <button
            type="btn"
            onClick={closeClick}
            className=" w-[44px] h-[44px] absolute -top-[10px] -right-[20px] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="btn_닫기" transform="translate(-50 -748)">
                <rect
                  id="Rectangle_4524"
                  data-name="Rectangle 4524"
                  width="24"
                  height="24"
                  transform="translate(50 748)"
                  fill="none"
                />
                <line
                  id="Line_50"
                  data-name="Line 50"
                  x1="16"
                  y2="16"
                  transform="translate(54 752)"
                  fill="none"
                  stroke="#000"
                  strokeWidth={2}
                />
                <line
                  id="Line_51"
                  data-name="Line 51"
                  x2="16"
                  y2="16"
                  transform="translate(54 752)"
                  fill="none"
                  stroke="#000"
                  strokeWidth={2}
                />
              </g>
              <script xmlns="" />
            </svg>
          </button>
        </div>
        {/* 리스트 */}
        <div>
          <ul className="flex flex-wrap gap-[6px]  ">
            {buttons.map((button, idx) => (
              <li key={idx} className="  w-[calc((100%-6px)/2)] ">
                <button
                  className={`btn w-full h-[44px] rounded-[4px] text-[14px]
                    ${
                      selected === button
                        ? 'border-[#00A5B9] text-[#00A5B9]'
                        : 'border-[#DDE0E3] '
                    } `}
                  onClick={() => filterSelectBtn(button, idx)}
                >
                  {button}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between gap-[6px] pt-[30px]">
          <button
            type="btn"
            onClick={applyClick}
            className="h-[44px] border bg-[#00A5B9] border-[#00A5B9] rounded-[4px] text-[14px] 
            hover:bg-point1 w-full block text-[#fff]"
          >
            적용
          </button>
        </div>
      </div>
    </div>
  );
}
