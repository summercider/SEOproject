import DetailBtn from '@/components/brand/DetailBtn';
import DetailInfo from '@/components/brand/DetailInfo';
import DetailNearby from '@/components/brand/DetailNearby';
import Relation from '@/components/brand/Relation';
import { useState } from 'react';
import bookmark from '@/assets/images/bookmark_off.svg';
import LoginPop from '@/components/LoginPop';

export default function Dside({ data, popIdx, setPopIdx }) {
  const [show, setShow] = useState(false);

  const [detail, setDetail] = useState(false);
  const handleClick = () => {
    setDetail(!detail);
  };
  const handlePop = () => {
    setShow(!show);
  };
  // console.log(data);
  if (!data) {
    return <div>데이터를 불러오는 중...</div>;
  }

  return (
    <div
      className="w-1/2 pl-[20px] max-sm:w-full 
      max-sm:p-0    "
    >
      <div
        className="pl-[20px] pt-[40px]
      max-sm:py-[30px] max-sm:px-[20px]"
      >
        <h3 className="font-semibold text-[22px] text-gray-600 flex ">
          {data[0].name}
          <button className="ml-[6px]" onClick={handlePop}>
            <img src={`${bookmark}`} alt="" />
          </button>
          {show ? <LoginPop show={show} setShow={setShow} /> : null}
        </h3>
        <p className="mt-[12px] text-[14px]">{data[0].info}</p>
        {data[0].price ? (
          <div className="mt-[30px] flex justify-between items-center text-gray-600">
            <span>가격</span>
            <p className="text-[22px] font-semibold">
              {data[0].price.toLocaleString()} 원
            </p>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="max-sm:border-t-[10px] max-sm:border-t-[rgba(221,224,227,0.4)]">
        <div
          className="pt-[40px] pl-[20px]
          max-sm:pl-0 max-sm:pt-0 "
        >
          <div
            className=" pt-[40px] border-t-1 border-[#C2C7CC] 
        max-sm:border-0 max-sm:px-[20px] "
          >
            {['ria', 'engel'].includes(data[0].brand) && (
              <Relation data={data} />
            )}
            {data[0].brand === 'plating' ? null : (
              <DetailBtn detail={detail} handleClick={handleClick} />
            )}
            <DetailInfo detail={detail} />
            <div
              className={` max-sm:fixed max-sm:w-full max-sm:left-0 max-sm:bottom-0 
                ${data[0].brand === 'plating' ? 'mt-0' : 'mt-[30px]'}`}
            >
              <DetailNearby detail={detail} setPopIdx={setPopIdx} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
