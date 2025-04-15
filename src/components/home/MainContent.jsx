import Coupon from '@/components/home/Coupon';
import EatzTv from '@/components/home/EatzTv';
import EventBenefits from '@/components/home/EventBenefits';
import MainBanner from '@/components/home/MainBanner';
import OrderAddress from '@/components/home/OrderAddress';
import Popular from '@/components/home/Popular';
import QuickBox from '@/components/home/QuickBox';
import Shop from '@/components/home/Shop';

// 왼쪽 컨텐츠
export default function MainContent() {
  return (
    <div className="w-[calc(100%-270px)] ml-[-40px] pt-[30px] pl-[40px] pr-[20px] pb-[100px]">
      <MainBanner />
      <OrderAddress />
      <QuickBox />
      <Coupon />
      <Popular />
      <Shop />
      <EventBenefits />
      <EatzTv />
    </div>
  );
}
