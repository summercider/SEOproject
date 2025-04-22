import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../home/MainSlider.module.css';

export default function SelectBrand({ initBrand, activeName, setActiveName }) {
  function handleActiveBrand(name) {
    setActiveName(name);
  }

  return (
    <div className="mb-[30px]">
      <Swiper slidesPerView="auto" className={` ${styles['store-coupon']}`}>
        {initBrand.map((name) => (
          <SwiperSlide key={name} className="group">
            <div className="flex">
              <button
                type="button"
                className={`h-[16px] group-first:pl-0 pl-[15px] pr-[16px] relative text-[15px]
    before:content-[''] before:absolute before:left-0 before:top-[3.5px] before:w-[1px] before:h-[10px] 
    before:border before:border-l-0 before:border-[#DDE0E3] group-first:before:border-none
    ${activeName === name ? 'text-[#000] font-medium' : 'text-[#666]'}`}
                onClick={() => handleActiveBrand(name)}
              >
                {name}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
