import OrderLeft from '@/components/home/OrderLeft';
import OrderRight from '@/components/home/OrderRight';

// 주소설정 주문배달, 스와이퍼
export default function OrderWrap() {
  return (
    <div className="mt-[20px] flex">
      <OrderLeft />
      <OrderRight />
    </div>
  );
}
