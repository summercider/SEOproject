import { Link } from 'react-router';

export default function BrandInfo() {
  return (
    <div className="pb-[30px] ">
      <div className="pb-[30px] relative">
        <div className="bg-[#f00028] rounded-[4px]">
          <img src="/images/yjs/ria/optimize.png" />
        </div>
        <div className="bg-[#f00028] w-[70px] h-[70px] rounded-full absolute right-[15px] bottom-0 border-[5px] border-[#fff]">
          <Link
            to={`https://www.lottegrs.com/kor/business/lotteria.jsp`}
            target="_blank"
          >
            <img src="/images/yjs/ria/comm_ico_brand_lotteria.png" />
          </Link>
        </div>
      </div>
      <div className="flex justify-between">
        <h2 className="text-[22px] leading-[28px] ">롯데리아</h2>
        <span> svg어케하지ㅋ</span>
      </div>
      <p className="mt-[12px] leading-[22px]">TASTE THE FUN</p>
      <p className="mt-[5px] text-[14px] leading-[18px]  ">
        LOTTE EATZ에서 빠르고 편리하게 주문하세요.
      </p>
    </div>
  );
}
