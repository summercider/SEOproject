import { Link } from 'react-router';
import noData from '@/assets/images/comm_ico_no_result.svg';
import LoginPop from '@/components/LoginPop';
import { useState } from 'react';

export default function SelectList({ selectData, data, activeName }) {
  const [show, setShow] = useState(false);
  const brandColor = [
    {
      name: '크리스피크림 도넛',
      color: '#1CAC68',
      bgColor: 'rgba(28,172,104,0.1)',
    },
    {
      name: '엔제리너스',
      color: '#AA9481',
      bgColor: 'rgba(170,148,129,0.1)',
    },
    {
      name: '롯데리아',
      color: '#EF3D2E',
      bgColor: 'rgba(239,61,46,0.1)',
    },
  ];

  // 브랜드 각각 적용
  const activeColor = brandColor.find((item) => item.name === activeName) || {};
  // console.log(activeName);

  // 브랜드 전체 적용
  const getBrandStyle = (brand) => {
    if (activeName === '전체') {
      const brandMatch = brandColor.find((item) => item.name === brand);
      return {
        color: brandMatch?.color,
        backgroundColor: brandMatch?.bgColor,
        border: `1px solid ${brandMatch?.bgColor}`,
      };
    } else if (activeName === brand) {
      return {
        color: activeColor?.color,
        backgroundColor: activeColor?.bgColor,
        border: `1px solid ${activeColor?.bgColor}`,
      };
    } else {
      return {};
    }
  };

  function handleLoginPop() {
    setShow(true);
  }

  return (
    <div>
      {data && selectData && selectData.length > 0 ? (
        <ul className="grid grid-cols-5 gap-[20px] max-sm:grid-cols-2 max-sm:gap-[10px]">
          {selectData?.map((product) => (
            <li key={product.id} className="col-span-1">
              <Link onClick={handleLoginPop}>
                <div
                  className="w-full h-[200px] relative border border-[#EFF1F3] bg-white rounded-[4px] max-sm:h-[150px]"
                  style={{
                    backgroundImage: `url(${product.productImg})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div
                    className="w-[36px] h-[36px] bg-[rgba(221,224,227,0.4)] rounded-[50%] 
              absolute bottom-[20px] right-[20px] z-[10]
              p-[8px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <g
                        id="icon_coupon_down_h20"
                        transform="translate(-147 -1256)"
                      >
                        <rect
                          id="사각형_5699"
                          data-name="사각형 5699"
                          width="20"
                          height="20"
                          transform="translate(147 1256)"
                          fill="none"
                        />
                        <path
                          id="패스_15186"
                          data-name="패스 15186"
                          d="M14,6v6a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V6"
                          transform="translate(150 1259)"
                          fill="none"
                          stroke="#80878d"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                        <path
                          id="패스_15187"
                          data-name="패스 15187"
                          d="M159.08,1259.671l-3,3,3,3"
                          transform="translate(-1105.671 1425.08) rotate(-90)"
                          fill="none"
                          stroke="#80878d"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                        <path
                          id="패스_15188"
                          data-name="패스 15188"
                          d="M157.256,1270.289v-8.5"
                          transform="translate(-0.256 -1.788)"
                          fill="none"
                          stroke="#80878d"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                        />
                      </g>
                    </svg>
                    <span className="sr-only">쿠폰다운로드</span>
                  </div>
                </div>
                <div className="flex flex-col mt-[12px]">
                  <span
                    className=" text-[12px] leading-[17px] tracking-[-0.025em] h-[21px] rounded-[4px] py-[2px] px-[6px] font-medium self-start"
                    style={getBrandStyle(product.brand)}
                  >
                    {product.brand}
                  </span>
                  <strong className="mt-[8px] text-[15px] text-black font-medium tracking-[-0.025em] leading-[20px]">
                    {product.title}
                  </strong>
                  <span
                    className="mt-[6px] line-through text-[14px] text-[#999] tracking-[-0.025em]
                leading-[18px]"
                  >
                    {product.originalPrice.toLocaleString('ko-KR')}
                    <span className="inline-block ml-[2px]">원</span>
                  </span>

                  <div>
                    <span
                      className=" text-[#EF3D2E] text-[16px] 
                leading-[22px] tracking-[-0.025em] mr-[4px]"
                    >
                      {product.discountRate}
                    </span>
                    <span
                      className=" text-black text-[16px] 
                leading-[22px] tracking-[-0.025em] font-medium"
                    >
                      {product.finalPrice.toLocaleString('ko-KR')}
                      <span className="inline-block ml-[2px]">원</span>
                    </span>
                  </div>
                  <span
                    className="mt-[10px] w-[61px] h-[21px] text-[12px] border border-[#DDE0E3] 
                rounded-[4px] text-center leading-[21px]"
                  >
                    픽업+매장
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="py-[160px]">
          <div
            className="pt-[96px] bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${noData})`,
            }}
          ></div>
          <p className="text-center text-[14px] text-[#999]">
            조회된 내역이 없습니다.
          </p>
        </div>
      )}
      {show ? <LoginPop show={show} setShow={setShow} /> : null}
    </div>
  );
}
