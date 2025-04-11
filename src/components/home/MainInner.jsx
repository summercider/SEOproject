import MainAside from '@/components/home/MainAside';
import MainContent from '@/components/home/MainContent';

export default function MainInner() {
  return (
    <div className="max-w-[1150px] mx-[auto] px-[20px] flex flex-row">
      <MainContent />
      <MainAside />
    </div>
  );
}
