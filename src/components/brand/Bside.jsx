// 경로+ prop 받으면 쓰기 일단 배열 선언해서 씀

import BrandContentCard from '@/components/BrandContentCard';
import { useState } from 'react';

const menus = ['추천메뉴', '버거', '디저트', '치킨', '음료', '아이스샷'];

export default function Bside() {
  const [selectMenu, setSlectMenu] = useState(menus[0]);

  const handleClick = (menu) => {
    setSlectMenu(menu);
  };

  return (
    <div className="pl-[20px] w-full bg-amber-200">
      {/* conbody */}
      <div className={`pt-[20px] pl-[20px]  `}>
        {/* conbox */}

        {/* ul stiky 안먹음 -> js scrolltop + 조건 T/F로 after f면none,t면block 처리*/}
        <ul className={`flex gap-[6px] pt-[20px] pb-[15px] bg-amber-50 `}>
          {menus.map((menu, index) => (
            <li key={index}>
              <button
                className={` btn bg-[#ddd] rounded-[4px] border-0
                  ${selectMenu === menu ? 'bg-point1 text-[#fff]' : ''}`}
                onClick={() => handleClick(menu)}
              >
                {menu}
              </button>
            </li>
          ))}
        </ul>
        <h3 className="text-[18px]  mt-[15px] mb-[20px] font-[600]">
          {selectMenu}
        </h3>
        <ul className="flex">
          <BrandContentCard />
          <BrandContentCard />
          <BrandContentCard />
        </ul>
        <div>{/* foot */}</div>
      </div>
    </div>
  );
}
