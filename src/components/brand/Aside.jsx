import AsideLogo from '@/components/brand/AsideLogo';
import BrandAction from '@/components/brand/BrandAction';
import BrandActionAdd from '@/components/brand/BrandActionAdd';
import BrandBanner from '@/components/brand/BrandBanner';
import BrandInfo from '@/components/brand/BrandInfo';

export default function Aside({ defaultData }) {
  // console.log(defaultData);

  // 브랜드액션추가 존재 T/F 받아서 있으면 액션추가
  // 배너존재 T/F 받아서 있으면 swiper켜주기

  return (
    <div
      className="relative
          before:content-[''] before:w-[1px] before:h-[calc(100%+100px)] before:bg-[#DDE0E3] before:absolute before:top-0 before:right-0
          max-sm:before:hidden 
          "
    >
      {/* z- 10 > 101 > 100 수정 Bside Pop과 충돌 */}
      <div
        className="w-[382px] pr-[40px] pt-[40px] shrink-0 sticky top-0  z-100 
        max-sm:w-full max-sm:pr-0 max-sm:pt-0"
      >
        <div>
          <BrandInfo defaultData={defaultData} />
          <BrandAction />

          {defaultData.actionAdd && <BrandActionAdd />}
          {defaultData.banner && <BrandBanner />}
          {defaultData.logo && <AsideLogo />}
        </div>
      </div>
    </div>
  );
}
