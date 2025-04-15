import ShopBrand from '@/components/home/ShopBrand';
import ShopList from '@/components/home/ShopList';
import ShopMore from '@/components/home/ShopMore';
import { useState } from 'react';

const shopList = [
  {
    brandName: '크리스피크림 도넛',
    title: '클래식 도트 시그니처 머그(L)',
    price: 9000,
    url: '/images/csa/goods/cup.png',
  },
  {
    brandName: '크리스피크림 도넛',
    title: '콰트로캔틴 메탈 그린',
    price: 34000,
    url: '/images/csa/goods/green.jpg',
  },
  {
    brandName: '크리스피크림 도넛',
    title: '모던 골드링 시그니처 머그(L)',
    price: 9000,
    url: '/images/csa/goods/cup-gold.png',
  },
  {
    brandName: '크리스피크림 도넛',
    title: '콰트로캔틴 메탈 레드',
    price: 34000,
    url: '/images/csa/goods/red.jpg',
  },
  {
    brandName: '크리스피크림 도넛',
    title: '워터저그 디스펜서 딥그린',
    price: 35000,
    url: '/images/csa/goods/water.jpg',
  },
  {
    brandName: '크리스피크림 도넛',
    title: '비비드 그린 시그니처 머그(L)',
    price: 9000,
    url: '/images/csa/goods/greenmug.jpg',
  },
  {
    brandName: '크리스피크림 도넛',
    title: '알파인 플라스크 버건디',
    price: 32000,
    url: '/images/csa/goods/bu.png',
  },
  {
    brandName: '엔제리너스',
    title: '아소부 얼티밋머그(화이트)',
    price: 24000,
    url: '/images/csa/goods/cup3.png',
  },
  {
    brandName: '엔제리너스',
    title: '보노보노 인형',
    price: 20000,
    url: '/images/csa/goods/bono.png',
  },
  {
    brandName: '롯데리아',
    title: '롯데리아 촵딱이 퍼터 골프 커버 블레이드',
    price: 35000,
    url: '/images/csa/goods/golfCover.png',
  },
  {
    brandName: '롯데리아',
    title: '롯데리아 촵딱이 골프 우드 커버',
    price: 32000,
    url: '/images/csa/goods/woodCover.png',
  },
];

export default function Shop() {
  const [shopName, setShopName] = useState('크리스피크림 도넛');
  const brandNames = [...new Set(shopList.map((item) => item.brandName))];
  const shopSelectData = shopList.filter((item) => item.brandName === shopName);

  return (
    <div className="pt-[40px] pr-[20px]">
      <ShopMore />
      <ShopBrand
        brandNames={brandNames}
        shopName={shopName}
        setShopName={setShopName}
      />
      <ShopList shopSelectData={shopSelectData} />
    </div>
  );
}
