import { Link } from 'react-router';

export default function PopularViewMore({ activeBrand }) {
  const brandColors = {
    '크리스피크림 도넛': '#1CAC68',
    엔제리너스: '#AA9481',
    롯데리아: '#EF3D2E',
    '플레:이팅': '#222',
  };

  return (
    <div className="mt-[40px]">
      <Link
        to="/"
        className="block"
        style={{
          borderTop: '1px dashed #DDE0E3',
          paddingTop: '20px',
        }}
      >
        <p className="text-[14px] leading-[18px] tracking-[-0.025em] text-center text-black">
          <span
            className="font-bold"
            style={{ color: brandColors[activeBrand] }}
          >
            {activeBrand}
          </span>
          <span> 메뉴 보러가기</span>
        </p>
      </Link>
    </div>
  );
}
