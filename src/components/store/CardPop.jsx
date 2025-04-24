import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export default function CardPop({ popShow, setPopShow }) {
  const popRef = useRef(null);

  //팝업 띄우면 scroll 막기
  const stopScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  //클린업
  useEffect(() => {
    if (popShow) {
      stopScroll();
    }
    return () => {
      if (popShow) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [popShow]);
  useEffect(() => {
    const outsideClick = (e) => {
      if (!popRef.current.contains(e.target)) {
        setPopShow(false);
      }
    };
    document.addEventListener('mousedown', outsideClick);

    return () => {
      document.removeEventListener('mousedown', outsideClick);
    };
  }, []);
  //state변경
  const closeClick = () => {
    setPopShow(false);
  };

  return ReactDOM.createPortal(
    <div
      className={`fixed left-0 top-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-300
      ${popShow ? 'visible opacity-[100%]' : 'opacity-0 invisible'} 
      `}
    >
      <div
        ref={popRef}
        className={`w-[800px] p-[20px] h-[900px] bg-[#fff] rounded-[10px] z-301 max-sm:w-full max-sm:h-full max-sm:rounded-none
        `}
      >
        <div className="relative">
          <h1 className="font-semibold text-gray-600 text-[18px] leading-[22px]">
            EATZ카드 안내
          </h1>
          <button
            type="btn"
            onClick={closeClick}
            className=" w-[44px] h-[44px] absolute -top-[10px] -right-[20px] text-center "
          >
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
                  strokeWidth={2}
                />
                <line
                  id="Line_51"
                  data-name="Line 51"
                  x2="16"
                  y2="16"
                  transform="translate(54 752)"
                  fill="none"
                  stroke="#000"
                  strokeWidth={2}
                />
              </g>
              <script xmlns="" />
            </svg>
          </button>
          <div
            className="[&>h3]:mt-[30px] [&>h3]:mb-[10px] [&>h3]:font-semibold [&>h3]:text-gray-600
          [&>p>span]:mt-[10px] [&>p>span]:pl-[7px] [&>p>span]:block [&>p>span]:text-[13px]"
          >
            <h3>EATZ카드란?</h3>
            <p className="text-[14px]">
              엔제리너스 앱이 LOTTE EATZ앱으로 통합 운영 됨에 따라 엔제리너스
              카드가 EATZ카드로 네이밍이 변경 되었습니다. 롯데GRS㈜ 브랜드인
              롯데리아, 엔제리너스, 크리스피크림 도넛 매장 및 LOTTE EATZ앱에서도
              결제 및 L.POINT 혜택을 받으실 수 있습니다.
            </p>
            <h3>구매 및 선물</h3>
            <p className="text-[14px]">
              EATZ카드는 LOTTE EATZ앱에서 구매 및 충전 가능합니다.
              <br />
              모바일카드로만 운영 되며 실물카드는 별도로 운영하지 않습니다.
              신용카드로 구매 및 충전 가능합니다.
              <br />
              충전 금액 및 단위 : 5,000~100,000원 (1만원 단위 충전 가능)
              <br />
              <br />
              EATZ카드는 선물이 가능합니다.
              <br />
              다양한 카테고리의 카드 이미지를 선택 후 선물하실 분의 연락처와
              간단한 메세지를 담아 선물해 보세요.
              <br />
              <span>
                · 선물내역페이지에서 SMS로 재전송이나 결제 취소가 가능합니다.
              </span>
            </p>
            <h3>등록</h3>
            <p className="text-[14px]">
              SMS으로 수신된 EATZ카드를 LOTTE EATZ앱에 카드번호와 PIN 번호
              입력으로 등록하여 사용할 수 있습니다.
              <br />
              등록 시 사용 내역과 잔액 확인이 가능하며, 금액 충전, 잔액 합산,
              카드 삭제 기능으로 보유한 카드를 관리할 수 있습니다.
              <br />
              <span>· 카드 삭제는 잔액이 0원인 경우에만 가능합니다.</span>
            </p>
            <h3>소득공제</h3>
            <p className="text-[14px]">
              EATZ카드는 롯데카드에서 운영 하는 선불카드로 세법상 소득공제를
              받기 위해서 반드시 소득공제 등록이 필요 합니다.
              <br />
              현금영수증 발급 시 세금 이중 부과가 될 수 있습니다.
              <br />
              <br />
              롯데카드 홈페이지(www.lottecard.co.kr) 에서 등록 (카드안내·신청 →
              상품권·기프트카드 → 인터넷 사용·소득공제 등록 →LOTTE EATZ앱 –
              소득공제 등록)가능하며 등록 이후 사용 건(충전 시에는 소득공제
              불가)에 대해서 연말 소득공제 됩니다.
              <br />
              <br />
              본인 인증 시 공인인증서를 사용할 경우 롯데카드 홈페이지 로그인
              절차가 없어도 무방하나, 롯데카드로 인증할 경우 로그인이
              필요합니다.
            </p>
            <h3>사용</h3>
            <p className="text-[14px]">
              EATZ카드는 매장 및 앱에서 배달부터~매장픽업/드라이빙 픽업까지 모두
              이용이 가능합니다.
              <br />
              이용 가능 브랜드는 롯데리아, 엔제리너스, 크리스피크림 도넛 입니다.
              <br />
              <span>
                · 기존 엔제리너스 카드 앱에서 이용중인 엔제리너스 카드는 LOTTE
                EATZ앱 으로 자동 이관됩니다.
              </span>
              <span>
                · 공항, 리조트, 휴게소, 역사, 위락지, 임대매장 등 일부 특수 사용
                불가합니다.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
