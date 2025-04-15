import BsidePop from '@/components/brand/BsidePop';
import { useEffect, useState } from 'react';

export default function DetailNearby({ setPopIdx }) {
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
    setPopIdx(true);
  };

  return (
    <div className={` flex justify-center `}>
      <button
        className="btn w-full h-[56px] text-[16px] border-point1 text-[#fff] bg-[#00A5B9] rounded-[4px]
        hover:bg-[#008D9F]"
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
      {<BsidePop setShow={setShow} show={show} />}
    </div>
  );
}
