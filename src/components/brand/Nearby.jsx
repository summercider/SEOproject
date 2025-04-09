import BsidePop from '@/components/brand/BsidePop';
import { useEffect, useState } from 'react';

export default function Nearby() {
  const [show, setShow] = useState(false);

  const stopScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  //스크롤막으면 좌우 틀어짐
  useEffect(() => {
    if (show) {
      stopScroll();
    }
    return () => {
      if (show) {
        document.body.style.overflow = 'auto';
        // console.log('클린업');
      }
    };
  }, [show]);

  const showClick = () => {
    setShow(true);
  };

  return (
    <div className="mt-[50px] flex justify-center ">
      <button
        className="btn w-[200px] h-[44px] text-[14px] border-point1 text-point1 rounded-[4px]
        hover:bg-[#00a5b91a]
        max-sm:w-full"
        onClick={showClick}
      >
        <span>주변매장에서 주문</span>

        <svg
          className="ml-[6px]"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <g id="btn_arrow_H16" transform="translate(-289 -14)">
            <rect
              width="16"
              height="16"
              transform="translate(289 14)"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M10232.7-747.317l4,4-4,4"
              transform="translate(-9937.203 765.316)"
              fill="none"
              stroke="#00a5b9"
            />
          </g>
        </svg>
      </button>

      {show && <BsidePop setShow={setShow} />}
    </div>
  );
}
