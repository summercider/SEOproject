import { useEffect, useRef } from 'react';
import kakao from '@/assets/images/ico_kakao.svg';
import blog from '@/assets/images/ico_blog.svg';
import facebook from '@/assets/images/ico_fb.svg';
import twitter from '@/assets/images/ico_twitter.svg';

export default function AsidePop({ setShow }) {
  const popRef = useRef(null);

  useEffect(() => {
    const outsideClick = (e) => {
      if (!popRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener('mousedown', outsideClick);

    return () => {
      document.removeEventListener('mousedown', outsideClick);
    };
  }, []);
  const closeClick = () => {
    setShow(false);
  };

  return (
    <div className="fixed left-0 top-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
      <div
        ref={popRef}
        className="w-[400px]  bg-[#fff] rounded-[10px] pt-[20px] pb-[30px] px-[20px]
        max-sm:absolute max-sm:bottom-0 max-sm:w-full"
      >
        <div className="relative mb-[20px]">
          <h1 className="text-[18px] font-semibold text-gray-600">공유하기</h1>
          <button
            type="btn"
            onClick={closeClick}
            className=" w-[44px] h-[44px] absolute -top-[10px] -right-[20px] text-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="btn_닫기" transform="translate(-50 -748)">
                <rect
                  id="Rectangle_4524"
                  data-name="Rectangle 4524"
                  width="24"
                  height="24"
                  transform="translate(50 748)"
                  fill="none"
                />
                <line
                  id="Line_50"
                  data-name="Line 50"
                  x1="16"
                  y2="16"
                  transform="translate(54 752)"
                  fill="none"
                  stroke="#000"
                  strokeWidth={2}
                />
                <line
                  id="Line_51"
                  data-name="Line 51"
                  x2="16"
                  y2="16"
                  transform="translate(54 752)"
                  fill="none"
                  stroke="#000"
                  strokeWidth={2}
                />
              </g>
              <script xmlns="" />
            </svg>
          </button>
        </div>
        <ul className="flex  justify-between mx-[10px]">
          <li>
            <button type="button" className="w-[49px]">
              <img className="w-full" src={kakao} />
            </button>
          </li>
          <li>
            <button type="button" className="w-[49px]">
              <img className="w-full" src={blog} />
            </button>
          </li>
          <li>
            <button type="button" className="w-[49px]">
              <img className="w-full" src={twitter} />
            </button>
          </li>
          <li>
            <button type="button" className="w-[49px]">
              <img className="w-full" src={facebook} />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="w-[49px] h-[49px] rounded-full bg-[#80878D]"
            >
              <span className="text-[#fff] text-[14px]">URL</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
