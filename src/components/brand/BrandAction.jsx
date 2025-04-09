import search from '@/assets/images/ico_search.svg';

export default function BrandAction() {
  return (
    <div
      className="flex gap-[6px]
    max-sm:px-[20px] "
    >
      <button
        onClick={() => {
          window.location.href =
            'https://www.lottegrs.com/kor/business/lotteria.jsp';
        }}
        className="btn flex-1 rounded-[4px] h-[44px] text-[14px] text-gray-600
        hover:bg-[#EFF1F3]"
      >
        브랜드소개
      </button>

      <button
        className="btn flex-1 rounded-[4px] h-[44px] text-[14px] text-gray-600
        hover:bg-[#EFF1F3]"
      >
        <i className="leading-[16px] mr-[6px] ">
          <img src={search} alt="매장찾기" />
        </i>
        매장찾기
      </button>
    </div>
  );
}
