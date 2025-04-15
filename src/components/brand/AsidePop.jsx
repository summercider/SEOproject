import { useEffect, useRef, useState } from 'react';
import kakao from '@/assets/images/ico_kakao.svg';
import blog from '@/assets/images/ico_blog.svg';
import facebook from '@/assets/images/ico_fb.svg';
import twitter from '@/assets/images/ico_twitter.svg';

export default function AsidePop({ setShow, show }) {
  const [popShow, setPopShow] = useState(false);
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

  // 아이콘 버튼 클릭시 링크 모음
  const moveSns = (e) => {
    switch (e.currentTarget.value) {
      case 'kakao':
        // console.log(e.currentTarget.value, 'kakao냐?');
        return window.open(
          'https://accounts.kakao.com/login/?continue=https%3A%2F%2Fsharer.kakao.com%2Fpicker%2Flink%3Fapp_key%3D223a4489c32ceabf100fe0e1da2ef441%26short_key%3D4a136396-08b6-4dc4-aabd-680d80312cc9#login',
          '',
          'width=200'
        );
      case 'blog':
        // console.log(e.currentTarget.value, 'blog냐?');
        return window.open(
          'https://nid.naver.com/nidlogin.login?mode=form&template=plogin&url=http%3A%2F%2Fblog.naver.com%2FLinkShare.naver%3Furl%3Dhttps%253A%252F%252Fwww.lotteeatz.com%252Fbrand%252Fria%26title%3DLOTTE%2520EATZ',
          '',
          'width=200'
        );
      case 'facebook':
        // console.log(e.currentTarget.value, 'facebook냐?');
        return window.open(
          'https://x.com/intent/post?text=LOTTE%20EATZ&url=https%3A%2F%2Fwww.lotteeatz.com%2Fbrand%2Fria',
          '',
          'width=200'
        );
      case 'twitter':
        // console.log(e.currentTarget.value, 'twitter냐?');
        return window.open(
          'https://www.facebook.com/sharer/sharer.php?u=https://www.lotteeatz.com/brand/ria',
          '',
          'width=200'
        );
      case 'URL':
        // console.log(e.currentTarget.value, 'URL냐?');
        setShow(!show);
        handleCopyURL();
        return;
    }
  };

  const handleCopyURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {});
    setPopShow(true);
    setTimeout(() => setPopShow(false), 2000);
  };

  return (
    <>
      <div
        className={`fixed left-0 top-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-100
        ${show ? 'visible opacity-[100%]' : 'opacity-0 invisible '} 
      `}
      >
        <div
          ref={popRef}
          className={`w-[400px]  bg-[#fff] rounded-[10px] pt-[20px] pb-[30px] px-[20px]
        max-sm:absolute max-sm:bottom-0 max-sm:w-full max-sm:transition-all 
        ${show ? 'max-sm:translate-y-0' : 'max-sm:translate-y-[100%]'}  
        `}
        >
          <div className="relative mb-[20px]">
            <h1 className="text-[18px] font-semibold text-gray-600">
              공유하기
            </h1>
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
              <button
                value={'kakao'}
                onClick={moveSns}
                type="button"
                className="w-[49px]"
              >
                <img className="w-full" src={kakao} />
              </button>
            </li>
            <li>
              <button
                value={'blog'}
                onClick={moveSns}
                type="button"
                className="w-[49px]"
              >
                <img className="w-full" src={blog} />
              </button>
            </li>
            <li>
              <button
                value={'twitter'}
                onClick={moveSns}
                type="button"
                className="w-[49px]"
              >
                <img className="w-full" src={twitter} />
              </button>
            </li>
            <li>
              <button
                value={'facebook'}
                onClick={moveSns}
                type="button"
                className="w-[49px]"
              >
                <img className="w-full" src={facebook} />
              </button>
            </li>
            <li>
              <button
                value={'URL'}
                onClick={moveSns}
                type="button"
                className="w-[49px] h-[49px] rounded-full bg-[#80878D]"
              >
                <span className="text-[#fff] text-[14px]">URL</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={` rounded-[10px] px-[5px] pt-[16px] pb-[17px] fixed bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          text-[#fff] text-center bg-[rgba(0,0,0,0.6)] min-w-[335px] h-[51px] opacity-[1] backdrop-blur-[30px] z-200
          ${popShow ? '[animation:popOpacity_2s] ' : 'invisible '}
          max-sm:bottom-[15px] max-sm:w-[calc(100%-40px)]`}
      >
        클립보드에 복사되었습니다.
      </div>
    </>
  );
}
