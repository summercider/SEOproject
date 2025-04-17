import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './MainSlider.module.css';
import { Link } from 'react-router';

const tabImg = [
  {
    id: 1,
    url: '/images/csa/order-setting/img_store_lotteria.png',
    alt: '롯데리아',
    path: '/brand/ria',
  },
  {
    id: 2,
    url: '/images/csa/order-setting/img_store_angelinus.png',
    alt: '엔제리너스',
    path: '/brand/engel',
  },
  {
    id: 3,
    url: '/images/csa/order-setting/img_store_krispy.png',
    alt: '크리스피크림 도넛',
    path: '/brand/cream',
  },
  {
    id: 4,
    url: '/images/csa/order-setting/img_store_plating.png',
    alt: '플레:이팅',
    path: '/brand/plating',
  },
];

// 주소설정 스와이퍼
export default function OrderRight() {
  return (
    <div
      className={`relative w-[calc(100%-80px)] h-[185px] pl-[40px] pr-[20px] 
        max-sm:pl-[20px] max-sm:pr-0
        ${styles['order-right']}`}
    >
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={10}
        navigation={{
          prevEl: '.order-button-prev',
          nextEl: '.order-button-next',
        }}
        style={{ height: '185px' }}
      >
        {tabImg.map((item) => (
          <SwiperSlide key={item.id} style={{ maxWidth: '180px' }}>
            <Link to={item.path} className="block w-full h-full">
              <div>
                <img
                  src={item.url}
                  alt={item.alt}
                  className="rounded-[4px] w-full h-full object-cover"
                />
                <div className="mt-[12px]">
                  <strong className="block text-[15px] leading-[20px] text-black tracking-[-0.025em] font-medium">
                    {item.alt}
                  </strong>
                  <span className="block text-[13px] leading-[18px] text-[#999] tracking-[-0.025em] mt-[5px]">
                    바로가기
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="order-button-prev"></button>
      <button className="order-button-next"></button>
    </div>
  );
}
