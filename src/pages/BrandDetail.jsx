//브랜드 각 페이지  다 만들어야함
import Cside from '@/components/brand/Cside';
import Dside from '@/components/brand/Dside';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router'; //라우터 path  parameter확인하기

export default function BrandDetail() {
  let { brand, id } = useParams();

  // 데이터를 가져올건데 브랜드 전체가아닌 id에 해당하는 값만
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['brand', id], // brand 앞에 문자열은 설명임 데이터중 id 인 데이터
    queryFn: () => fetch(`/brand/${brand}/${id}`).then((res) => res.json()),
  });
  // console.log(data);
  // console.log(brand, id);

  const [popIdx, setPopIdx] = useState(false); //팝업 z인덱스 컨트롤

  const brandName = (brand) => {
    switch (brand) {
      case 'ria':
        return '롯데리아';
      case 'engel':
        return '엔제리너스';
      case 'cream':
        return '크리스피크림';
      case 'plating':
        return '플레:이팅';
    }
  };

  return (
    <div
      className="wrapper pt-[30px]  pb-[50px] relative
        before:w-full before:h-[1px] before:bg-[#DDE0E3] before:absolute before:top-[90px] before:left-0
        max-sm:p-0 max-sm:before:hidden
        "
    >
      <div
        className="inner  max-w-[1150px] my-0 mx-auto px-[20px]
        max-sm:p-0"
      >
        <div
          className=" pb-[30px] text-[#000] text-[26px]
          max-sm:hidden"
        >
          <h3 className="font-[500]">{brandName(brand)}</h3>
        </div>
        <div
          className=" flex
            max-sm:flex-col"
        >
          <Cside data={data} popIdx={popIdx} setPopIdx={setPopIdx} />
          <Dside data={data} setPopIdx={setPopIdx} />
        </div>
      </div>
    </div>
  );
}
