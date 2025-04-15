export default function Relation({ data }) {
  return (
    <div>
      <h3 className="mb-[20px] text-[18px] text-gray-600">
        이 상품의 연관상품입니다
      </h3>
      <div className="flex items-center mb-[20px]">
        <span className="w-[80px] h-[80px] border border-[#EFF1F3] mr-[12px] flex justify-center items-center">
          <img src={`${data[0].img}`} alt={``} />
        </span>
        <p className="text-[14px] text-gray-600">{data[0].name}</p>
      </div>

      <div className="flex items-center mb-[20px]">
        <span className="w-[80px] h-[80px] border border-[#EFF1F3] mr-[12px] flex justify-center items-center">
          <img src={`${data[0].img}`} alt={``} />
        </span>
        <p className="text-[14px] text-gray-600">{data[0].name}</p>
      </div>
    </div>
  );
}
