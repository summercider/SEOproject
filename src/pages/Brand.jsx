import Aside from '@/components/brand/Aside';
import Bside from '@/components/brand/Bside';
import React from 'react';

export default function Brand() {
  return (
    <div className="wrapper h-[500px] pt-[30px] pb-[100px] bg-amber-200">
      {/* brand header 컴포넌트만들기 */}
      <div className="pb-[30px] border-b-[1px] text-[#000] text-[26px] ">
        <h3>롯데리아</h3>
      </div>
      {/* main */}
      <div>
        <Aside />
        <Bside />
      </div>
    </div>
  );
}
