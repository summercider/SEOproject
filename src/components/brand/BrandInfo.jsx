import { Link } from 'react-router';
import share from '@/assets/images/ico_store_share.svg';
import AsidePop from '@/components/brand/AsidePop';
import { useEffect, useState } from 'react';

export default function BrandInfo({ brandexam, brandtest, colortest }) {
  console.log(typeof colortest); //string이니까 true

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

  // 버튼눌렀을때 translate를 0주기 ???
  // 버튼은 부모에있음 show state변경해서 pop컴포넌트 띄운거임
  // css를 prop로 던지나?

  return (
    <div className="pb-[30px] ">
      <div
        className="pb-[30px] relative
      max-sm:befor:content-[''] 
      max-sm:befor:w-[100px] 
      max-sm:befor:h-[100px] 
      max-sm:before:bg-black 
      max-sm:before:top-0 
      max-sm:before:left-0"
      >
        {/* before로 바닥깔아두고 absol로띄워서 늘리기? */}
        {/*근데 before왜 안나오지?  */}
        <div
          className={`rounded-[4px]
          max-sm:rounded-[0] 
          ${colortest === '#DAD6CB' ? 'bg-red' : ''} `}
        >
          {/* 동적,명시적 컬러 안먹음..하 */}

          <img
            src={`/images/yjs/${brandtest}/infoMain.png`}
            className="max-sm:w-full"
          />
        </div>
        <div
          className={`bg-[#f00028] w-[70px] h-[70px] rounded-full absolute right-[15px] bottom-0 border-[5px] border-[#fff]
            `}
        >
          <Link
            className="block"
            to={`https://www.lottegrs.com/kor/business/lotteria.jsp`}
            target="_blank"
          >
            <img src={`/images/yjs/${brandtest}/infoSub.png`} />
          </Link>
        </div>
      </div>
      <div className="max-sm:px-[20px]">
        <div className="flex justify-between items-center">
          <h2 className="text-[22px] leading-[28px] font-[600] text-gray-500 ">
            {brandexam}
          </h2>
          <button
            className="block w-[22px] h-[22px] mr-[6px]"
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
        {show && <AsidePop setShow={setShow} />}
      </div>
    </div>
  );
}
