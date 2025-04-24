import more from '@/assets/images/card/comm_ico_more_view_arr.svg';
import cardBg from '@/assets/images/card/card_bg.svg';
import congratulation from '@/assets/images/card/congratu.png';
import goodLuck from '@/assets/images/card/goodluck.png';
import thankYou from '@/assets/images/card/thankyou.png';
import newEatz from '@/assets/images/card/neweatz.png';
import eatz from '@/assets/images/card/eatz.png';
import styles from '@/pages/StoreCard.module.css';

import StoreCardNav from '@/components/store/StoreCardNav';
import { useState } from 'react';
import LoginPop from '@/components/LoginPop';
import CardPop from '@/components/store/CardPop';

const cards = [newEatz, eatz, thankYou, goodLuck, congratulation];

export default function StoreCard() {
  const [show, setShow] = useState(false);
  const [cardSrc, setCardSrc] = useState(cards[0]);
  const [cardInfo, setCardInfo] = useState('잇츠로고');
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [popShow, setPopShow] = useState(false);

  const changeCardBtn = (card, idx) => {
    // console.log(card, idx);
    setCardSrc(card);
    switch (idx) {
      case 0:
        setCardInfo('잇츠로고');
        break;
      case 1:
        setCardInfo('롯데잇츠');
        break;
      case 2:
        setCardInfo('감사');
        break;
      case 3:
        setCardInfo('행운');
        break;
      case 4:
        setCardInfo('축하');
        break;
      default:
        setCardInfo('잇츠로고');
        break;
    }
    setSelectedCardIndex(idx);
  };

  return (
    <div className="wrapper px-[20px] pt-[30px] pb-[100px] max-w-[1150px] mx-auto my-0">
      <div className="inner">
        {/* 헤드 */}
        <div className="flex justify-between items-start mb-[30px] ">
          <h2 className="text-[26px] font-semibold text-gray-600 ">EATZ카드</h2>
          <StoreCardNav />
        </div>
        {/* 바디 */}
        <div className={`pt-[40px] relative ${styles['card-bg']}`}>
          <div className="카드래퍼 상단">
            <div className="text-center mb-[30px]">
              <h3 className="text-[22px] text-gray-600 pb-[12px]">
                마음을 전할땐{' '}
                <strong className="text-[#00A5B9] font-semibold">
                  EATZ<span className="text-gray-600">카드</span>
                </strong>
              </h3>
              <button
                onClick={() => setPopShow(true)}
                className="flex items-center justify-center mx-auto my-0 text-[14px] text-gray-600"
              >
                EATZ카드 안내 <img src={more} alt="" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[200px] h-[126px] mb-[20px]">
                <img src={cardSrc} alt="" className=" rounded-[6px]" />
              </div>
              <p className="text-[14px] text-gray-600">{cardInfo}</p>
            </div>
            <div className="mt-[30px]">
              <div>
                <ul className="flex justify-center gap-[6px] max-sm:overflow-x-scroll">
                  {cards.map((card, idx) => (
                    <li
                      key={idx}
                      className={`w-[86px] h-[57px] p-[1px] rounded-[4px] border-1 shrink-0 
                        ${
                          selectedCardIndex === idx
                            ? ' border-[#000]'
                            : 'border-[#fff]'
                        }`}
                    >
                      <button onClick={() => changeCardBtn(card, idx)}>
                        <img src={card} alt="" className="rounded-[4px]" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* 유의사항 */}
          <div className="카드래퍼 하단 mt-[30px] pt-[30px] border-t-1 border-[#DDE0E3]">
            <ul className="text-[14px] text-[#444] [&>li]:pl-[8px]">
              <li className="mt-[10px]">
                - EATZ카드 구매나 선물을 하시려면 원하시는 디자인의 카드를
                선택하시면 됩니다.
              </li>
              <li className="mt-[10px]">
                - ‘구매/선물’ 버튼 클릭 시 구매 상세페이지로 이동합니다.
              </li>
              <li className="mt-[10px]">
                - 사용처안내
                <ul className="text-[13px] text-[#666] [&>li]:pl-[7px] [&>li]:mt-[10px]">
                  <li>
                    · 전국 롯데리아, 엔제리너스, 크리스피크림 도넛 매장에서 이용
                    가능합니다.
                  </li>
                  <li>
                    · 단, 당사 POS가 아닌 입점매장(일부 휴게소, 리조트, 백화점,
                    마트 등)의 POS를 사용 하는 경우 카드 결제 시스템 불가로
                    인하여 LOTTE EATZ 카드(구 엔제리너스 카드) 사용이 불가
                    합니다.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* 구매선물버튼 */}
          <div className="mt-[50px] flex justify-center h-[56px]">
            <button
              onClick={() => setShow(true)}
              className="btn bg-[#00A5B9] border-[#00A5B9] text-[#fff] w-[200px] hover:bg-point1 font-semibold rounded-[4px]
              max-sm:w-full"
            >
              구매/선물
            </button>
            <LoginPop show={show} setShow={setShow} />
            <CardPop popShow={popShow} setPopShow={setPopShow} />
          </div>
        </div>
      </div>
    </div>
  );
}
