import { Link } from 'react-router';

const brandLink = [
  {
    brand: '엔제리너스',
    brandBg: '/images/csa/brand-item/comm_bg_angelinus.png',
    path: '/brand/engel',
    bgColor: '#DAD6CB',
  },
  {
    brand: '롯데리아',
    brandBg: '/images/csa/brand-item/comm_bg_lotteria.png',
    path: '/brand/ria',
    bgColor: '#EF3D2E',
  },
  {
    brand: '크리스피크림 도넛',
    brandBg: '/images/csa/brand-item/comm_bg_krispy.png',
    path: '/brand/cream',
    bgColor: '#1CAC68',
  },
  {
    brand: '플레:이팅',
    brandBg: '/images/csa/brand-item/comm_bg_plating.png',
    path: '/brand/plating',
    bgColor: '#222',
  },
];

export default function MoBrandMenu() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-[6px]">
        {brandLink.map((item, idx) => (
          <li key={item.brand} className="col-span-1">
            <Link
              to={item.path}
              className="h-[100px] block rounded-[4px] p-[16px] 
              text-[14px] tracking-[-0.025em] leading-[18px]"
              style={{
                backgroundColor: `${item.bgColor}`,
                backgroundImage: `url(${item.brandBg})`,
                backgroundSize: 'contain',
                backgroundPosition: 'right bottom',
                backgroundRepeat: 'no-repeat',
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
