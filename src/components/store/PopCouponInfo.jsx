import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const paragraph = [
  {
    hd: '다운로드 쿠폰',
    txt1: '무료로 다운로드 받아 할인 받는 쿠폰',
    txt1_1: '기프티엘 고객센터 : 1644-4276',
    txt1_2: '(고객센터 운영시간 : 평일 9시~6시)',
  },
  {
    hd: '구매쿠폰',
    txt1: '사전 결제 후 사용 가능한 쿠폰',
    txt1_1: '기프티엘 고객센터 : 1644-4276',
    txt1_2: '(고객센터 운영시간 : 평일 9시~6시)',
  },
  {
    hd: '구독쿠폰',
    txt1: '이벤트 기간 동안 쿠폰 구매하기에서 구매 가능',
    txt2: '쿠폰 발급 환불, 정보확인 등',
    txt2_1: '롯데 e쿠폰 고객센터 : 1522-2552',
    txt2_2: '(고객센터 운영시간 : 평일 9시~6시)',
  },
  {
    hd: '제품교환권',
    txt1: '종이로 된 제품 교환형 쿠폰',
    txt1_1: '배달/매장픽업/드라이빙 픽업 사용 시 실물 카드 직원에게 전달',
  },
  {
    hd: '제휴 모바일쿠폰',
    txt1: '카카오 선물하기, 페이즈 등 제휴채널을 통해 구매한 쿠폰',
    txt2: '쿠폰 등록 후 사용 가능',
    txt2_1: '기프티엘 고객센터 : 1644-4276',
    txt2_2: '(고객센터 운영시간 : 평일 9시~6시)',
  },
  {
    hd: '쿠폰 정기구독 안내',
    tit: '쿠폰 정기구독 안내',
    txt1: '정기구독 신청일 당일 최초 1회 결제되며, 최초 신청일을 기준으로 매달 같은 날 정기결제가 진행',
    txt2: '정기결제 관련 자주묻는 질문을 확인해 보세요.',
  },
];

export default function PopCouponInfo({ isShowInfo, setIsShowInfo }) {
  const setRef = useRef(null);

  function stopScroll() {
    document.body.style.overflow = 'hidden';
  }
  function allowScroll() {
    document.body.style.overflow = 'auto';
  }

  // 스크롤 관리 로직
  useEffect(() => {
    if (isShowInfo) {
      stopScroll();
    } else {
      allowScroll();
    }
    return () => {
      allowScroll();
    };
  }, [isShowInfo]);

  // 바깥 영역 클릭 시 닫힘
  function handleOutside(e) {
    if (!setRef.current.contains(e.target)) {
      setIsShowInfo(false);
    }
  }

  useEffect(function () {
    document.addEventListener('mousedown', handleOutside);

    return function cleanup() {
      document.removeEventListener('mousedown', handleOutside);
    };
  }, []);

  function handleClose() {
    setIsShowInfo(false);
  }

  return ReactDOM.createPortal(
    <div className="fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-300 flex justify-center px-[20px] pt-[20px]">
      <div
        ref={setRef}
        className="flex flex-col gap-[20px] p-[20px] z-301 w-[400px] bg-white rounded-[8px]"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-black text-[18px] leading-[24px] tracking-[-0.025em] font-bold">
            쿠폰안내
          </h2>
          <button type="button" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="btn_닫기" transform="translate(-50 -748)">
                <rect
                  id="Rectangle_4524"
                  data-name="Rectangle 4524"
                  width="24"
                  height="24"
                  transform="translate(50 748)"
                  fill="none"
                />
                <line
                  id="Line_50"
                  data-name="Line 50"
                  x1="16"
                  y2="16"
                  transform="translate(54 752)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                />
                <line
                  id="Line_51"
                  data-name="Line 51"
                  x2="16"
                  y2="16"
                  transform="translate(54 752)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            {paragraph.map((item, index) => (
              <li
                key={index}
                className="text-[#444] text-[14px] leading-[18px] group"
              >
                <h3 className="text-[16px] leading-[22px] text-black mt-[30px] mb-[10px] group-first:mt-0">
                  {item.hd}
                </h3>
                <p className="pl-[8px] mb-[10px]">
                  <span className="block mb-[12px]">{item.tit}</span>
                  <span className="relative before:absolute before:left-[-8px] before:content-['-']">
                    {item.txt1}
                  </span>
                  <br />
                  {item.txt1_1}
                  {item.txt1_1 ? <br /> : ''}
                  {item.txt1_2}
                </p>
                <p className="pl-[8px]">
                  <span
                    className={`relative before:absolute before:left-[-8px] ${
                      item.txt2 ? "before:content-['-']" : 'before:content-none'
                    }`}
                  >
                    {item.txt2}
                  </span>
                  {item.txt2 ? <br /> : ''}
                  {item.txt2_1}
                  {item.txt2_1 ? <br /> : ''}
                  {item.txt2_2}
                </p>
              </li>
            ))}
          </ul>
          <Link to="/voc/faq" className="block mt-[12px] pl-[8px]">
            <button
              type="button"
              className="border border-[#DDE0E3] h-[32px] text-[13px] rounded-[4px] px-[13px] text-black"
            >
              FAQ보기
            </button>
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
}
