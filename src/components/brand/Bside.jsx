import Nearby from '@/components/brand/Nearby';
import BrandContentCard from '@/components/BrandContentCard';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

// 데이터를 가져오자
// callback 지옥 만들어? 싫잖어 > promise쓸꺼임 > async awiat으로 편하게쓰고 try catch로 에러처리하고 쓸래
// 리엑트는useEffect랑 useState 해야 데이터쓰지>>그게귀찮아 그럼 리엑트쿼리써 > 근데 그게 tanStack Lib 로 바뀐거고
// get하려면 useQuery , 나머지작업은 useMutation 쓰셈

export default function Bside({ defaultData }) {
  // console.log(defaultData);
  const [selectMenu, setSelectMenu] = useState(defaultData.menus[0]);
  const [filterData, setFilterData] = useState([]);
  const [sticky, setSticky] = useState(false);

  // 데이터 가져오기
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['brand'],
    queryFn: () => fetch('/brand').then((res) => res.json()),
    select: (data) => data?.filter((item) => item.brand === defaultData.brand),
  });

  useEffect(() => {
    setFilterData(
      data?.filter((item) => {
        if (defaultData.brand === 'ria') return item.type === '추천메뉴';
        if (defaultData.brand === 'engel') return item.type === '♥신제품♥';
        if (defaultData.brand === 'cream') return item.type === '추천메뉴';
        if (defaultData.brand === 'plating')
          return item.type === '플레:이팅 라운지';
      })
    );
  }, [data]);

  // useEffect로 클린업주기
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= (window.innerWidth <= 890 ? 848 : 220)) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (menu) => {
    setSelectMenu(menu);
    setFilterData(data?.filter((item) => item.type === menu));
  };

  if (isLoading) return <>Loading...</>;
  if (isError) return <>에러:{error.message}</>;

  return (
    <div
      className="pl-[20px] w-full
      max-sm:pt-[10px] max-sm:px-[20px] max-sm:border-t-[10px] max-sm:border-t-[rgba(221,224,227,0.4)]"
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
          whitespace-nowrap
          max-sm:py-[15px]
          overflow-x-auto 
          z-9
          `}
          style={
            sticky
              ? {
                  position: 'fixed',
                  width: 'calc(100% + 40px)',
                  top: 0,
                  paddingLeft: '40px',
                  marginLeft: '-40px',
                  boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.05)',
                  background: '#fff',
                }
              : {}
          }
        >
          {defaultData.menus.map((menu, index) => (
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
