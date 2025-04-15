import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './MainSlider.module.css';
import { Link } from 'react-router';

export default function ShopList({ shopSelectData }) {
  // console.log(shopSelectData);
  return (
    <div
      className={`mt-[20px] relative
        ${styles['shop']}`}
    >
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={10}
        navigation={{
          prevEl: '.shop-button-prev',
          nextEl: '.shop-button-next',
        }}
        style={{ minHeight: '215px' }}
      >
        {shopSelectData.map((item, idx) => (
          <SwiperSlide key={idx} style={{ maxWidth: '144px' }}>
            <Link className="block">
              <div>
                <div
                  className="w-[144px] h-[144px] rounded-[4px]"
                  style={{
                    backgroundImage: `url(${item.url})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#fff',
                    border: '1px solid #EFF1F3',
                  }}
                ></div>
                <p className="mt-[12px] text-[14px] text-black break-keep">
                  <span className="leading-[18px] block">{item.title}</span>
                  <span className="mt-[6px] font-bold">
                    {item.price.toLocaleString('ko-KR')} 원
                  </span>
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="shop-button-prev"></button>
      <button className="shop-button-next"></button>
    </div>
  );
}
