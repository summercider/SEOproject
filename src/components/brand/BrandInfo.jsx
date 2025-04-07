import { Link } from 'react-router';
import share from '@/assets/images/ico_store_share.svg';

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
        <h2 className="text-[22px] leading-[28px] font-[600] text-gray-500 ">
          롯데리아
        </h2>
        <span>
          <a href="#" className="block w-[22px] h-[22px]">
            <img src={share} alt="공유하기" />
          </a>
        </span>
      </div>
      <p className="mt-[12px] leading-[22px] font-[500] text-gray-500 ">
        TASTE THE FUN
      </p>
      <p className="mt-[5px] text-[14px] leading-[18px] text-gray-500 ">
        LOTTE EATZ에서 빠르고 편리하게 주문하세요.
      </p>
    </div>
  );
}
