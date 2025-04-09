import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './MainSlider.module.css';

export default function QuickBox() {
  return (
    <div
      className={`pt-[40px]
      ${styles['quick-box']}`}
    >
      <Swiper
        modules={[Navigation]}
        slidesPerView={7}
        spaceBetween={9}
        navigation={{
          prevEl: '.quick-button-prev',
          nextEl: '.quick-button-next',
        }}
      >
        <SwiperSlide></SwiperSlide>
      </Swiper>
      <button className="quick-button-prev"></button>
      <button className="quick-button-next"></button>
    </div>
  );
}
