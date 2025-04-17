import MoAllInner from '@/components/mobile/MoAllInner';

export default function MoAllMenu({ moIsShow, setMoIsShow }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-300">
      <MoAllInner />
    </div>
  );
}
