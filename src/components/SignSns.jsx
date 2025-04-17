import { LoginIcon } from '@/components/login/LoginIcon';

export default function SignSns({ snsType }) {
  // console.log(snsType);

  const snsLink = (params) => {
    switch (params) {
      case 'kakao':
        window.location.href =
          'https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fclient_id%3D223a4489c32ceabf100fe0e1da2ef441%26channel_public_id%3D_mAMxaE%252C_xeQxdxaE%26extra.service_terms%3DEatz_Service_202208%252CEatz_Service_202209%252Cservice_220210%252Cservice_220211%252Cservice_220212%252Cservice_220213%26redirect_uri%3Dhttps%253A%252F%252Fwww.lotteeatz.com%252Fmember%252FloginKakaoSync%26response_type%3Dcode%26auth_tran_id%3Db5iucu2iuo223a4489c32ceabf100fe0e1da2ef441m9kp56ld%26ka%3Dsdk%252F1.39.10%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Fwww.lotteeatz.com%26is_popup%3Dfalse%26through_account%3Dtrue&talk_login=hidden#login';
        break;
      case 'naver':
        window.location.href =
          'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=turFj5YN1hq267MUZWhk&redirect_uri=https://www.lotteeatz.com/member/loginNaverIdCallback&state=870581755667999353610838266317793870830';
        break;
      case 'point':
        window.location.href =
          'https://members.lpoint.com/exView/join/mbrJoin_01_001';
        break;
      case 'sh':
        window.open(
          'https://www.lotteeatz.com/member/loginShsignUserInfo?returnUrl=https://www.lotteeatz.com/member/login?returnUrl=https://www.lotteeatz.com/brand/ria',
          '_blank',
          'width=1200,height=1200'
        );
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* 로그인 sns sign */}
      <button
        onClick={() => {
          snsLink('kakao');
        }}
        className="flex btn relative text-[14px] rounded-[4px] border-[#DDE0E3] hover:bg-[#EFF1F3] h-[44px]"
      >
        <LoginIcon.kakao className="absolute left-[20px] top-1/2 -translate-y-1/2" />
        카카오로 {snsType === 'join' ? '회원가입' : '로그인'}
        {/* window.location */}
      </button>
      <button
        onClick={() => {
          snsLink('naver');
        }}
        className="flex btn relative text-[14px] rounded-[4px] border-[#DDE0E3] hover:bg-[#EFF1F3] h-[44px]"
      >
        <LoginIcon.naver className="absolute left-[20px] top-1/2 -translate-y-1/2" />
        네이버로 {snsType === 'join' ? '회원가입' : '로그인'}
        {/* link */}
      </button>
      {snsType === 'join' && (
        <button
          onClick={() => snsLink('point')}
          className="flex btn relative text-[14px] rounded-[4px] border-[#DDE0E3] hover:bg-[#EFF1F3] h-[44px]"
        >
          <LoginIcon.point
            width={24}
            height={24}
            className="absolute left-[20px] top-1/2 -translate-y-1/2"
          />
          L.POINT 통합회원 가입
        </button>
      )}
      <button
        onClick={() => {
          snsLink('sh');
        }}
        className="flex btn relative text-[14px] rounded-[4px] border-[#DDE0E3] hover:bg-[#EFF1F3] h-[44px]"
      >
        <img
          src={LoginIcon.sh}
          alt=""
          className="w-[24px] absolute left-[20px] top-1/2 -translate-y-1/2"
        />
        신한인증서로 {snsType === 'join' ? '회원가입' : '로그인'}
        {/* window.open */}
      </button>
    </>
  );
}
