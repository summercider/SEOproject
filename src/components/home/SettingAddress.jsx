import AddressSearch from '@/components/home/AddressSearch';
import { useState } from 'react';

// 주소설정 상단 버튼 라인, 주소설정 클릭 팝업, 딤처리 필요
export default function SettingAddress() {
  const [isShowAddr, setIsShowAddr] = useState(false);

  function handleSettingAddress() {
    setIsShowAddr(true);
  }

  return (
    <div className="flex justify-between">
      <div className="flex gap-x-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <rect
            id="사각형_4613"
            data-name="사각형 4613"
            width="20"
            height="20"
            fill="none"
          />
          <path
            id="빼기_13"
            data-name="빼기 13"
            d="M7.055,18h0l-4.7-5.217A7.466,7.466,0,0,1,0,7.314,7.17,7.17,0,0,1,7,0a7.171,7.171,0,0,1,7,7.314,7.4,7.4,0,0,1-2.215,5.337L7.056,18ZM7,6A1.454,1.454,0,0,0,5.6,7.5,1.454,1.454,0,0,0,7,9,1.454,1.454,0,0,0,8.4,7.5,1.454,1.454,0,0,0,7,6Z"
            transform="translate(3 1)"
            fill="#b8c1c9"
          />
        </svg>
        <p className="text-black font-medium text-[14px] tracking-[-0.025em] leading-[20px]">
          주소를 설정해 주세요!
        </p>
      </div>
      <div className="pr-[20px]">
        <button
          type="button"
          className="btn h-[24px] rounded-[20px] border-[#D6DCE1] 
          text-[12px] text-gray-500 tracking-[-0.025em] leading-[16px]
          px-[10px] bg-[#fff]"
          onClick={handleSettingAddress}
        >
          주소설정
        </button>
        {isShowAddr ? (
          <AddressSearch
            isShowAddr={isShowAddr}
            setIsShowAddr={setIsShowAddr}
          />
        ) : null}
      </div>
    </div>
  );
}
