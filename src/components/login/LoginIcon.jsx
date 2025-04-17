import Eye from '@/assets/images/login/ico_eye.svg?react';
import EyeActive from '@/assets/images/login/ico_eye_active.svg?react';
import Id from '@/assets/images/login/ico_id.svg?react';
import InpClose from '@/assets/images/login/ico_inp_close.svg?react';
import Kakao from '@/assets/images/login/ico_kakao.svg?react';
import Naver from '@/assets/images/login/ico_naver.svg?react';
import Pw from '@/assets/images/login/ico_pw.svg?react';
import Check from '@/assets/images/login/ui_ico_check.svg?react';
import CheckOn from '@/assets/images/login/ui_ico_check_on.svg?react';
import Shsign from '@/assets/images/login/ico_shsign.png';
import More from '@/assets/images/login/comm_ico_more_view_arr.svg?react';
import Join from '@/assets/images/login/bg_member_sign_gate.svg?react';
import Point from '@/assets/images/login/ico_point.svg?react';

//svg는 ?react 쿼리파라미터 추가할것.
// 사용시 export를 import할것.
// svg는 컴포넌트로 사용할것 <LoginIcon.id />
// png,jpg는 사용시 img태그로 사용할것 src={LoginIcon.sh}
// <Icons.eye width={20} height={20} fill="#888" /> 커스터마이징 가능

export const LoginIcon = {
  eye: Eye,
  eyeActive: EyeActive,
  id: Id,
  inpClose: InpClose,
  kakao: Kakao,
  naver: Naver,
  pw: Pw,
  check: Check,
  checkOn: CheckOn,
  sh: Shsign,
  more: More,
  join: Join,
  point: Point,
};
