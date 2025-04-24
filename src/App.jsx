import Home from '@/pages/Home';
import Layout from '@/pages/Layout';
import { Routes, Route } from 'react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import BrandRia from '@/pages/BrandRia';
import BrandEngel from '@/pages/BrandEngel';
import BrandCream from '@/pages/BrandCream';
import BrandPlating from '@/pages/BrandPlating';
import BrandDetail from '@/pages/BrandDetail';
import Login from '@/pages/Login';
import Join from '@/pages/Join';
import StoreCoupon from '@/pages/StoreCoupon';
import Faq from '@/pages/Faq';
import StoreCard from '@/pages/StoreCard';
import EventRoulette from '@/pages/EventRoulette';
import DailyCheck from '@/pages/DailyCheck';
import Notice from '@/pages/Notice';
import Class from '@/pages/Class';
import EatTv from '@/pages/EatTV';
import EventAll from '@/pages/EventAll';
import Survey from '@/pages/Survey';
import VocVoice from '@/pages/VocVoice';
import StoreAll from '@/pages/StoreAll';
import StoreShop from '@/pages/StoreShop';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/brand/ria" element={<BrandRia />} />
          <Route path="/brand/:brand/:id" element={<BrandDetail />} />
          {/* BrandDetail에서 param 확인 필요 */}
          <Route path="/brand/engel" element={<BrandEngel />} />
          <Route path="/brand/cream" element={<BrandCream />} />
          <Route path="/brand/plating" element={<BrandPlating />} />
          {/* <Route path="/evnet" /> */}
          <Route path="/event/all" element={<EventAll />} />
          <Route path="/event/class" element={<Class />} />
          <Route path="/event/roulette" element={<EventRoulette />} />
          <Route path="/event/eatzTv" element={<EatTv />} />
          <Route path="/event/dailycheck" element={<DailyCheck />} />
          {/* <Route path="/store" /> */}
          <Route path="/store/all" element={<StoreAll />} />
          <Route path="/store/coupon" element={<StoreCoupon />} />
          <Route path="/store/card" element={<StoreCard />} />
          <Route path="/store/shop" element={<StoreShop />} />
          {/* <Route path="/voc" /> */}
          <Route path="/voc/faq" element={<Faq />} />
          <Route path="/voc/notice" element={<Notice />} />
          <Route path="/voc/survey" element={<Survey />} />
          <Route path="/voc/voice" element={<VocVoice />} />
          {/* 로그인,가입 */}
          <Route path="/login" element={<Login />} />
          <Route path="/member/joinGate" element={<Join />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
