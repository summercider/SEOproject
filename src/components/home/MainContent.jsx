import MainBanner from '@/components/home/MainBanner';
import OrderAddress from '@/components/home/OrderAddress';
import QuickBox from '@/components/home/QuickBox';

// 왼쪽 컨텐츠
export default function MainContent() {
  return (
    <div className="w-[calc(100%-270px)] ml-[-40px] pt-[30px] pl-[40px] pr-[20px] pb-[100px]">
      <MainBanner />
      <OrderAddress />
      <QuickBox />
    </div>
  );
}
