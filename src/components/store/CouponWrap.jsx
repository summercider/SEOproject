import BottomWrap from '@/components/store/BottomWrap';
import TopWrap from '@/components/store/TopWrap';

export default function CouponWrap() {
  return (
    <div className="max-w-[1150px] mx-[auto] px-[20px] pt-[30px] pb-[100px] max-sm:w-full max-sm:px-0">
      <TopWrap />
      <BottomWrap />
    </div>
  );
}
