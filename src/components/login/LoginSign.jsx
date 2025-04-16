// import { LoginIcon } from '@/components/login/LoginIcon';
import { LoginIcon } from '@/components/login/LoginIcon';

export default function LoginSign() {
  //svg는 태그 , png+jpg는 import >> login은 전부 import해서 사용하자
  // ref로 foucs+border색  or focus만, css아웃라인
  // id input에 히든 visible 버튼 << 핸들러로 value 삭제
  // password 버튼에 type토글(pass<>text)
  // 아이디찾기,비밀번호찾기 > window.open()  << 핸들러 switch case로
  // 자동로그인 state color토글
  // sns 버튼 window.open()
  // 회원가입버튼  LINK + route page
  // 주문조회버튼 popup

  return (
    <div className="max-w-[420px] mx-auto my-0">
      <LoginIcon.eye />
      <LoginIcon.eyeActive />
      <LoginIcon.eye />
      <LoginIcon.eyeActive />
      <LoginIcon.eye />
      <LoginIcon.eyeActive />
      <h3 className="text-center text-[22px] text-gray-600 ">
        지금로그인하고
        <br />
        <strong className="text-point1 ">LOTTE EATZ</strong>
        혜택받으세요!
      </h3>
      {/* 로그인 sign */}
      <div className="mt-[40px]">
        {/*  */}
        <div>
          <input
            className="w-full border-[#DDE0E3] text-[14px] pl-[38px] pr-[16px]  outline-[#000]"
            type="text"
            maxLength={50}
            placeholder="L.POINT 아이디 입력"
          />
          <p className="text-[13px] mt-[6px] hidden">아이디를 입력해 주세요.</p>
        </div>

        <div className="mt-[6px]">
          <input
            className="w-full border-[#DDE0E3] text-[14px] pl-[38px] pr-[16px]"
            type="password"
            placeholder="비밀번호 입력"
          />
          <p className="text-[13px] mt-[6px] hidden">
            비밀번호를 입력해 주세요.
          </p>
        </div>

        <div className="mt-[8px]">
          <button type="submit" className="btn w-full">
            로그인
          </button>
        </div>
        {/*  */}
        {/* 로그인Fn */}
        {/* <div className="flex justify-between">
          <div>
            <input className="checkbox" type="checkbox" />
            <label>자동로그인</label>
          </div>
          <div>아이디찾기 / 비밀번호찾기</div>
        </div> */}
      </div>

      {/* sns sign */}
      <div className="sns"></div>
    </div>
  );
}
