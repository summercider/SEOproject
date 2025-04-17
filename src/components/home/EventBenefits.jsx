import EventBanner from '@/components/home/EventBanner';
import EventMore from '@/components/home/EventMore';

export default function EventBenefits() {
  return (
    <div className="pt-[40px] pr-[20px] max-sm:pl-[20px]">
      <EventMore />
      <EventBanner />
    </div>
  );
}
