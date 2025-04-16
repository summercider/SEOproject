import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
//npm install --save-dev vite-plugin-svgr << svgr npm설치

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()], //svgr() 추가 >svgr은 src만 인식
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
