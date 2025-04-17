import MainAside from '@/components/home/MainAside';
import MainContent from '@/components/home/MainContent';

export default function MainInner() {
  return (
    <div
      className="max-w-[1150px] mx-[auto] px-[20px] flex flex-row
    max-sm:w-full max-sm:flex-col max-sm:px-0"
    >
      <MainContent />
      <MainAside />
    </div>
  );
}
