import CouponBanner from '@/components/home/CouponBanner'; //여기 경로오류에요 대문자구분
import CouponMore from '@/components/home/CouponMore';

export default function Coupon() {
  return (
    <div className="pt-[40px] pr-[20px] max-sm:pr-0 max-sm:pl-[20px]">
      <CouponMore />
      <CouponBanner />
    </div>
  );
}
