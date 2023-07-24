import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 500,
  },
  server: {
    port: 3000,
  },
});
