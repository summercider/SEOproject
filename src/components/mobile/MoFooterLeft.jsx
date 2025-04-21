import Copyright from '@/components/home/Copyright';
import { Link } from 'react-router';

const mofooterMenu = [
  { item: '개인정보처리방침' },
  { item: '이용약관' },
  { item: '위치기반서비스 이용약관' },
  { item: '영상정보 처리기기 운영 및 관리 방침' },
  { item: '공지사항' },
  { item: '창업상담' },
  { item: '협력사 거래희망등록 - 납품제안' },
  { item: '설정' },
  { info: '롯데GRS 사업자정보' },
  { info: '문의처' },
];

const itemData = mofooterMenu.filter((menu) => menu.item);
const infoData = mofooterMenu.filter((menu) => menu.info);

export default function MoFooterLeft() {
  return (
    <div>
      <ul>
        {itemData.map((menu, index) => (
          <li key={index} className="group py-[5px]">
            <Link className="text-[13px] leading-[18px] text-black group-first:font-medium">
              {menu.item}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex mt-[20px] gap-x-[22px]">
        {infoData.map((menu, index) => (
          <li key={index}>
            <button className="text-[14px] leading-[18px] text-black flex gap-x-[5px]">
              <span>{menu.info}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <g id="ic_deepth_arrow_h18" transform="translate(-808 -452)">
                    <rect
                      id="area"
                      width="18"
                      height="18"
                      transform="translate(808 452)"
                      fill="none"
                    />
                    <g
                      id="타원_540"
                      data-name="타원 540"
                      transform="translate(808 452)"
                      fill="#fff"
                      stroke="#ddd"
                      strokeWidth="1"
                    >
                      <circle cx="9" cy="9" r="9" stroke="none" />
                      <circle cx="9" cy="9" r="8.5" fill="none" />
                    </g>
                    <path
                      id="패스_14729"
                      data-name="패스 14729"
                      d="M1045.462,6643.4l3,3,3-3"
                      transform="translate(-231.462 -6183.403)"
                      fill="none"
                      stroke="#000"
                      strokeWidth="1"
                    />
                  </g>
                </svg>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Copyright />
    </div>
  );
}
