import { useState } from 'react';
import selectArr from '@/assets/images/ui_ico_select_arr.svg';
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import SelectBrand from '@/components/store/SelectBrand';
import SelectList from '@/components/store/SelectList';

const initBrand = [
  '전체',
  '크리스피크림 도넛',
  '엔제리너스',
  '롯데리아',
  '플레:이팅',
  '파머스박스',
];

export default function BottomWrap() {
  const [activeName, setActiveName] = useState('전체');
  const [isSortOrder, setIsSortOrder] = useState(true);

  const { isPending, data, error } = useQuery({
    queryKey: ['product'],
    queryFn: () => fetch('/product').then((res) => res.json()),
  });
  // console.log(data);

  const selectData =
    activeName === '전체'
      ? data
      : data?.filter((product) => product.brand === activeName);

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  function toggleSortOrder() {
    setIsSortOrder(!isSortOrder);
  }

  return (
    <div className="pt-[40px]">
      <div className="pt-[40px] border-t border-t-[#C2C7CC]">
        <div className="flex justify-between mb-[20px]">
          <h3 className="text-[22px] text-black font-medium">
            <span>쿠폰</span>
            <Link className="inline-block w-[16px] h-[16px] border rounded-[50%] border-[#DDE0E3] ml-[2px]">
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
          </h3>
          <ul>
            <li>
              <Link
                className="flex items-center gap-x-[5px]"
                onClick={toggleSortOrder}
              >
                <span className="text-[14px] leading-[18px] text-black">
                  {isSortOrder ? '추천순' : '인기순'}
                </span>
                <span className="w-[10px] h-[10px]">
                  {isSortOrder ? '' : ''}
                  <img
                    src={selectArr}
                    alt="정렬선택"
                    className={`${
                      isSortOrder
                        ? 'rotate-0 transition-[all,.3s]'
                        : 'rotate-[180deg] transition-[all,.3s]'
                    }`}
                  />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <SelectBrand
        activeName={activeName}
        setActiveName={setActiveName}
        initBrand={initBrand}
      />
      <SelectList selectData={selectData} />
    </div>
  );
}
