import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
   rollupOptions: {
     external: ['jspdf'], // Exclude jsPDF from the bundle
   },
 },
};
