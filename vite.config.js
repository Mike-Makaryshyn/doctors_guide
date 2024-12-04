import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
   rollupOptions: {
     external: ['jspdf', 'react-firebase-hooks', 'jspdf-autotable'], // Exclude jsPDF from the bundle
   },
 },
};
