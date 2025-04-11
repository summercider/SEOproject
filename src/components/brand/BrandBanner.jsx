import creamSwiper1 from '@/assets/images/cream1.jpg';
import creamSwiper2 from '@/assets/images/cream2.jpg';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import customStyle from './BrandBanner.module.css';

export default function BrandBanner() {
  return (
    <div
      className={`mt-[30px] relative 
      max-sm:hidden`}
    >
      <Swiper
        className={`${customStyle.slider}  `}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1} //기본값
        speed={300} // 기본값
        navigation={{
          clickable: true,
        }}
        pagination={{
          type: 'fraction',
        }}
      >
        <SwiperSlide>
          <img src={creamSwiper1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={creamSwiper2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
