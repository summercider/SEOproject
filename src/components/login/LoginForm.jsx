import { LoginIcon } from '@/components/login/LoginIcon';
import { useRef, useState } from 'react';

export default function LoginForm() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [pwType, setPwType] = useState('password');
  const [idInfo, setIdInfo] = useState(true);
  const [pwInfo, setPwInfo] = useState(true);

  // console.log(idValue);
  const idRef = useRef(null);
  const pwRef = useRef(null);

  const typeToggle = () => {
    if (pwType === 'password') {
      setPwType('text');
    } else {
      setPwType('password');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // id칸 비면 이거
    if (idValue.trim() === '') {
      // console.log('id검증걸림');
      setIdInfo(false);
      setPwInfo(true);
      pwRef.current.removeAttribute('style');
      idRef.current.focus();
      idRef.current.style.borderColor = '#EF3D2E';
    } else if (pwValue.trim() === '') {
      // pw칸 비면 이거
      // console.log('pw검증걸림');
      setIdInfo(true);
      setPwInfo(false);
      idRef.current.removeAttribute('style');
      pwRef.current.focus();
      pwRef.current.style.borderColor = '#EF3D2E';
    } else {
      // console.log('검증올패스');
      pwRef.current.removeAttribute('style');
      idRef.current.removeAttribute('style');
      alert('제출완료');
      setPwValue('');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {/* ID 인풋*/}
      <div className="relative">
        <LoginIcon.id className="absolute left-[12px] top-1/2 transform -translate-y-1/2" />
        <input
          ref={idRef}
          value={idValue}
          onChange={(e) => setIdValue(e.target.value)}
          className={`w-full h-[44px] border-[#DDE0E3] text-[14px] pl-[38px] pr-[35px] rounded-[4px] focus:border-point1`}
          type="text"
          maxLength={50}
          placeholder="L.POINT 아이디 입력"
        />
        {idValue ? (
          <button onClick={() => setIdValue('')}>
            <LoginIcon.inpClose className="absolute right-[12px] top-1/2 transform -translate-y-1/2" />
          </button>
        ) : (
          ''
        )}
      </div>
      {idInfo ? (
        ''
      ) : (
        <p className="text-[13px] mt-[6px] text-[#EF3D2E]">
          아이디를 입력해 주세요.
        </p>
      )}
      {/* PS 인풋 */}
      <div className="mt-[6px] relative">
        <LoginIcon.pw className="absolute left-[12px] top-1/2 transform -translate-y-1/2" />
        <input
          ref={pwRef}
          value={pwValue}
          onChange={(e) => setPwValue(e.target.value)}
          className={`w-full h-[44px] border-[#DDE0E3] text-[14px] pl-[38px] pr-[35px] rounded-[4px] focus:border-point1`}
          type={pwType}
          placeholder="비밀번호 입력"
          autoComplete="off"
        />
        <button type="button" onClick={typeToggle}>
          {pwType === 'text' ? (
            <LoginIcon.eyeActive className="absolute right-[12px] top-1/2 transform -translate-y-1/2" />
          ) : (
            <LoginIcon.eye className="absolute right-[12px] top-1/2 transform -translate-y-1/2" />
          )}
        </button>
      </div>
      {pwInfo ? (
        ''
      ) : (
        <p className="text-[13px] mt-[6px] text-[#EF3D2E]">
          비밀번호를 입력해 주세요.
        </p>
      )}
      {/* 로그인버튼 */}
      <div className="mt-[8px]">
        <button
          type="submit"
          className="btn w-full bg-[#00A5B9] border-[#00A5B9]  text-[#fff] rounded-[4px] hover:bg-point1 h-[44px]"
        >
          로그인
        </button>
      </div>
    </form>
  );
}
