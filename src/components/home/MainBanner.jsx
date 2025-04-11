import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './MainSlider.module.css';
import { Link } from 'react-router';

// 상단 스와이퍼
const images = [
  {
    id: 1,
    url: '/images/csa/banner/20250403142552645_4.jpg',
    alt: '잇츠 리아타임',
  },
  { id: 2, url: '/images/csa/banner/20250404113720598_3.jpg', alt: '잇페타' },
  {
    id: 3,
    url: '/images/csa/banner/20250320162242429_2.jpg',
    alt: '케이크 도넛',
  },
  { id: 4, url: '/images/csa/banner/20250327150928429_7.jpg', alt: '오글대선' },
  {
    id: 5,
    url: '/images/csa/banner/20250331152928244_8.jpg',
    alt: '오! 잇츠데이',
  },
  {
    id: 6,
    url: '/images/csa/banner/20250320162119505_3.jpg',
    alt: '잇츠 리아타임',
  },
  {
    id: 7,
    url: '/images/csa/banner/2025031311444611_2.jpg',
    alt: '디어 마이 엔젤',
  },
  {
    id: 8,
    url: '/images/csa/banner/20241226170423958_6.jpg',
    alt: '스트로베리 모먼트',
  },
  { id: 9, url: '/images/csa/banner/20250324134820277_5.png', alt: '롯데카드' },
  { id: 10, url: '/images/csa/banner/20250402092713401_8.jpg', alt: '롯데온' },
  {
    id: 11,
    url: '/images/csa/banner/20240904164611844_1.jpg',
    alt: '탄소중립포인트 제도',
  },
  {
    id: 12,
    url: '/images/csa/banner/2023110111095486_6.jpg',
    alt: '시그니처머그 기프트 셋',
  },
  {
    id: 13,
    url: '/images/csa/banner/20230711134430795_6.jpg',
    alt: 'whit is hot now?',
  },
];

export default function MainBanner() {
  return (
    <div className={`relative ${styles['main-banner']}`}>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        speed={300}
        pagination={{
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom: (paging, current, total) => {
            return `<span class="fraction">${current} / ${total}</span> <button class="pagination-btn">+</button>`;
          },
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Link
              className="block w-[760px] h-[320px] rounded-[4px]"
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundPosition: '50% 25%',
                backgroundRepeat: 'no-repeat',
              }}
              aria-label={image.alt}
            ></Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
      <button className="swiper-button-prev"></button>
      <button className="swiper-button-next"></button>
    </div>
  );
}
