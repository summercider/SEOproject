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
      </button>
      {<BsidePop setShow={setShow} show={show} />}
    </div>
  );
}
