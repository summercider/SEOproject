import { Link } from 'react-router';
import share from '@/assets/images/ico_store_share.svg';
import AsidePop from '@/components/brand/AsidePop';
import { useEffect, useState } from 'react';

export default function BrandInfo({ defaultData }) {
  const [show, setShow] = useState(false);
  const showClick = () => {
    setShow(true);
  };

  const stopScroll = () => {
    document.body.style.overflow = 'hidden';
  };

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

  return (
    <div className="pb-[30px] ">
      <div className="pb-[30px] relative">
        {/*근데 before왜 안나오지?  */}
        <div
          className={`rounded-[4px]  max-sm:rounded-[0] `}
          style={{ backgroundColor: defaultData.color }}
        >
          <img
            src={`/images/yjs/${defaultData.brand}/infoMain.png`}
            className="max-sm:w-full"
          />
        </div>
        <div
          className={` w-[70px] h-[70px] rounded-full absolute right-[15px] bottom-0 border-[5px] border-[#fff]`}
          style={{
            backgroundColor: defaultData.color
              ? defaultData.color === '#373737'
                ? '#000'
                : defaultData.color
              : '',
          }}
        >
          <Link
            className="block"
            to={`https://www.lottegrs.com/kor/business/lotteria.jsp`}
            target="_blank"
          >
            <img src={`/images/yjs/${defaultData.brand}/infoSub.png`} />
          </Link>
        </div>
      </div>
      <div className="max-sm:px-[20px]">
        <div className="flex justify-between items-center">
          <h2 className="text-[22px] leading-[28px] font-[600] text-gray-500 ">
            {defaultData.name}
          </h2>
          <button
            className="block w-[22px] h-[22px] mr-[6px] "
            onClick={showClick}
          >
            <img src={share} alt="공유하기" />
          </button>
        </div>
        <p className="mt-[12px] leading-[22px] font-[500] text-gray-500 ">
          TASTE THE FUN
        </p>
        <p className="mt-[5px] text-[14px] leading-[18px] text-gray-500 ">
          LOTTE EATZ에서 빠르고 편리하게 주문하세요.
        </p>
        {<AsidePop setShow={setShow} show={show} />}
      </div>
    </div>
  );
}
