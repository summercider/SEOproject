import { FaqIcon } from '@/components/voc/FaqIcon';

export default function FaqList({ limitedFaqList, showAnswer, showAnswerBtn }) {
  //list 브랜드명 색상
  const brandColors = {
    롯데리아: 'bg-[rgba(239,61,46,0.1)] text-[#EF3D2E]',
    엔제리너스: 'bg-[rgba(170,148,129,0.1)] text-[#AA9481]',
    크리스피크림도넛: 'bg-[rgba(28,172,104,0.1)] text-[#1CAC68]',
    '플레:이팅': 'bg-[rgba(34,34,34,0.1)] text-[#666]',
    'LOTTE EATZ': 'bg-[rgba(0,165,185,0.1)] text-[#00A5B9]',
  };

  return (
    <div className="border-t-1 border-[#222]">
      {/*  */}
      <ul>
        {limitedFaqList.map((faq, index) => (
          <li key={index}>
            {/* 질문 */}
            <button
              className={`질문칸 relative  w-full py-[20px] pr-[30px] border-[rgba(221,224,227,0.6)]
              ${showAnswer === index ? 'border-b-0' : 'border-b-1'}`}
              onClick={() => showAnswerBtn(index)}
            >
              <div className="flex mb-[8px] items-center text-[14px]">
                <h4
                  className={`my-[3px] mx-[1px] px-[6px] py-[3px] text-[12px] font-semibold ${
                    brandColors[faq.brand]
                  } `}
                >
                  {faq.brand}
                </h4>
                <p
                  className=" pl-[9px] ml-[8px] relative before:left-0 before:top-[3px]
                  before:content-[''] before:w-[1px] before:block before:h-[10px] before:bg-[#C2C7CC] before:absolute "
                >
                  {faq.type}
                </p>
              </div>
              {/* 질문 */}
              <div className="flex">
                <FaqIcon.question className="bg-[#C2C7CC] rounded-full mr-[8px]" />
                <p className="text-[15px] text-gray-600">{faq.question}</p>
              </div>
              <FaqIcon.arrow
                className={`absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-130 ease-in-out
                ${showAnswer === index ? 'transform rotate-180' : 'rotate-0'} `}
              />
            </button>
            {/* 답 */}
            {showAnswer === index && (
              <div className="답칸 p-[20px] flex gap-[8px] text-[14px] items-center">
                <FaqIcon.answer className="bg-[#666] rounded-full" />
                {faq.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
      {/*  */}
    </div>
  );
}
