import AsideLogo from '@/components/brand/AsideLogo';
import BrandAction from '@/components/brand/BrandAction';
import BrandActionAdd from '@/components/brand/BrandActionAdd';
import BrandBanner from '@/components/brand/BrandBanner';
import BrandInfo from '@/components/brand/BrandInfo';
import { useState } from 'react';

export default function Aside({ defaultData }) {
  const [show, setShow] = useState(false);

  // console.log(defaultData);

  // 브랜드액션추가 존재 T/F 받아서 있으면 액션추가
  // 배너존재 T/F 받아서 있으면 swiper켜주기

  return (
    <div
      className={`relative
          before:content-[''] before:w-[1px] before:h-[calc(100%+100px)] before:bg-[#DDE0E3] before:absolute before:top-0 before:right-0
          max-sm:before:hidden 
          `}
    >
      {/* z- 10 > 101 > 100 수정 Bside Pop과 충돌 */}
      {/* z헤더와 충돌 >> 평소애 z-10 brandInfo>AsidePop이 show?면 z-100 */}
      <div
        className={`w-[382px] pr-[40px] pt-[40px] shrink-0 sticky top-0  
        max-sm:w-full max-sm:pr-0 max-sm:pt-0 ${show ? 'z-100' : 'z-10'}`}
      >
        <div>
          <BrandInfo defaultData={defaultData} show={show} setShow={setShow} />
          <BrandAction />

          {defaultData.actionAdd && <BrandActionAdd />}
          {defaultData.banner && <BrandBanner />}
          {defaultData.logo && <AsideLogo />}
        </div>
      </div>
    </div>
  );
}
