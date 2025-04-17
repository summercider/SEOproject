import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './MainSlider.module.css';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';

export default function CouponBanner() {
  const { isPending, data, error } = useQuery({
    queryKey: ['product'],
    queryFn: () => fetch('/product').then((res) => res.json()),
  });
  // console.log(data);

  const riaData = data?.filter((product) => product.brand === '롯데리아');

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={`mt-[20px] relative ${styles['coupon-banner']}`}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        navigation={{
          prevEl: '.coupon-button-prev',
          nextEl: '.coupon-button-next',
        }}
      >
        {riaData?.map((product) => (
          <SwiperSlide key={product.id} style={{ maxWidth: '280px' }}>
            <div
              className="relative w-[280px] h-[192px] p-[20px] border border-[#DDE0E3] 
              z-10 after:content-[''] after:absolute after:min-w-[90px] after:h-full 
            after:bg-[rgba(239,61,46,0.1)] after:top-0 after:right-0 rounded-[4px]"
            >
              <Link to="/" className="block">
                <div className="flex flex-col">
                  <span
                    className="bg-[rgba(239,61,46,0.1)] text-[#EF3D2E] text-[12px] 
                leading-[17px] tracking-[-0.025em] h-[21px] w-[54px] rounded-[4px] 
                py-[2px] px-[6px] font-medium"
                  >
                    {product.brand}
                  </span>
                  <strong
                    className="mt-[8px] text-[15px] text-black font-medium tracking-[-0.025em]
                leading-[20px]"
                  >
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
                <div
                  className="w-[120px] h-[120px] absolute right-[20px] top-[50%] -translate-y-[50%]
                z-10"
                  style={{
                    backgroundImage: `url(${product.productImg})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
                <div
                  className="w-[36px] h-[36px] bg-white rounded-[50%] 
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
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="coupon-button-prev"></button>
      <button className="coupon-button-next"></button>
    </div>
  );
}
