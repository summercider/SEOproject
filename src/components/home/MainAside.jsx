export default function MainAside() {
  return (
    <div
      className="w-[270px] pt-[30px] pl-[40px] relative
      before:content-[''] before:absolute before:left-0
      before:top-0 before:border before:border-r-0 before:border-t-0 
      before:border-b-0 before:border-[#DDE0E3] before:h-full "
    >
      <h3 className="text-[22px] leading-[28px] font-medium text-[#000]">
        <span className="block">고객님,</span>
        오늘도 <strong className="text-[#00a5b9] font-bold">EATZ</strong>하세요!
      </h3>
    </div>
  );
}
