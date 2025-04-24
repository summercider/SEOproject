export default function NoticeList({ limitedVocList }) {
  //list 브랜드명 색상
  const brandColors = {
    롯데리아: 'bg-[rgba(239,61,46,0.1)] text-[#EF3D2E]',
    엔제리너스: 'bg-[rgba(170,148,129,0.1)] text-[#AA9481]',
    크리스피크림도넛: 'bg-[rgba(28,172,104,0.1)] text-[#1CAC68]',
    '플레:이팅': 'bg-[rgba(34,34,34,0.1)] text-[#666]',
    'LOTTE EATZ': 'bg-[rgba(0,165,185,0.1)] text-[#00A5B9]',
  };

  return (
    <div className="border-t-1 border-[#222] mt-[20px]">
      <ul>
        {limitedVocList.map((voc, index) => (
          <li key={index}>
            {/* 질문 */}
            <button
              className={`flex justify-between items-center relative  w-full py-[20px] border-[rgba(221,224,227,0.6)] border-b-1`}
              onClick={() => {
                console.log('list클릭');
              }}
            >
              <div>
                {/* 헤더 */}
                <div className="flex mb-[8px] items-center text-[14px]">
                  <h4
                    className={`my-[3px] mx-[1px] px-[6px] py-[3px] text-[12px] font-semibold ${
                      brandColors[voc.brand]
                    } `}
                  >
                    {voc.brand}
                  </h4>
                  {voc.brand !== '롯데리아' &&
                    voc.brand !== '크리스피크림도넛' &&
                    voc.type !== '안내' && (
                      <p
                        className={`pl-[9px] ml-[8px] relative before:left-0 before:top-[3px]
                        before:content-[''] before:w-[1px] before:block before:h-[10px] before:bg-[#C2C7CC] before:absolute`}
                      >
                        {voc.type}
                      </p>
                    )}
                </div>
                {/*  */}
                {/* 제목 */}
                <div className="flex">
                  <p className="text-[15px] text-gray-600">{voc.title}</p>
                </div>
              </div>
              {/* 날짜 */}
              <p className="text-[14px] text-[#999]">{voc.date}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
