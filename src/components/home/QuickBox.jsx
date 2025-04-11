import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './MainSlider.module.css';
import { Link } from 'react-router';

const quickBox = [
  {
    id: 1,
    ThumbImg: '/images/csa/quick-box/coupon.png',
    title: '쿠폰',
    path: '/',
  },
  {
    id: 2,
    ThumbImg: '/images/csa/quick-box/coffeeBeans.png',
    title: '원두구매하기',
    path: '/',
  },
  {
    id: 3,
    ThumbImg: '/images/csa/quick-box/shopping.png',
    title: '잇츠쇼핑',
    path: '/',
  },
  {
    id: 4,
    ThumbImg: '/images/csa/quick-box/angelius.png',
    title: '엔제리너스몰',
    path: '/',
  },
  {
    id: 5,
    ThumbImg: '/images/csa/quick-box/exchangeTicket.png',
    title: '제품교환권',
    path: '/',
  },
  {
    id: 6,
    ThumbImg: '/images/csa/quick-box/event.png',
    title: '이벤트',
    path: '/',
  },
  {
    id: 7,
    ThumbImg: '/images/csa/quick-box/stamp.png',
    title: '스탬프',
    path: '/',
  },
  {
    id: 8,
    ThumbImg: '/images/csa/quick-box/eatzCard.png',
    title: 'EATZ카드',
    path: '/',
  },
  {
    id: 9,
    ThumbImg: '/images/csa/quick-box/myStore.png',
    title: '나의 매장',
    path: '/',
  },
];

// 세번째 스와이퍼 부분
export default function QuickBox() {
  return (
    <div
      className={`pt-[40px] pr-[20px] relative
      ${styles['quick-box']}`}
    >
      <Swiper
        style={{ paddingTop: '40px' }}
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={9}
        navigation={{
          prevEl: '.quick-button-prev',
          nextEl: '.quick-button-next',
        }}
      >
        {quickBox.map((item) => (
          <SwiperSlide key={item.id} style={{ maxWidth: '100px' }}>
            <div className="w-[100px] bg-[rgba(239,241,243,0.6)] rounded-[4px]">
              <Link to="/" className="block w-full h-[100px] py-[21px]">
                <span
                  className="block w-[36px] h-[36px] mx-[auto]"
                  style={{
                    backgroundImage: `url(${item.ThumbImg})`,
                  }}
                ></span>
                <p className="mt-[6px] text-[14px] text-center text-black">
                  {item.title}
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="quick-button-prev"></button>
      <button className="quick-button-next"></button>
    </div>
  );
}
