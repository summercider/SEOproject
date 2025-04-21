import LoginFn from '@/components/login/LoginFn';
import LoginForm from '@/components/login/LoginForm';
import SignSns from '@/components/SignSns';

export default function LoginSign() {
  return (
    <div className="max-w-[420px] mx-auto my-0 pt-[20px]">
      {/* 로그인 헤더 */}
      <h3 className="text-center text-[22px] text-gray-600 font-semibold">
        지금 로그인하고
        <br />
        <strong className="text-[#00A5B9] font-semibold">LOTTE EATZ </strong>
        혜택받으세요!
      </h3>
      <div className="mt-[40px]">
        {/* 로그인 form sign */}
        <LoginForm />
        <LoginFn />
      </div>
      <div className="sns mt-[30px] flex flex-col gap-[10px] font-medium">
        {/* 로그인 Sns sign */}
        <SignSns />
      </div>
    </div>
  );
}
