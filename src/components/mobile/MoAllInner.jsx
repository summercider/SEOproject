import MoAllContent from '@/components/mobile/MoAllContent';
import MoAllTop from '@/components/mobile/MoAllTop';
import MoFooter from '@/components/mobile/MoFooter';

// 모바일 하단 삼단 바 클릭 시 전체메뉴 랩의 이너
export default function MoAllInner({ moIsShow, setMoIsShow }) {
  return (
    <div className="">
      <MoAllTop moIsShow={moIsShow} setMoIsShow={setMoIsShow} />
      <MoAllContent />
      <MoFooter />
    </div>
  );
}
