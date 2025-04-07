import BrandContentCard from '@/components/BrandContentCard';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const menus = ['추천메뉴', '버거', '디저트', '치킨', '음료', '아이스샷'];

// 데이터를 가져오자
// callback 지옥 만들어? 싫잖어 > promise쓸꺼임 > async awiat으로 편하게쓰고 try catch로 에러처리하고 쓸래
// 리엑트는useEffect랑 useState 해야 데이터쓰지>>그게귀찮아 그럼 리엑트쿼리써 > 근데 그게 tanStack Lib 로 바뀐거고
// get하려면 useQuery , 나머지작업은 useMutation 쓰셈

export default function Bside() {
  const [selectMenu, setSelectMenu] = useState(menus[0]);
  const [filterData, setFilterData] = useState([]);

  // ria데이터 가져오기
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['brand'],
    queryFn: () => fetch('/brand').then((res) => res.json()),
    select: (data) => data?.filter((item) => item.brand === 'ria'),
  });

  useEffect(() => {
    setFilterData(data?.filter((item) => item.type === '추천메뉴'));
  }, [data]);

  const handleClick = (menu) => {
    setSelectMenu(menu);
    setFilterData(data?.filter((item) => item.type === menu));
  };

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.message}</>;

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
        <ul className="flex flex-wrap   gap-[20px] ">
          {filterData?.map((value, idx) => (
            <BrandContentCard brandData={value} key={idx} />
          ))}
        </ul>
        <div>{/* foot */}</div>
      </div>
    </div>
  );
}
