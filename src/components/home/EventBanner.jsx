import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './MainSlider.module.css';
import { Link } from 'react-router';

const eventInfo = [
  {
    name: 'LOTTE EATZ',
    title: '스마트 영수증 사용하고 탄소중립 포인트 받자!',
    date: '2024.09.04 ~ 2099.12.31',
    imgUrl: '/images/csa/event/eatz.jpg',
    color: '#00A5B9',
    backgroundColor: 'rgba(0, 165, 185, 0.1)',
    borderColor: 'rgba(0, 165, 185, 0.1)',
  },
  {
    name: '크리스피크림 도넛',
    title: '시그니처 머그(S) 기프트 세트 런칭',
    date: '2023.11.01 ~ 2999.12.31',
    imgUrl: '/images/csa/event/signature.jpg',
    color: '#1CAC68',
    backgroundColor: 'rgba(28, 172, 104, 0.1)',
    borderColor: 'rgba(28, 172, 104, 0.1)',
  },
  {
    name: '크리스피크림 도넛',
    title: '크리스피크림 도넛 HOT NOW',
    date: '2023.07.11 ~ 2999.12.31',
    imgUrl: '/images/csa/event/how.jpg',
    color: '#1CAC68',
    backgroundColor: 'rgba(28, 172, 104, 0.1)',
    borderColor: 'rgba(28, 172, 104, 0.1)',
  },
  {
    name: '롯데리아',
    title: '11시부터 14시 리아런치 할인!',
    date: '2023.04.14 ~ 9999.12.31',
    imgUrl: '/images/csa/event/ria.jpg',
    color: '#EF3D2E',
    backgroundColor: 'rgba(239, 61, 46, 0.1)',
    borderColor: 'rgba(239, 61, 46, 0.1)',
  },
  {
    name: '크리스피크림 도넛',
    title: '매월 1번째, 3번째 수요일 오리지널 하프더즌 1+1',
    date: '2021.07.13 ~ 2999.07.13',
    imgUrl: '/images/csa/event/wends.png',
    color: '#1CAC68',
    backgroundColor: 'rgba(28, 172, 104, 0.1)',
    borderColor: 'rgba(28, 172, 104, 0.1)',
  },
];

export default function EventBanner() {
  return (
    <div
      className={`mt-[20px] relative
    ${styles['event']}`}
    >
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={10}
        navigation={{
          prevEl: '.event-button-prev',
          nextEl: '.event-button-next',
        }}
      >
        {eventInfo.map((item, idx) => (
          <SwiperSlide key={idx} style={{ maxWidth: '260px' }}>
            <Link className="block">
              <div>
                <div
                  className="w-[260px] h-[146px] rounded-[4px]"
                  style={{
                    backgroundImage: `url(${item.imgUrl})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
                <p className="mt-[14px]">
                  <span
                    className="h-[21px] rounded-[4px] font-medium text-[12px]
                    leading-[16px] tracking-[-0.025em] px-[6px] py-[3px]"
                    style={{
                      border: `${item.borderColor}`,
                      backgroundColor: `${item.backgroundColor}`,
                      color: `${item.color}`,
                    }}
                  >
                    {item.name}
                  </span>
                  <span className="mt-[9px] block text-[16px] leading-[22px] text-black font-bold tracking-[-0.025em]">
                    {item.title}
                  </span>
                  <span className="mt-[7px] text-[14px] text-[#999] leading-[18px] tracking-[-0.025em]">
                    {item.date}
                  </span>
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="event-button-prev"></button>
      <button className="event-button-next"></button>
    </div>
  );
}
