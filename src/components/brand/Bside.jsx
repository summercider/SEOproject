import Nearby from '@/components/brand/Nearby';
import BrandContentCard from '@/components/BrandContentCard';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

// 데이터를 가져오자
// callback 지옥 만들어? 싫잖어 > promise쓸꺼임 > async awiat으로 편하게쓰고 try catch로 에러처리하고 쓸래
// 리엑트는useEffect랑 useState 해야 데이터쓰지>>그게귀찮아 그럼 리엑트쿼리써 > 근데 그게 tanStack Lib 로 바뀐거고
// get하려면 useQuery , 나머지작업은 useMutation 쓰셈

export default function Bside({ menustest, brandtest }) {
  const [selectMenu, setSelectMenu] = useState(menustest[0]);
  const [filterData, setFilterData] = useState([]);

  // 데이터 가져오기
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['brand'],
    queryFn: () => fetch('/brand').then((res) => res.json()),
    select: (data) => data?.filter((item) => item.brand === brandtest),
  });

  useEffect(() => {
    setFilterData(
      data?.filter((item) => {
        if (brandtest === 'ria') return item.type === '추천메뉴';
        if (brandtest === 'engel') return item.type === '♥신제품♥';
        if (brandtest === 'cream') return item.type === '추천메뉴';
        if (brandtest === 'plating') return item.type === '플레:이팅 라운지';
      })
    );
  }, [data]);

  // || '플레:이팅 라운지' || '♥신제품♥' > or쓰면 반환값이 불리언 T/F
  // if:추천메뉴>추천메뉴 , elseif>플레이팅라운지>,else>신제품

  const handleClick = (menu) => {
    setSelectMenu(menu);
    setFilterData(data?.filter((item) => item.type === menu));
  };

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.message}</>;

  return (
    <div
      className="pl-[20px] w-full
      max-sm:px-[20px]"
    >
      {/* conbody */}
      <div
        className={`pt-[20px] pl-[20px]  
        max-sm:p-0 `}
      >
        {/* conbox */}

        {/* ul stiky 안먹음 -> js scrolltop + 조건 T/F로 after f면none,t면block 처리*/}
        <ul
          className={`flex gap-[6px] pt-[20px] pb-[15px]
          max-sm:py-[15px]
          max-sm: overflow-x-auto 
          `}
        >
          {menustest.map((menu, index) => (
            <li key={index} className="max-sm:shrink-0">
              <button
                className={` btn bg-[#dde0e366] rounded-[4px] border-0 text-[13px]
                  ${
                    selectMenu === menu
                      ? 'bg-point1 text-[#fff]'
                      : ' text-gray-400'
                  }
                  `}
                onClick={() => handleClick(menu)}
              >
                {menu}
              </button>
            </li>
          ))}
        </ul>
        {/* 위ul 스크롤바 숨기기 tailwind pulgin 필요(tailwind-scrollbar-hide) >테블릿 오류 > swiper가 답인가 */}
        <h3 className="text-[18px] text-gray-600 mt-[15px] mb-[20px] font-[600]">
          {selectMenu}
        </h3>
        <ul
          className="flex flex-wrap gap-[20px] 
        max-sm:gap-[10px]"
        >
          {filterData?.map((value, idx) => (
            <BrandContentCard brandData={value} key={idx} />
          ))}
        </ul>
        <div>
          <Nearby />
        </div>
      </div>
    </div>
  );
}
