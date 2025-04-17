import { useEffect, useRef } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';
import ReactDOM from 'react-dom';

export default function AddressSearch({ isShowAddr, setIsShowAddr }) {
  const setRef = useRef(null);

  function stopScroll() {
    document.body.style.overflow = 'hidden';
  }
  function allowScroll() {
    document.body.style.overflow = 'auto';
  }

  // 스크롤 관리 로직
  useEffect(() => {
    if (isShowAddr) {
      stopScroll();
    } else {
      allowScroll();
    }
    return () => {
      allowScroll();
    };
  }, [isShowAddr]);

  // 바깥 영역 클릭 시 닫힘
  function handleOutside(e) {
    if (!setRef.current.contains(e.target)) {
      setIsShowAddr(false);
    }
  }

  useEffect(function () {
    document.addEventListener('mousedown', handleOutside);

    return function cleanup() {
      document.removeEventListener('mousedown', handleOutside);
    };
  }, []);

  function handleClose() {
    setIsShowAddr(false);
  }

  return ReactDOM.createPortal(
    <div className="fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-300 flex justify-center items-center">
      <div
        ref={setRef}
        className="flex flex-col gap-[20px] p-[20px] z-301 w-[800px] bg-white rounded-[8px]"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-black text-[18px] leading-[24px] tracking-[-0.025em] font-bold">
            주소검색
          </h2>
          <button type="button" onClick={handleClose}>
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
                  strokeWidth="2"
                />
                <line
                  id="Line_51"
                  data-name="Line 51"
                  x2="16"
                  y2="16"
                  transform="translate(54 752)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </button>
        </div>
        <div>
          <DaumPostcodeEmbed className="min-h-[515px]" />
        </div>
      </div>
    </div>,
    document.body
  );
}
