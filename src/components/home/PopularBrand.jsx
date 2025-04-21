import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './MainSlider.module.css';

// const initBrand = ['크리스피크림 도넛', '엔제리너스', '롯데리아', '플레:이팅'];

export default function PopularBrand({ data, activeBrand, setActiveBrand }) {
  // new Set() 중복 제거
  const brands = [...new Set(data?.map((item) => item.brand))];
  // console.log(brands);

  function handleActiveBrand(name) {
    setActiveBrand(name);
  }

  return (
    <Swiper slidesPerView="auto" className={` ${styles['popular-brand']}`}>
      {brands.map((name) => (
        <SwiperSlide key={name}>
          <div className="flex group">
            <button
              type="button"
              className={`block h-[16px] first:pl-0 pl-[15px] pr-[16px] relative text-[15px]
            before:content-[''] before:absolute before:left-[-8px] before:top-[3.5px] before:w-[1px] before:h-[10px] 
            before:border before:border-l-0 before:border-[#DDE0E3] 
            ${
              activeBrand === name ? 'text-[#000] font-medium' : 'text-[#666]'
            }`}
              onClick={() => handleActiveBrand(name)}
            >
              {name}
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
// first:before:border-none
