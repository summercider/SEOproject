import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './MainSlider.module.css';

export default function ShopBrand({ brandNames, shopName, setShopName }) {
  function handleActiveName(shop) {
    setShopName(shop);
  }
  return (
    <Swiper slidesPerView="auto" className={` ${styles['shop-brand']}`}>
      {brandNames.map((shop) => (
        <SwiperSlide key={shop}>
          <div className="flex">
            <button
              type="button"
              className={`block h-[16px] first:pl-0 pl-[15px] pr-[16px] relative text-[15px] tracking-[-0.025em]
    before:content-[''] before:absolute before:left-[-8px] before:top-[3.5px] before:w-[1px] before:h-[10px] 
    before:border before:border-l-0 before:border-[#DDE0E3] 
    ${shopName === shop ? 'text-[#000] font-medium' : 'text-[#666]'}
  `}
              onClick={() => handleActiveName(shop)}
            >
              {shop}
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
