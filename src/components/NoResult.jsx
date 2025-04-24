import noResult from '@/assets/images/noresult.svg';

export default function NoResult({ txt }) {
  return (
    <div className="text-center text-[#999] py-[160px] text-[14px]">
      <img src={noResult} />
      <p className="mt-[6px] flex justify-center flex-col gap-[10px]">
        {txt.split('\n').map((txtline, idx) => (
          <span key={idx}>
            {txtline}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
