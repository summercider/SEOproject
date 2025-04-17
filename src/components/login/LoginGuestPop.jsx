import { LoginIcon } from '@/components/login/LoginIcon';
import LoginTimer from '@/components/login/LoginTimer';
import { useEffect, useRef, useState } from 'react';

export default function LoginGuestPop({ setShow, show }) {
  const popRef = useRef(null); //팝업외부클릭시 해제
  // ------------------------*----------------------------------------------------------------------------*----------
  const [agree, setAgree] = useState(false); //수집이용
  const [check, setCheck] = useState(false); //14세
  // 인증
  const [phone, setPhone] = useState(''); //휴대폰입력
  const [disable, setDisable] = useState(false); // 버튼막기
  //
  const [enter, setEnter] = useState(''); //인증번호칸 인풋추가 +

  const handlePhone = (e) => {
    console.log(e.target.value);
    setPhone(e.target.value);
  };

  const phoneClear = () => {
    setPhone('');
    setDisable(true);
    console.log('proveSend 인증번호발송 안들어옴');
  };

  // 인증번호발송 버튼으로 AGREE, ageCheck, 휴대폰번호(시작,자리수) 확인해야함
  const proveSend = () => {
    console.log('버튼 활성화 >>>>>>>>> 잘 작동중임');
    if (agree === false) {
      alert('수집이용동의 해라');
    } else if (check === false) {
      alert('나이체크 해라');
    } else if (phone === '') {
      alert('폰입력해라');
    } else if (phone.length < 11) {
      alert('자리수 11개아님');
    } else if (!phone.startsWith('010')) {
      alert('010으로시작안함');
    } else if (phone.length === 11 && phone.startsWith('010')) {
      alert('통과 ㅋ');
      // 통과하면,
      // 1.proveSend버튼 숨기기
      // 2.상태주고 밑에 인증번호칸 input하나더 보여주기
      // 3.타이머 보여주기
    }
  };

  useEffect(() => {
    if (phone) {
      setDisable(false);
    }
  }, [phone]);

  // ++input type이 text임 text면 입력안되게 필터링
  // ------------------------*----------------------------------------------------------------------------*----------

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
  const closeClick = () => {
    setShow(false);
  };

  return (
    <div
      className={`fixed left-0 top-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-300
      ${show ? 'visible opacity-[100%]' : 'opacity-0 invisible'} 
      `}
    >
      <div
        ref={popRef}
        className={`w-[400px]  bg-[#fff] rounded-[10px] py-[20px] px-[20px]
            max-sm:absolute max-sm:bottom-0 max-sm:w-full max-sm:transition-all 
            ${show ? 'max-sm:translate-y-0' : 'max-sm:translate-y-[100%]'}  
            `}
      >
        {/* 헤드, 취소버튼 */}
        <div className="relative mb-[20px]">
          <h1 className="text-[18px] font-semibold text-gray-600">
            비회원 주문/조회
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
        {/* 체크박스 */}
        <ul>
          <li className="px-[16px] py-[13px]">
            <div>
              <label className="flex h-[24px] items-center cursor-pointer select-none">
                <div
                  className={`border-1  rounded-full ${
                    agree ? 'bg-[#00A5B9] border-[#00A5B9]' : 'border-[#DDE0E3]'
                  }`}
                >
                  {agree ? <LoginIcon.checkOn /> : <LoginIcon.check />}
                </div>
                <input
                  value={agree}
                  onChange={() => setAgree(!agree)}
                  type="checkbox"
                />
                <span className="wihtepace-pre-wrap text-[14px] pl-[6px] ">
                  이용약관 및 개인정보 수집이용 동의
                </span>
              </label>
            </div>
          </li>
          <li className="mt-[6px] px-[16px] py-[13px]">
            <div>
              <label className="flex h-[24px] items-center cursor-pointer select-none">
                <div
                  className={`border-1  rounded-full ${
                    check ? 'bg-[#00A5B9] border-[#00A5B9]' : 'border-[#DDE0E3]'
                  }`}
                >
                  {check ? <LoginIcon.checkOn /> : <LoginIcon.check />}
                </div>
                <input
                  value={check}
                  onChange={() => setCheck(!check)}
                  type="checkbox"
                />
                <span className="wihtepace-pre-wrap text-[14px] pl-[6px] ">
                  만 14세 이상입니다
                </span>
              </label>
            </div>
          </li>
        </ul>
        {/* 연락처 */}
        <div className="mt-[20px]">
          <p className="mb-[10px]">연락처 *</p>
          {/* 인증 전화번호칸*/}
          <div className=" flex ">
            <input
              value={phone}
              onChange={handlePhone}
              type="text"
              maxLength="11"
              placeholder="휴대폰번호 입력"
              className="h-[44px]  pl-[16px] pr-[54px] rounded-[4px] w-full border-[#DDE0E3] focus:border-point1"
            />
            <div className="relative">
              <button
                onClick={phoneClear}
                className="absolute top-1/2 -translate-y-1/2 right-[9px]"
              >
                {phone && <LoginIcon.inpClose />}
              </button>
            </div>
            <button
              onClick={proveSend}
              disabled={disable}
              className="btn ml-[6px] w-[108px] h-[44px] px-[16px] shrink-0 text-[14px] whitespace-nowrap rounded-[4px] border-[#DDE0E3] text-[#bbb]"
            >
              인증번호 발송
              {/* phone state에 따라서 바꾸기 [T면 클릭O 색000 / F면 클릭X 색ddd] */}
            </button>
          </div>
          {/* 인증번호칸 */}
          <div className="flex mt-[6px]">
            <input
              type="text"
              maxLength="6"
              placeholder="인증번호 입력"
              className="h-[44px] px-[16px] rounded-[4px] w-full border-[#DDE0E3] focus:border-point1 pl-[16px] pr-[54px]"
            />
            <div className="relative">
              <div className="absolute top-0 right-0">
                <LoginTimer />
              </div>
            </div>
            <button className="btn ml-[6px] w-[108px] h-[44px] px-[16px] shrink-0 text-[14px] whitespace-nowrap rounded-[4px] border-[#DDE0E3] text-[#bbb]">
              재전송
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
