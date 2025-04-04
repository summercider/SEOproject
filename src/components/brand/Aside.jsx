import BrandAction from '@/components/brand/BrandAction';
import BrandInfo from '@/components/brand/BrandInfo';

export default function Aside() {
  return (
    <div className="w-[382px] pr-[40px] pt-[40px] ">
      {/* 아래 div 스티키 처리해야함 */}
      <div>
        <BrandInfo />
        <BrandAction />
      </div>
    </div>
  );
}
