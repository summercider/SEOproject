import brandlogo from '@/assets/images/brand_logo.jpg';

export default function AsideLogo() {
  return (
    <div className="max-sm:hidden mt-[30px]">
      <img src={brandlogo} alt="" />
    </div>
  );
}
