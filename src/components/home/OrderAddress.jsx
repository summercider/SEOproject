import OrderWrap from '@/components/home/OrderWrap';
import SettingAddress from '@/components/home/SettingAddress';

// 주소설정 컨텐츠
export default function OrderAddress() {
  return (
    <div className="mt-[40px] max-sm:pl-[20px]">
      <SettingAddress />
      <OrderWrap />
    </div>
  );
}
