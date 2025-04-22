import JoinPop from '@/components/JoinPop';
import AgreePop from '@/components/login/AgreePop';
import { LoginIcon } from '@/components/login/LoginIcon';
import LoginTimer from '@/components/login/LoginTimer';
import { useEffect, useRef, useState } from 'react';
// ++input type이 text임 text면 입력안되게 필터링

export default function LoginGuestPop({ setShow, show }) {
  //LoginGuestPop 전체팝업상태는 show,setshow
  const popRef = useRef(null); //전체 팝업외부클릭시 해제
  const [agreePopShow, setAgreePopShow] = useState(false); // 동의 팝업 전체 hidden 상태
  const [joinPopShow, setJoinPopShow] = useState(false); //검증 팝업 전체 hidden 상태
  // ----------------------------------------------------------------------------------------------------------
  const [joinPopType, setJoinPopType] = useState('');
  // ----------------------------------------------------------------------------------------------------------
  //동의 체크 상태
  const [agree, setAgree] = useState(false); //*상단 *1번 체크 상태
  const [check, setCheck] = useState(false); //      *2번 체크 상태

  const [phone, setPhone] = useState(''); //*전화번호칸   *input value 상태
  const [disable, setDisable] = useState(false); //      *버튼 작동 상태
  const [proveHide, setProveHide] = useState(false); //  *버튼 hidden 상태

  const [enter, setEnter] = useState(false); //*인증번호칸 *전체 hidden 상태
  const [verifyCode, setVerifyCode] = useState(''); //  *input value 상태

  const [time, setTime] = useState(180); //       *타이머 *초기값 180초로 상태
  const [timerKey, setTimerKey] = useState(0); //        *key 리셋 상태
  // ----------------------------------------------------------------------------------------------------------
  // 동의칸
  const agreeSend = () => {
    console.log('동의칸 버튼');
    setAgreePopShow(true);
  };
  // ----------------------------------------------------------------------------------------------------------
  // *전화번호칸 input value *onChange
  const handlePhone = (e) => {
    if (phone.length < 11) {
      setPhone(e.target.value);
    }
    e.stopPropagation();
  };
  // * X 버튼 hidden상태
  const phoneClear = (e) => {
    e.stopPropagation();
    setPhone(''); //필드값비움
    setDisable(true); //작동막음
  };
  // *버튼 작동 상태관리
  useEffect(() => {
    // 필드값있으면 작동가능
    if (phone) {
      setDisable(false);
    }
  }, [phone]);

  // ----------------------------------------------------------------------------------------------------------
  // *인증번호칸 input value *onChange
  const handleVerifyCode = (e) => {
    if (verifyCode.length < 6) {
      setVerifyCode(e.target.value);
    }
  };
  // * X 버튼 hidden상태
  const verifuCodeClear = (e) => {
    e.stopPropagation();
    setVerifyCode(''); //필드값비움
  };
  // *버튼 작동
  const timerReset = () => {
    setTimerKey(timerKey + 1); //타이머 리셋 재실행
    setJoinPopShow(true);
    setJoinPopType('resend');
    setTime(180);
  };
  // *인증번호칸 *버튼검증 *onClick
  const proveSend = (e) => {
    e.stopPropagation();
    if (agree === false) {
      setJoinPopShow(true);
      setJoinPopType('agree');
    } else if (check === false) {
      setJoinPopShow(true);
      setJoinPopType('check');
    } else if (phone === '') {
      setJoinPopShow(true);
      setJoinPopType('phone');
    } else if (!phone.startsWith('010')) {
      setJoinPopShow(true);
      setJoinPopType('phoneStart');
    } else if (phone.length !== 11) {
      setJoinPopShow(true);
      setJoinPopType('phoneNumber');
    } else if (phone.length === 11 && phone.startsWith('010')) {
      setEnter(true);
      setProveHide(true);
      setTimerKey(timerKey + 1);
      setTime(180);
    }
  };
  // ----------------------------------------------------------------------------------------------------------
  // *마지막 휴대폰인증 *버튼검증 *onClick
  const submitFinal = () => {
    if (proveHide === false) {
      setJoinPopShow(true);
      setJoinPopType('phoneVerify');
    } else {
      if (agree === false) {
        setJoinPopShow(true);
        setJoinPopType('agree');
      } else if (check === false) {
        setJoinPopShow(true);
        setJoinPopType('check');
      } else {
        if (time === 0) {
          setJoinPopShow(true);
          setJoinPopType('time');
        } else {
          if (verifyCode === '') {
            setJoinPopShow(true);
            setJoinPopType('verify');
          } else if (verifyCode.length !== 6) {
            setJoinPopShow(true);
            setJoinPopType('fail');
          } else if (verifyCode.length == 6) {
            setJoinPopShow(true);
            setJoinPopType('pass');
          } else {
            setJoinPopShow(true);
            setJoinPopType('fail');
          }
        }
      }
    }
  };
  // ----------------------------------------------------------------------------------------------------------
  //전체 팝업 띄우면 scroll 막기
  const stopScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  //전체 스크롤 클린업
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
  //전체 팝업 외부클릭 닫음
  useEffect(() => {
    const outsideClick = (e) => {
      if (!popRef.current.contains(e.target)) {
        setShow(false);
        console.log(e.target, '외부');
        // join팝업 초기화 전화번호칸 비우기 ,
        setPhone('');
        setProveHide(false);
        setEnter(false);
      }
      if (popRef.current.contains(e.target)) {
        console.log(e.target, '내부');
      }
    };
    document.addEventListener('mousedown', outsideClick); //클릭이면 외부에서 마우스를 땔때 닫혀버림 ex: 인풋에서 드래그 외부에서 놓음
    return () => {
      document.removeEventListener('mousedown', outsideClick);
    };
  }, []);
  //전체 팝업 X 버튼 상태
  const closeClick = () => {
    setShow(false);
    setPhone('');
    setProveHide(false);
    setEnter(false);
    setVerifyCode('');
  };

  return (
    <>
      <div
        className={`fixed left-0 top-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-300
      ${show ? 'visible opacity-[100%]' : 'opacity-0 invisible'} 
      `}
      >
        <div
          ref={popRef}
          className={`w-[400px]  bg-[#fff] rounded-[10px] py-[20px] px-[20px]
            max-sm:absolute max-sm:bottom-0 max-sm:w-full max-sm:transition-all 
            ${show ? '' : 'max-sm:translate-y-[100%]'}  
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
                <label className="flex h-[24px] items-center cursor-pointer select-none relative">
                  <div
                    className={`border-1  rounded-full ${
                      agree
                        ? 'bg-[#00A5B9] border-[#00A5B9]'
                        : 'border-[#DDE0E3]'
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
                  <button
                    onClick={agreeSend}
                    className="absolute right-0 items-center pl-[90px] text-[14px] h-[24px]  text-gray-600 
                    max-sm:pl-[570px]"
                  >
                    <LoginIcon.more />
                  </button>
                  <AgreePop
                    agreePopShow={agreePopShow}
                    setAgreePopShow={setAgreePopShow}
                  />
                </label>
              </div>
            </li>
            <li className="mt-[6px] px-[16px] py-[13px]">
              <div>
                <label className="flex h-[24px] items-center cursor-pointer select-none">
                  <div
                    className={`border-1  rounded-full ${
                      check
                        ? 'bg-[#00A5B9] border-[#00A5B9]'
                        : 'border-[#DDE0E3]'
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
                type="number"
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
              {proveHide ? null : (
                <button
                  onClick={proveSend}
                  disabled={disable}
                  className="btn ml-[6px] w-[108px] h-[44px] px-[16px] shrink-0 text-[14px] whitespace-nowrap rounded-[4px] border-[#DDE0E3] text-[#bbb]"
                >
                  인증번호 발송
                </button>
              )}
            </div>
            {/* 인증번호칸 */}
            {enter && (
              <div className="flex mt-[6px]">
                <div className="relative max-sm:w-full">
                  <input
                    value={verifyCode}
                    onChange={handleVerifyCode}
                    type="number"
                    maxLength="6"
                    placeholder="인증번호 입력"
                    className="h-[44px] px-[16px] rounded-[4px] w-full border-[#DDE0E3] focus:border-point1 pl-[16px] pr-[54px]"
                  />
                  <div>
                    <button
                      onClick={verifuCodeClear}
                      className="absolute top-1/2 right-[54px] -translate-y-1/2"
                    >
                      {verifyCode && <LoginIcon.inpClose />}
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute top-1/2 right-[16px] -translate-y-1/2 text-[12px] text-[#EF3D2E]">
                    <LoginTimer key={timerKey} time={time} setTime={setTime} />
                  </div>
                </div>
                <button
                  onClick={timerReset}
                  className="btn ml-[6px] w-[108px] h-[44px] px-[16px] shrink-0 text-[14px] whitespace-nowrap rounded-[4px] border-[#80878D] text-[#000]"
                >
                  재전송
                </button>
              </div>
            )}
          </div>
          {/* 최종인증버튼 */}
          <div className="mt-[30px]">
            <button
              onClick={submitFinal}
              className="btn w-full h-[44px] text-[14px] border-point1 text-[#fff] bg-[#00A5B9] rounded-[4px]
                  hover:bg-[#008D9F]"
            >
              <span>휴대폰 인증</span>
            </button>
          </div>
          {/* 검증로직 + 팝업 */}
          <JoinPop
            joinPopShow={joinPopShow}
            setJoinPopShow={setJoinPopShow}
            type={joinPopType}
          />
        </div>
      </div>
    </>
  );
}
