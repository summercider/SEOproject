import AsidePop from '@/components/brand/AsidePop';
import { useState } from 'react';
import share from '@/assets/images/ico_store_share.svg';

export default function Cside({ data, popIdx, setPopIdx }) {
  const [show, setShow] = useState(false);
  const showClick = () => {
    setShow(true);
    setPopIdx(false);
  };

  if (!data) {
    return <div>데이터를 불러오는 중...</div>;
  }
  return (
    <div
      className={`relative w-1/2
            before:w-[1px] before:h-[calc(100%+50px)] before:bg-[#DDE0E3] before:absolute before:top-0 before:right-0
            max-sm:before:hidden max-sm:w-full ${popIdx ? 'z-0' : 'z-10'}
            `}
      // nearby버튼 누르면 z-0 , 안누르면 z-10
    >
      <div
        className="pr-[40px] pt-[40px]  sticky top-0 
          max-sm:w-full max-sm:pr-0 max-sm:pt-0 "
      >
        <div>
          <img
            src={`${data[0].img}`}
            alt={`${data[0].name}`}
            className="w-full"
          />
        </div>
        <button
          className="absolute w-[40px] h-[40px] bottom-[20px] right-[60px] border-[#DDE0E3] 
          border rounded-full flex items-center justify-center
          max-sm:right-[20px] max-sm:bottom-[32px] "
          onClick={showClick}
        >
          <img src={share} alt="공유하기" className="w-[16px]" />
        </button>
        {<AsidePop setShow={setShow} show={show} />}
      </div>
    </div>
  );
}
