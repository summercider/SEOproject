import MoAllInner from '@/components/mobile/MoAllInner';

// 모바일 하단 삼단 바 클릭 시 전체메뉴 랩
export default function MoAllMenu({ moIsShow, setMoIsShow }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-300 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
      <MoAllInner moIsShow={moIsShow} setMoIsShow={setMoIsShow} />
    </div>
  );
}
