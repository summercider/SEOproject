export default function DetailBtn({ detail, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className=" border border-[#DDE0E3] w-full h-[50px] flex justify-between items-center pr-[20px]  "
    >
      <p className="py-[15px] pr-[52px] pl-[20px] text-gray-600 text-[15px]">
        상세정보
      </p>
      <i
        className={`transition-transform duration-100  ease-out  
  ${detail ? 'rotate-180  ' : ' '}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="arrow_16"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <rect
            id="사각형_3332"
            data-name="사각형 3332"
            width="16"
            height="16"
            fill="none"
            opacity="0.2"
          />
          <path
            id="패스_45"
            data-name="패스 45"
            d="M10,0,5,5,0,0"
            transform="translate(3 5.502)"
            fill="none"
            stroke="#000"
          />
          <script xmlns="" />
        </svg>
      </i>
    </button>
  );
}
