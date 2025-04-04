import Aside from '@/components/brand/Aside';
import Bside from '@/components/brand/Bside';
import React from 'react';

export default function Brand() {
  return (
    <div className="wrapper pt-[30px] pb-[100px]">
      {/* brand header 컴포넌트만들기 */}
      <div className="px-[34px] pb-[30px] border-b-[1px] text-[#000] text-[26px] ">
        <h3>롯데리아</h3>
      </div>
      {/* main */}
      <div className="px-[34px] flex">
        <Aside />
        <Bside />
      </div>
    </div>
  );
}
