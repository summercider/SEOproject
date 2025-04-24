import { useEffect } from 'react';

export default function JoinPop({
  setJoinPopShow,
  joinPopShow,
  type,
  setShow,
}) {
  let typeMessage = '';
  switch (type) {
    case 'agree':
      typeMessage = '이용약관 및 개인정보 수집이용에 동의해 주세요.';
      break;
    case 'check':
      typeMessage = '만 14세 이상 여부를 확인해 주세요.';
      break;
    case 'phone':
      typeMessage = '휴대폰번호를 입력해주세요';
      break;
    case 'phoneStart':
      typeMessage = '휴대폰번호를 확인해주세요.';
      break;
    case 'phoneNumber':
      typeMessage = '휴대폰번호를 확인해주세요.';
      break;
    case 'phoneVerify':
      typeMessage = '휴대폰인증을 진행해주세요.';
      break;
    case 'verify':
      typeMessage = '인증번호를 입력해주세요.';
      break;
    case 'fail':
      typeMessage = '인증번호가 틀렸습니다.';
      break;
    case 'resend':
      typeMessage = '인증번호를 재전송하였습니다.';
      break;
    case 'time':
      typeMessage = '인증시간이 초과되었습니다.';
      break;
    case 'pass':
      typeMessage = '인증에 성공하였습니다';
      break;

    default:
      typeMessage = '알수없는 오류가 발생했습니다.';
      break;
  }
  //팝업 띄우면 scroll 막기
  const stopScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  //클린업
  useEffect(() => {
    if (joinPopShow) {
      stopScroll();
    }
    return () => {
      if (joinPopShow) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [joinPopShow]);
  //  닫기버튼
  const closeClick = () => {
    setJoinPopShow(false);
  };
  return (
    <div
      className={`fixed left-0 top-0 w-full h-full  flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-300
      ${joinPopShow ? 'visible opacity-[100%]' : 'opacity-0 invisible'} 
      `}
      // max-sm:absolute
    >
      <div
        className={`w-[400px] p-[20px] bg-[#fff] rounded-[10px] z-301
        `}
      >
        <div>
          <h1 className=" pt-[13px] pb-[12px] text-[16px] text-gray-600 text-center leading-[22px]">
            {typeMessage}
          </h1>
        </div>
        <div className="pt-[20px]">
          <button
            type="btn"
            onClick={closeClick}
            className="w-full h-[44px]  text-[#fff] border bg-[#00A5B9] border-[#00A5B9] rounded-[4px] text-[14px] 
            hover:bg-point1"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
