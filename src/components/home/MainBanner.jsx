import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';

import img1 from '/images/csa/banner/20250403142552645_4.jpg';
import img2 from '/images/csa/banner/20250404113720598_3.jpg';
import img3 from '/images/csa/banner/20250320162242429_2.jpg';
import img4 from '/images/csa/banner/20250327150928429_7.jpg';
import img5 from '/images/csa/banner/20250331152928244_8.jpg';
import img6 from '/images/csa/banner/20250320162119505_3.jpg';
import img7 from '/images/csa/banner/2025031311444611_2.jpg';
import img8 from '/images/csa/banner/20241226170423958_6.jpg';
import img9 from '/images/csa/banner/20250324134820277_5.png';
import img10 from '/images/csa/banner/20250402092713401_8.jpg';
import img11 from '/images/csa/banner/20240904164611844_1.jpg';
import img12 from '/images/csa/banner/2023110111095486_6.jpg';
import img13 from '/images/csa/banner/20230711134430795_6.jpg';
import { Link } from 'react-router';

const images = [
  { id: 1, url: img1, alt: '잇츠 리아타임' },
  { id: 2, url: img2, alt: '잇페타' },
  { id: 3, url: img3, alt: '케이크 도넛' },
  { id: 4, url: img4, alt: '오글대선' },
  { id: 5, url: img5, alt: '오! 잇츠데이' },
  { id: 6, url: img6, alt: '잇츠 리아타임' },
  { id: 7, url: img7, alt: '디어 마이 엔젤' },
  { id: 8, url: img8, alt: '스트로베리 모먼트' },
  { id: 9, url: img9, alt: '롯데카드' },
  { id: 10, url: img10, alt: '롯데온' },
  { id: 11, url: img11, alt: '탄소중립포인트 제도' },
  { id: 12, url: img12, alt: '시그니처머그 기프트 셋' },
  { id: 13, url: img13, alt: 'whit is hot now?' },
];

export default function MainBanner() {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        speed={300}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
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
    </div>
  );
}
