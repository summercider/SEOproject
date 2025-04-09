import { Link } from 'react-router';

const brandLink = [
  {
    brand: '엔제리너스',
    brandBg: '/images/csa/brand-item/comm_bg_angelinus.png',
    path: '/',
  },
  {
    brand: '롯데리아',
    brandBg: '/images/csa/brand-item/comm_bg_lotteria.png',
    path: '/',
  },
  {
    brand: '크리스피크림 도넛',
    brandBg: '/images/csa/brand-item/comm_bg_krispy.png',
    path: '/',
  },
  {
    brand: '플레:이팅',
    brandBg: '/images/csa/brand-item/comm_bg_plating.png',
    path: '/',
  },
];

// 어사이드 브랜드 바로가기 그리드
export default function BrandLink() {
  return (
    <div>
      <h3 className="text-black mt-[40px] mb-[20px]">
        브랜드 <strong className="font-bold">바로가기</strong>
      </h3>
      <ul className="grid grid-cols-2 gap-[6px]">
        {brandLink.map((item, idx) => (
          <li key={item.brand} className="col-span-1">
            <Link
              className="h-[100px] block rounded-[4px] p-[16px] 
              text-[14px] tracking-[-0.025em] leading-[18px]"
              style={{
                backgroundImage: `url(${item.brandBg})`,
                backgroundSize: 'cover',
                backgroundPosition: '100% 50%',
              }}
            >
              <span className={idx === 0 ? 'text-[#2F271F]' : 'text-[#fff]'}>
                {item.brand}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
