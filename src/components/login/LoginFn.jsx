import { useState } from 'react';
import { LoginIcon } from '@/components/login/LoginIcon';

export default function LoginFn() {
  const [check, setCheck] = useState(false);
  const loginLink = (params) => {
    switch (params) {
      case 'id':
        window.open(
          'https://members.lpoint.com/exView/manage/fdId_01_001',
          '_blank',
          'width=1200,height=1200'
        );
        break;
      case 'pw':
        window.open(
          'https://members.lpoint.com/exView/manage/fdPassword_01_001',
          '_blank',
          'width=1200,height=1200'
        );
        break;
      default:
        window.open(
          'https://members.lpoint.com/',
          '_blank',
          'width=1200,height=1200'
        );
    }
  };

  return (
    <div className="flex justify-between mt-[16px] items-center">
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
          <span className="wihtepace-pre-wrap text-[14px] pl-[6px] leading-[24px]">
            자동로그인
          </span>
        </label>
      </div>
      {/* Fn 찾기 */}
      <div className="flex gap-[8px] h-[18px]  ">
        <button
          onClick={() => loginLink('id')}
          className="text-[13px] text-[#999]"
        >
          아이디 찾기
        </button>
        <span className="relative before:content-[''] before:absolute before:w-[1px] before:h-[10px] before:bg-[#999]  before:left-1/2 before:top-1/2 before:-translate-y-1/2  before:-translate-x-1/2"></span>
        <button
          onClick={() => loginLink('pw')}
          className="text-[13px] text-[#999]"
        >
          비밀번호 찾기
        </button>
      </div>
    </div>
  );
}
