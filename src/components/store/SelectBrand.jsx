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
          <SwiperSlide key={name}>
            <div className="flex group">
              <button
                type="button"
                className={`block h-[16px] first:pl-0 pl-[15px] pr-[16px] relative text-[15px]
    before:content-[''] before:absolute before:left-[-8px] before:top-[3.5px] before:w-[1px] before:h-[10px] 
    before:border before:border-l-0 before:border-[#DDE0E3] 
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
// ${
//             type === (item === 'All' ? '' : item)
//               ? 'text-white bg-[#666]'
//               : 'bg-[#eee] '
//           }
