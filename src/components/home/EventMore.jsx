import { Link } from 'react-router';

export default function EventMore() {
  return (
    <div className="flex justify-between pt-[40px] mb-[20px]">
      <h2
        className="text-[22px] leading-[28px] tracking-[-0.025em] text-black
      max-sm:flex max-sm:flex-col"
      >
        혜택이 쏟아지는 <strong className="font-bold">이벤트</strong>
      </h2>
      <Link className="flex justify-center items-center gap-x-[2px]">
        <span className="text-[14px] leading-[18px] tracking-[-0.025em] text-black">
          더보기
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
        >
          <g transform="translate(-54 -4.001)">
            <rect
              width="10"
              height="10"
              transform="translate(54 4.001)"
              fill="#fff"
              opacity="0"
            />
            <path
              d="M10232.7-747.317l4,4-4,4"
              transform="translate(-10174.203 752.317)"
              fill="none"
              stroke="#000"
              strokeWidth="1"
            />
          </g>
        </svg>
      </Link>
    </div>
  );
}
