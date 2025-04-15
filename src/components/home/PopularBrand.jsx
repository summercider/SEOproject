// const initBrand = ['크리스피크림 도넛', '엔제리너스', '롯데리아', '플레:이팅'];

export default function PopularBrand({ data, activeBrand, setActiveBrand }) {
  // new Set() 중복 제거
  const brands = [...new Set(data?.map((item) => item.brand))];
  // console.log(brands);

  function handleActiveBrand(name) {
    setActiveBrand(name);
  }

  return (
    <div className="flex">
      {brands.map((name) => (
        <button
          key={name}
          type="button"
          className={`block h-[16px] first:pl-0 pl-[15px] pr-[16px] relative text-[15px] tracking-[-0.025em]
            before:content-[''] before:absolute before:left-0 before:top-[3.5px] before:w-[1px] before:h-[10px] 
            before:border before:border-l-0 before:border-[#DDE0E3] 
            first:before:border-none
            ${
              activeBrand === name ? 'text-[#000] font-medium' : 'text-[#666]'
            }`}
          onClick={() => handleActiveBrand(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
