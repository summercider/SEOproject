import EatzTvMore from '@/components/home/EatzTvMore';
import Bg from '/images/csa/eatzTv/maxresdefault1.jpg';
import EatzTvBanner from '@/components/home/EatzTvBanner';

export default function EatzBg() {
  return (
    <div className="pt-[40px] max-sm:pt-[30px]">
      <div
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: 'cover',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 165, 185, 0.8)',
            backdropFilter: 'blur(20px)',
            height: '354px',
          }}
        >
          <EatzTvMore />
          <EatzTvBanner />
        </div>
      </div>
    </div>
  );
}
