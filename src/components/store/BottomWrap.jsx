import { useState } from 'react';
import selectArr from '@/assets/images/ui_ico_select_arr.svg';
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import SelectBrand from '@/components/store/SelectBrand';
import SelectList from '@/components/store/SelectList';
import PopCouponInfo from '@/components/store/PopCouponInfo';

const initBrand = [
  '전체',
  '크리스피크림 도넛',
  '엔제리너스',
  '롯데리아',
  '플레:이팅',
  '파머스박스',
];

const sortArray = ['추천순', '인기순'];

export default function BottomWrap() {
  const [activeName, setActiveName] = useState('전체');
  const [isSortOrder, setIsSortOrder] = useState('추천순');
  const [isOpen, setIsOpen] = useState(false);
  const [isShowInfo, setIsShowInfo] = useState(false);

  const { isPending, data, error } = useQuery({
    queryKey: ['product'],
    queryFn: () => fetch('/product').then((res) => res.json()),
  });
  // console.log(data);

  const selectData =
    activeName === '전체'
      ? data
      : data?.filter((product) => product.brand === activeName);

  // 추천순 높은 할인율 discountRate , 인기순 할인율 적용 낮은가격 finalPrice
  // Array.isArray(selectData) 배열 확인

  const sortedData = Array.isArray(selectData)
    ? [...selectData].sort((a, b) => {
        const discountA = parseInt(a.discountRate?.replace('%', '') || '0', 10);
        const discountB = parseInt(b.discountRate?.replace('%', '') || '0', 10);

        if (isSortOrder === '추천순') {
          return discountB - discountA; // 높은 할인율 우선
        } else if (isSortOrder === '인기순') {
          return a.finalPrice - b.finalPrice; // 낮은 가격 우선
        } else {
          console.warn(`Unknown sort order: ${isSortOrder}`);
          return 0; // 기본값
        }
      })
    : [];

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // 드롭다운
  function toggleSortOrder() {
    setIsOpen(!isOpen);
  }

  // sortArray item 전달 드롭다운 클릭하면 isSortOrder 변경
  function toggleSortOrderList(sortType) {
    setIsOpen(false);
    setIsSortOrder(sortType);
    // console.log(sortType);
  }

  function handlePopInfo() {
    setIsShowInfo(true);
  }

  return (
    <div className="pt-[40px] max-sm:px-[20px]">
      <div className="pt-[40px] border-t border-t-[#f2f3f5] max-sm:border-t-[10px]">
        <div className="flex justify-between mb-[20px]">
          <h3 className="text-[22px] text-black font-medium">
            <span>쿠폰</span>
            <Link
              className="inline-block w-[16px] h-[16px] border rounded-[50%] border-[#DDE0E3] ml-[3px]"
              onClick={handlePopInfo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <g id="ic_tip_popup" transform="translate(-65 -765)">
                  <rect
                    id="사각형_5424"
                    data-name="사각형 5424"
                    width="14"
                    height="14"
                    transform="translate(65 765)"
                    fill="none"
                  />
                  <rect
                    id="사각형_5425"
                    data-name="사각형 5425"
                    width="1"
                    height="5"
                    transform="translate(71.5 768)"
                    fill="#c2c7cc"
                  />
                  <circle
                    id="타원_663"
                    data-name="타원 663"
                    cx="0.75"
                    cy="0.75"
                    r="0.75"
                    transform="translate(71.25 774)"
                    fill="#c2c7cc"
                  />
                </g>
              </svg>
            </Link>
            {isShowInfo ? (
              <PopCouponInfo
                isShowInfo={isShowInfo}
                setIsShowInfo={setIsShowInfo}
              />
            ) : null}
          </h3>
          <ul>
            <li>
              <Link
                className="flex items-center gap-x-[5px]"
                onClick={toggleSortOrder}
              >
                <span className="text-[14px] leading-[18px] text-black">
                  {isSortOrder}
                </span>
                <span className="w-[10px] h-[10px]">
                  <img
                    src={selectArr}
                    alt="정렬선택"
                    className={`${
                      isOpen
                        ? 'rotate-[180deg] transition-[all,.3s]'
                        : 'rotate-0 transition-[all,.3s]'
                    }`}
                  />
                </span>
              </Link>
              <ul
                className={`max-w-[90px] max-h-[182px] border border-[#80878D] rounded-[4px] ml-[-14px] mt-[11px] absolute z-10 bg-white ${
                  isOpen ? 'block' : 'hidden'
                }`}
              >
                {sortArray.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="block text-[14px] leading-[18px] text-black py-[11px] px-[14px] hover:bg-[#f5f5f5] rounded-[4px] hover:transition-[all,.5s]"
                      onClick={() => toggleSortOrderList(item)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <SelectBrand
        activeName={activeName}
        setActiveName={setActiveName}
        initBrand={initBrand}
      />
      <SelectList
        selectData={sortedData}
        data={data}
        activeName={activeName}
        sortedData={sortedData}
      />
    </div>
  );
}
