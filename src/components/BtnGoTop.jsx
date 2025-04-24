import { useEffect, useState } from 'react';

export default function BtnGoTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 상단 이동
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 스크롤 감지
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 150);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-[14px] right-[14px]">
          <button
            type="button"
            onClick={scrollToTop}
            className="w-[42px] h-[42px] rounded-[50%] bg-white border border-[rgba(0,0,0,0.1)] shadow-[0_5px_10px_rgba(0,0,0,0.05)] flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <g id="ic_dock_top_h16" transform="translate(-315 -686)">
                <rect
                  id="사각형_5186"
                  data-name="사각형 5186"
                  width="16"
                  height="16"
                  transform="translate(315 686)"
                  fill="none"
                />
                <path
                  id="패스_14695"
                  data-name="패스 14695"
                  d="M763.141-149.279l5-5,5,5"
                  transform="translate(-445.141 846.279)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="1.5"
                />
              </g>
            </svg>
            <span className="sr-only">맨위로</span>
          </button>
        </div>
      )}
    </>
  );
}
