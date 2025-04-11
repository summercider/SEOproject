import { Link } from 'react-router';

export default function PopularOrder() {
  return (
    <div className="flex justify-between pt-[40px] mb-[20px]">
      <h2 className="text-[22px] leading-[28px] tracking-[-0.025em] text-black">
        브랜드별 <strong className="font-bold">인기메뉴</strong>
      </h2>
      <Link className="flex justify-center items-center gap-x-[2px]">
        <span className="text-[14px] leading-[18px] tracking-[-0.025em] text-black">
          매장주문
        </span>
      </Link>
    </div>
  );
}
