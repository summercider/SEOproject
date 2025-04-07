import BrandAction from '@/components/brand/BrandAction';
import BrandInfo from '@/components/brand/BrandInfo';

export default function Aside() {
  return (
    <div>
      <div className="w-[382px] pr-[40px] pt-[40px] shrink-0 sticky top-0  ">
        <div>
          <BrandInfo />
          <BrandAction />
        </div>
      </div>
    </div>
  );
}
