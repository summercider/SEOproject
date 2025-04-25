import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './MainSlider.module.css';
import { Link } from 'react-router';

const videoInfo = [
  {
    thumbnail: '/images/csa/eatzTv/maxresdefault1.jpg',
    title: '[PLAYLIST] 고막까지 시원하길 바라는 얼죽파를 위한 플레이리스트',
    alt: '얼죽파',
  },
  {
    thumbnail: '/images/csa/eatzTv/maxresdefault2.jpg',
    title:
      '[PLAYLIST] 굽먹처럼 겉바속촉 지지자라면.. 굽먹파를 위한 밤에 듣는 촉촉한 플리..♥ ',
    alt: '굽먹파',
  },
  {
    thumbnail: '/images/csa/eatzTv/maxresdefault3.jpg',
    title:
      '[PLAYLIST] “대세는 지지 않아” 모두를 눌러버릴 쇠맛 케이팝 응원곡 플리 (for 눌먹파)',
    alt: '눌먹파',
  },
  {
    thumbnail: '/images/csa/eatzTv/maxresdefault4.jpg',
    title: '[PLAYLIST] 달콤한 봄을 기다리는 요즘… 말먹파의 플리, 같이 들을래?',
    alt: '말먹파',
  },
  {
    thumbnail: '/images/csa/eatzTv/maxresdefault5.jpg',
    title:
      '“나락이 왜 여기서 나와…?” 미미미누 vs 롯데GRS 상무님의 레전드 퀴즈 대결 [스타오브리아 EP.2]',
    alt: '미미미누',
  },
];

export default function EatzTvBanner() {
  return (
    <div
      className={`mt-[20px] relative max-sm:mt-0
      ${styles['eatz']}`}
    >
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={10}
        navigation={{
          prevEl: '.eatz-button-prev',
          nextEl: '.eatz-button-next',
        }}
      >
        {videoInfo.map((item, index) => (
          <SwiperSlide key={index} style={{ maxWidth: '260px' }}>
            <Link className="block">
              <div className="relative">
                <div className="">
                  <img
                    className="w-full rounded-[4px] object-cover"
                    src={item.thumbnail}
                    alt={item.alt}
                  />
                </div>
                <div
                  className="absolute left-[50%] top-[50%] 
                -translate-x-[50%] -translate-y-[50%]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="45"
                    viewBox="0 0 34 45"
                  >
                    <path
                      d="M18.33,6.3a5,5,0,0,1,8.339,0l13.2,19.94A5,5,0,0,1,35.7,34H9.3a5,5,0,0,1-4.17-7.759Z"
                      transform="translate(34) rotate(90)"
                      fill="#fff"
                      opacity="0.95"
                    />
                  </svg>
                </div>
              </div>
              <p
                className="break-keep text-white text-[16px] leading-[22px]
              tracking-[-0.025em] mt-[14px]"
              >
                {item.title}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="eatz-button-prev"></button>
      <button className="eatz-button-next"></button>
    </div>
  );
}
