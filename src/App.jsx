import Home from '@/pages/Home';
import Layout from '@/pages/Layout';
import { Routes, Route } from 'react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import BrandRia from '@/pages/BrandRia';
import BrandEngel from '@/pages/BrandEngel';
import BrandCream from '@/pages/BrandCream';
import BrandPlating from '@/pages/BrandPlating';
import RiaDetail from '@/pages/RiaDetail';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/brand/ria" element={<BrandRia />} />
          <Route path="/brand/:brand/:id" element={<RiaDetail />} />
          {/* riaDetail에서 param 확인 필요 */}
          <Route path="/brand/engel" element={<BrandEngel />} />
          <Route path="/brand/cream" element={<BrandCream />} />
          <Route path="/brand/plating" element={<BrandPlating />} />
          {/* <Route path="/evnet" /> */}
          {/* <Route path="/store" /> */}
          {/* <Route path="/voc" /> */}
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
