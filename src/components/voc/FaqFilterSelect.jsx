import { FaqIcon } from '@/components/voc/FaqIcon';
import FaqPop from '@/components/voc/FaqPop';
import { useState } from 'react';

export default function FaqFilterSelect({
  show,
  setShow,
  setKeyword,
  inputRef,
}) {
  const [type, setType] = useState('문의 유형 전체');
  return (
    <div className="my-[20px] pl-[6px] flex justify-between">
      <h2 className="w-[calc(100%-44px)] p-[10px] text-[14px] text-gray-600">
        {type}
      </h2>
      <button onClick={() => setShow(true)} className="p-[10px]">
        <FaqIcon.filter />
      </button>
      <FaqPop
        show={show}
        setShow={setShow}
        setKeyword={setKeyword}
        inputRef={inputRef}
        setType={setType}
      />
    </div>
  );
}
