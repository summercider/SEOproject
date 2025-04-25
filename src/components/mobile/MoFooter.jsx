import FamilySite from '@/components/home/FamilySite';
import MoFooterLeft from '@/components/mobile/MoFooterLeft';

export default function MoFooter() {
  return (
    <div className="px-[20px] bg-[#F9F9FA]">
      <div className="py-[20px] flex justify-between relative">
        <MoFooterLeft />
        <div className="absolute right-0 top-[20px]">
          <FamilySite />
        </div>
      </div>
    </div>
  );
}
