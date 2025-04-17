import { LoginIcon } from '@/components/login/LoginIcon';
import LoginNav from '@/components/login/LoginNav';
import SignSns from '@/components/SignSns';

export default function Join() {
  const snsType = 'join';

  return (
    <div className="wrapper pt-[30px] pb-[100px]">
      <div className="inner max-w-[1150px] px-[20px]  mx-auto my-0">
        {/* 네비 */}
        <LoginNav />
        <div className="max-w-[420px] mx-auto my-0">
          <div className="flex flex-col items-center">
            <LoginIcon.join />
            <h3 className="text-gray-600 text-[22px] font-medium pt-[40px]">
              <span className="text-point1 ">LOTTE EATZ</span> 회원가입
            </h3>
            <p className="mt-[15px] mb-[50px] text-[14px] text-[#000]">
              간편하고 다양한 방법으로 회원이 될 수 있어요!
            </p>
          </div>
          <div className="Joinsns flex flex-col gap-[10px] font-semibold">
            <SignSns snsType={snsType} />
          </div>
        </div>
      </div>
    </div>
  );
}
