import LoginJoin from '@/components/login/LoginJoin';
import LoginNav from '@/components/login/LoginNav';
import LoginSign from '@/components/login/LoginSign';

export default function Login() {
  return (
    <div className="wrapper pt-[30px] pb-[100px]">
      <div className="inner max-w-[1150px] px-[20px]  mx-auto my-0">
        {/* 네비 */}
        <LoginNav />
        {/* 로그인 */}
        <div className="sign bg-[#fff] max-sm:pb-[30px]">
          <LoginSign />
        </div>
        {/* 가입 */}
        <div
          className="pt-[40px] relative max-sm:before:content-[''] 
          max-sm:before:block max-sm:before:absolute max-sm:before:top-0 max-sm:before:-left-[20px]
          max-sm:before:w-[calc(100%+40px)] max-sm:before:h-[10px] max-sm:before:bg-[rgba(221,224,227,0.4)]"
        >
          <div className="max-w-[420px] mx-auto my-0">
            <LoginJoin />
          </div>
        </div>
      </div>
    </div>
  );
}
