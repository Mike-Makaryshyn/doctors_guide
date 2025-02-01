import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    outDir: 'dist',
  },
  assetsInclude: ['**/*.png', '**/*.PNG'] // Додаємо підтримку файлів з розширенням png та PNG
});