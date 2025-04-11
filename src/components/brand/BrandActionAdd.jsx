export default function BrandActionAdd() {
  return (
    <div
      className="flex gap-[6px] mt-[10px]
    max-sm:px-[20px] max-sm:pb-[30px] max-sm:-mt-[20px] "
    >
      <button
        onClick={() => {
          window.location.href =
            'https://www.lotteeatz.com/upload/etc/plating/LotteGRS_Concession_BrandBook_F.pdf';
        }}
        className="btn flex-1 rounded-[4px] h-[44px] text-[14px] text-gray-600 leading-[18px]
        hover:bg-[#131517]"
      >
        브로슈어 다운로드(KOR)
      </button>
      <button
        onClick={() => {
          window.location.href =
            ' https://www.lotteeatz.com/upload/etc/plating/LotteGRS_Concession_BrandBook_F_en.pdf';
        }}
        className="btn flex-1 rounded-[4px] h-[44px] text-[14px] text-gray-600 leading-[18px]
        hover:bg-[#EFF1F3]"
      >
        브로슈어 다운로드(ENG)
      </button>
    </div>
  );
}
