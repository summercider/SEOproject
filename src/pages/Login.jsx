import home from '@/assets/images/comm_ico_home.svg';
import divide from '@/assets/images/ico_breadcrumb_divide.svg';
import LoginSign from '@/components/login/LoginSign';
import { Link } from 'react-router';

export default function Login() {
  return (
    //페이지 랩 상30 하100
    <div className="wrapper pt-[30px] pb-[100px] bg-[#ddd]">
      {/*페이지 이너 1100 좌우 20 */}
      <div className="inner max-w-[1150px] px-[20px]  mx-auto my-0 bg-[#ccc]">
        {/* 네비 */}
        <ul className="flex justify-end text-[13px] leading-[16px] items-center gap-[8px] text-gray-400">
          <li>
            <Link to={'/'}>
              <img src={`${home}`} className="-mt-[1px]" />
            </Link>
          </li>
          <li>
            <img src={`${divide}`} />
          </li>
          <li>
            <span>로그인</span>
          </li>
        </ul>

        {/* 로그인 */}
        <div className="sign bg-[#fff]">
          로그인랩
          <LoginSign />
        </div>

        {/* 가입 */}
        <div className="join bg-amber-100">
          가입랩
          <div className="max-w-[420px] mx-auto my-0"> 가입 이너</div>
        </div>
      </div>
    </div>
  );
}
