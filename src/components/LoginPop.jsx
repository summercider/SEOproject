import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';

export default function LoginPop({ setShow, show }) {
  const popRef = useRef(null);

  //팝업 띄우면 scroll 막기
  const stopScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  //클린업
  useEffect(() => {
    if (show) {
      stopScroll();
    }
    return () => {
      if (show) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [show]);
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
  //state변경
  const closeClick = () => {
    setShow(false);
  };

  return ReactDOM.createPortal(
    <div
      className={`fixed left-0 top-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-300
      ${show ? 'visible opacity-[100%]' : 'opacity-0 invisible'} 
      `}
    >
      <div
        ref={popRef}
        className={`w-[400px] p-[20px] bg-[#fff] rounded-[10px] z-301
        `}
      >
        <div>
          <h1 className=" pt-[13px] pb-[12px] text-[16px] text-gray-600 text-center leading-[22px]">
            로그인후 사용가능합니다.
            <br />
            로그인 하시겠습니까?
          </h1>
        </div>
        <div className="flex justify-between gap-[6px] pt-[20px]">
          <button
            type="btn"
            onClick={closeClick}
            className="w-1/2 border h-[44px] border-[#DDE0E3] rounded-[4px] text-[14px] text-gray-600
            hover:bg-[#EFF1F3]"
          >
            취소
          </button>
          <button
            type="btn"
            onClick={closeClick}
            className="w-1/2 border bg-[#00A5B9] border-[#00A5B9] rounded-[4px] text-[14px] 
            hover:bg-point1"
          >
            <Link to={'/'} className="w-full block text-[#fff] ">
              확인
            </Link>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
