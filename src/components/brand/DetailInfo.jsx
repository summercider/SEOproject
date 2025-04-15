export default function DetailInfo({ detail }) {
  return (
    <ul
      className={`[&>li>p]:text-gray-600 text-[14px] p-[20px] bg-[rgba(239,241,243,0.4)] transition-all
    overflow-hidden duration-150 border-1 border-[#DDE0E3] border-t-0 border-b-0
    
    ${
      detail
        ? 'max-h-[600px]  border-b-1  ease-in visible'
        : 'max-h-0 invisible hidden'
    }`}
    >
      <li>
        <p className="text-[16px]">영양소정보</p>
        <ul>
          <li className="flex justify-between pt-[10px]">
            <p>총중량</p>
            <span className="text-gray-600"> 240 </span>
          </li>
          <li className="flex justify-between pt-[10px]">
            <p>열량</p>
            <span className="text-gray-600"> 737 </span>
          </li>
          <li className="flex justify-between pt-[10px]">
            <p>단백질g(%)</p>
            <span className="text-gray-600"> 27(50) </span>
          </li>
          <li className="flex justify-between pt-[10px]">
            <p>나트륨mg(%)</p>
            <span className="text-gray-600"> 1110(56) </span>
          </li>
          <li className="flex justify-between pt-[10px] text-[#00A5B9]">
            <p>당류g(%)</p>
            <span> 10 </span>
          </li>
          <li className="flex justify-between pt-[10px]">
            <p>포화지방</p>
            <span className="text-gray-600"> 18(120) </span>
          </li>
          <li className="mt-[12px]">
            고카페인 음료의 경우 어린이, 임산부, 카페인 민감자는 섭취에 주의해
            주시기 바랍니다.
          </li>
          <li className="mt-[8px]">1회 제공량 기준</li>
        </ul>
      </li>
      <li>
        <p className="text-[16px] mt-[30px] mb-[10px]">알러지정보</p>
        <span>우유, 밀, 대두, 달걀, 토마토, 닭고기, 쇠고기</span>
      </li>
      <li>
        <p className="text-[16px] mt-[30px] mb-[10px]">원산지정보</p>
        <span>쇠고기 - 호주산</span>
      </li>
    </ul>
  );
}
