import { FaqIcon } from '@/components/voc/FaqIcon';

export default function FaqMore({
  visibleCount,
  finalFilteredFaqList,
  showMoreBtn,
}) {
  return (
    <div className="mt-[50px] flex justify-center ">
      {visibleCount < finalFilteredFaqList.length && (
        <button
          className="btn flex items-center  border-[#DDE0E3] rounded-[4px] w-[200px] h-[44px] text-gray-600 text-[14px] font-medium
      max-sm:w-full "
          onClick={showMoreBtn}
        >
          <FaqIcon.plus className="mr-[6px]" />
          더보기
        </button>
      )}
    </div>
  );
}
