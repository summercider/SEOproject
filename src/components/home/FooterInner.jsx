import FooterLeft from '@/components/home/FooterLeft';
import FooterRight from '@/components/home/FooterRight';

export default function FooterInner() {
  return (
    <div className="max-w-[1150px] py-[29px] px-[20px] mx-auto flex justify-between">
      <FooterLeft />
      <FooterRight />
    </div>
  );
}
