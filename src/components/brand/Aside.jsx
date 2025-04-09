import BrandAction from '@/components/brand/BrandAction';
import BrandInfo from '@/components/brand/BrandInfo';

export default function Aside({ brandexam, brandtest, colortest }) {
  return (
    <div
      className="relative
          before:content-[''] before:w-[1px] before:h-[calc(100%+100px)] before:bg-[#DDE0E3] before:absolute before:top-0 before:right-0
          max-sm:before:hidden 
          "
    >
      <div
        className="w-[382px] pr-[40px] pt-[40px] shrink-0 sticky top-0 
        max-sm:w-full max-sm:pr-0 max-sm:pt-0"
      >
        <div>
          <BrandInfo
            brandexam={brandexam}
            brandtest={brandtest}
            colortest={colortest}
          />
          <BrandAction />
        </div>
      </div>
    </div>
  );
}
