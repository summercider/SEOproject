import MainAside from '@/components/home/MainAside';
import MainContent from '@/components/home/MainContent';

// 메인 이너, 임시 높이 지정
export default function MainInner() {
  return (
    <div className="w-[1150px] mx-[auto] px-[20px] flex flex-row h-[2000px]">
      <MainContent />
      <MainAside />
    </div>
  );
}
