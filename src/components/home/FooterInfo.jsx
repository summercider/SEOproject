const footerInfo = [
  {
    title: '롯데GRS 사업자정보',
    item1: '대표자 : 차우철',
    item2: '주소 : 서울시 송파구 백제고분로 217 LOTTE GRS 79 SQUARE',
    item3: '사업자번호 : 106-81-23498',
    item4: '통신판매번호 : 용산 06463',
    item5: '사업자정보확인',
  },
  {
    title: '문의처',
    item1: '본사 고객의 소리 운영시간: 평일 9시~18시',
    item2: '유선상담',
    item3: '일반문의/매장이용 불편사항 080-550-0005 (평일 9시~18시)',
    item4:
      '모바일 쿠폰 오류, 환불 등 문의 사항은 구입처에서만 유선 상담 가능합니다.',
    item5: 'LOTTE EATZ앱 문의: 1600-0552 (평일 9시-18시)',
    item6: '일반 쿠폰(기프티엘): 1644-4276 (평일 9시30분-18시)',
  },
];

export default function FooterInfo() {
  return (
    <>
      {footerInfo.map((i, index) => (
        <div className={`flex ${index === 1 ? 'mt-[20px]' : ''}`} key={index}>
          <div className="w-[134px]">
            <h2 className="text-[13px] leading-[18px] tracking-[-0.025em] text-black font-medium">
              {i.title}
            </h2>
          </div>
          <div className="text-[12px] leading-[16px] tracking-[-0.025em] text-[#666]">
            <div className="flex gap-x-[10px]">
              <span>{i.item1}</span>
              <span>{i.item2}</span>
              <span>{i.item3}</span>
            </div>
            <div className="mt-[5px] flex gap-x-[10px]">
              <span>{i.item4}</span>
              <span
                className={`${
                  i.item5 === '사업자정보확인' ? 'underline text-black' : ''
                }`}
              >
                {i.item5}
              </span>
            </div>
            <div className="mt-[5px]">
              <span>{i.item6}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
