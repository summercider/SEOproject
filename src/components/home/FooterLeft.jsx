import Copyright from '@/components/home/Copyright';
import FooterBtnList from '@/components/home/FooterBtnList';
import FooterInfo from '@/components/home/FooterInfo';
import FooterMenu from '@/components/home/FooterMenu';
import FooterMenuList from '@/components/home/FooterMenuList';

const menu1 = [
  { item: '개인정보처리방침' },
  { item: '이용약관' },
  { item: '위치기반서비스 이용약관' },
  { item: '영상정보 처리기기 운영 및 관리 방침' },
  { item: '공지사항' },
  { item: '창업상담' },
  { item: '설정' },
];

const menu2 = [
  { item: '롯데리아' },
  { item: '엔제리너스' },
  { item: '크리스피크림 도넛' },
  { item: '창업설명회 신청' },
];

export default function FooterLeft() {
  return (
    <div className="flex flex-col">
      <FooterMenu>
        {menu1.map((i, idx) => (
          <FooterMenuList key={idx} item={i.item}>
            {i.item}
          </FooterMenuList>
        ))}
      </FooterMenu>
      <FooterMenu>
        <h2 className="text-[13px] leading-[18px] tracking-[-0.025em] text-black font-medium w-[134px]">
          가맹점 모집
        </h2>
        {menu2.map((i, idx) => (
          <FooterBtnList key={idx} item={i.item}>
            {i.item}
          </FooterBtnList>
        ))}
      </FooterMenu>
      <FooterMenu>
        <h2 className="text-[13px] leading-[18px] tracking-[-0.025em] text-black font-medium w-[134px]">
          협력사 거래희망등록
        </h2>
        <FooterBtnList
          className="btn text-[13px] leading-[18px] tracking-[-0.025em]
        border border-[#DDE0E3] h-[32px] bg-white rounded-[4px]"
        >
          납품제안
        </FooterBtnList>
      </FooterMenu>
      <FooterInfo />
      <Copyright />
    </div>
  );
}
